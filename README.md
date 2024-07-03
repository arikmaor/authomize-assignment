# Authomize Assignment

Output:

```
permissionsGraph.getResourceHierarchy('folders/188906894377')
[
  'folders/188906894377',
  'folders/767216091627',
  'organizations/1066060271767'
]
permissionsGraph.getResourceHierarchy('folders/361332156337')
[
  'folders/361332156337',
  'folders/96505015065',
  'folders/767216091627',
  'organizations/1066060271767'
]
permissionsGraph.whoHasWhat('user:ron@test.authomize.com')
[
  [ 'organizations/1066060271767', 'roles/billing.admin' ],
  [
    'folders/188906894377',
    'folders/767216091627',
    'organizations/1066060271767',
    'roles/resourcemanager.folderAdmin'
  ],
  [
    'folders/188906894377',
    'folders/767216091627',
    'organizations/1066060271767',
    'roles/resourcemanager.folderEditor'
  ],
  [ 'organizations/1066060271767', 'roles/owner' ]
]
permissionsGraph.whoHasWhat('serviceAccount:devops-dude-1@striking-arbor-264209.iam.gserviceaccount.com')
[
  [
    'folders/188906894377',
    'folders/767216091627',
    'organizations/1066060271767',
    'roles/owner'
  ]
]
```
