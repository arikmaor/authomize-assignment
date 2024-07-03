import { PermissionGraph } from './permission-graph';
import { forEachJsonLine } from './readfile';


async function main() {
  const permissionsGraph = new PermissionGraph()

  await forEachJsonLine('./assets_iam_1066060271767_1578227771.1379685.json', (record) => {
    permissionsGraph.addEntry(record)
  });

  [
    'folders/188906894377',
    'folders/361332156337'
  ].forEach(resource => {
    console.log(`permissionsGraph.getResourceHierarchy('${resource}')`)
    console.log(permissionsGraph.getResourceHierarchy(resource))
  });


  [
    'user:ron@test.authomize.com',
    'serviceAccount:devops-dude-1@striking-arbor-264209.iam.gserviceaccount.com'
  ].forEach(identity => {
    console.log(`permissionsGraph.whoHasWhat('${identity}')`)
    console.log(permissionsGraph.whoHasWhat(identity))
  });
}


main()
