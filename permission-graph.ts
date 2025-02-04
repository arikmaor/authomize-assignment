import { Graph } from "./generic-graph"

type NodeType = 'resource' | 'role' | 'identity' | 'assignment-entry'
type EdgeType = 'parent' | 'assignment' | 'role-entry' | 'member'

type PermissionEntry = {
  ancestors: string[],
  iam_policy: {
    bindings: {
      role: string,
      members: string[]
    }[]
  }
}

export class PermissionGraph {
  private graph = new Graph<NodeType, EdgeType>()

  addEntry(entry: PermissionEntry) {
    const [id, ...ancestors] = entry.ancestors
    this.graph.addNode('resource', id)
    let child = id
    for (let parent of ancestors) {
      this.graph.addEdge('parent', child, parent)
      child = parent
    }
    entry.iam_policy.bindings.forEach(({ role, members }) => {
      this.graph.addNode('role', role)
      members.forEach(identity => {
        this.graph.addNode('identity', identity)
        const assignmentEntry = joinRoleIdentity(role, identity)
        this.graph.addNode('assignment-entry', assignmentEntry)
        this.graph.addEdge('member', assignmentEntry, identity)
        this.graph.addEdge('role-entry', assignmentEntry, role)
        this.graph.addEdge('assignment', id, assignmentEntry)
      })
    })
  }

  getResourceHierarchy(resourceId: string) {
    if (!this.graph.hasNode('resource', resourceId)) {
      throw new Error("Resource not found!")
    }

    const result = [];
    let parent = resourceId
    while (parent) {
      result.push(parent)
      parent = this.graph.getForwardNodes('parent', parent)[0]
    }
    return result
  }

  whoHasWhat(identityId: string) {
    if (!this.graph.hasNode('identity', identityId)) {
      throw new Error("Identity not found!")
    }

    const result: string[][] = [];
    this.graph.getBackwardNodes('member', identityId).forEach(entry => {
      const [role] = this.graph.getForwardNodes('role-entry', entry)
      const resources = this.graph.getBackwardNodes('assignment', entry)

      let resource = resources.shift()
      while (resource != undefined) {
        result.push([resource, role])
        resources.push(...this.graph.getBackwardNodes('parent', resource))
        resource = resources.shift()
      }
    })

    return result
  }

  toString() {
    return this.graph.toString()
  }

}

function joinRoleIdentity(role: string, identity: string) {
  return `${role} - ${identity}`
}
