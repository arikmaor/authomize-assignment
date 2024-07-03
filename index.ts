import fs from 'fs'
import readline from 'readline'
import { PermissionGraph } from './permission-graph';


async function main() {
  const permissionsGraph = await parseFile('./assets_iam_1066060271767_1578227771.1379685.json')

  console.log(permissionsGraph.toString());

  console.log(permissionsGraph.getResourceHierarchy('folders/188906894377'))

  console.log(permissionsGraph.whoHasWhat('user:ron@test.authomize.com'))
}

async function parseFile(path: string) {
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const permissionsGraph = new PermissionGraph()

  for await (const line of rl) {
    permissionsGraph.addEntry(JSON.parse(line))
  }

  return permissionsGraph
}

main()
