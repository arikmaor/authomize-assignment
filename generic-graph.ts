export class Graph<TNode, TEdge> {
  private nodes = new Map<TNode, Set<string>>()
  private edgesFromTo = new Map<TEdge, Map<string, Set<string>>>()
  private edgesToFrom = new Map<TEdge, Map<string, Set<string>>>()

  addNode(type: TNode, id: string) {
    getOrCreateNestedSet(this.nodes, type).add(id)
  }

  addEdge(type: TEdge, from: string, to: string) {
    const fromTo = getOrCreateNestedMap(this.edgesFromTo, type)
    getOrCreateNestedSet(fromTo, from).add(to)
    const toFrom = getOrCreateNestedMap(this.edgesToFrom, type)
    getOrCreateNestedSet(toFrom, to).add(from)
  }

  hasNode(type: TNode, id: string) {
    return this.nodes.get(type)?.has(id) || false
  }

  getForwardNodes(relType: TEdge, nodeId: string) {
    return Array.from(this.edgesFromTo.get(relType)?.get(nodeId) || [])
  }

  getBackwardNodes(relType: TEdge, nodeId: string) {
    return Array.from(this.edgesToFrom.get(relType)?.get(nodeId) || [])
  }

  toString() {
    console.log('Nodes:')
    console.log(this.nodes)
    console.log('Edges:')
    console.log(this.edgesFromTo)
  }
}

function getOrCreateNestedMap<K, K2, V>(m: Map<K, Map<K2, V>>, key: K) {
  let nested = m.get(key)
  if (!nested) {
    nested = new Map()
    m.set(key, nested)
  }
  return nested
}

function getOrCreateNestedSet<K, V>(m: Map<K, Set<V>>, key: K) {
  let nested = m.get(key)
  if (!nested) {
    nested = new Set()
    m.set(key, nested)
  }
  return nested
}
