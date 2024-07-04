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
  [ 'folders/767216091627', 'roles/billing.admin' ],
  [ 'folders/36290848176', 'roles/billing.admin' ],
  [ 'folders/96505015065', 'roles/billing.admin' ],
  [ 'projects/185023072868', 'roles/billing.admin' ],
  [ 'projects/377145543109', 'roles/billing.admin' ],
  [ 'folders/188906894377', 'roles/billing.admin' ],
  [ 'folders/635215680011', 'roles/billing.admin' ],
  [ 'folders/96505015065', 'roles/billing.admin' ],
  [ 'folders/495694787245', 'roles/billing.admin' ],
  [ 'projects/20671306372', 'roles/billing.admin' ],
  [ 'folders/93198982071', 'roles/billing.admin' ],
  [ 'folders/361332156337', 'roles/billing.admin' ],
  [ 'folders/518729943705', 'roles/billing.admin' ],
  [ 'folders/837642324986', 'roles/billing.admin' ],
  [ 'folders/93198982071', 'roles/billing.admin' ],
  [ 'folders/361332156337', 'roles/billing.admin' ],
  [ 'folders/188906894377', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/36290848176', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/495694787245', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/635215680011', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/518729943705', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/767216091627', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/93198982071', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/361332156337', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/837642324986', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/96505015065', 'roles/resourcemanager.folderAdmin' ],
  [
    'organizations/1066060271767',
    'roles/resourcemanager.folderAdmin'
  ],
  [ 'folders/495694787245', 'roles/resourcemanager.folderAdmin' ],
  [ 'projects/20671306372', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/518729943705', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/837642324986', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/188906894377', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/635215680011', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/96505015065', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/93198982071', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/361332156337', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/767216091627', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/36290848176', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/96505015065', 'roles/resourcemanager.folderAdmin' ],
  [ 'projects/185023072868', 'roles/resourcemanager.folderAdmin' ],
  [ 'projects/377145543109', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/518729943705', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/837642324986', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/93198982071', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/361332156337', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/188906894377', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/635215680011', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/96505015065', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/495694787245', 'roles/resourcemanager.folderAdmin' ],
  [ 'projects/20671306372', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/93198982071', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/361332156337', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/518729943705', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/837642324986', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/93198982071', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/361332156337', 'roles/resourcemanager.folderAdmin' ],
  [ 'folders/188906894377', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/36290848176', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/495694787245', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/635215680011', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/518729943705', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/767216091627', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/93198982071', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/361332156337', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/837642324986', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/96505015065', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/495694787245', 'roles/resourcemanager.folderEditor' ],
  [ 'projects/20671306372', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/518729943705', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/837642324986', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/188906894377', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/635215680011', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/96505015065', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/93198982071', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/361332156337', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/518729943705', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/837642324986', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/93198982071', 'roles/resourcemanager.folderEditor' ],
  [ 'folders/361332156337', 'roles/resourcemanager.folderEditor' ],
  [ 'organizations/1066060271767', 'roles/owner' ],
  [ 'projects/185023072868', 'roles/owner' ],
  [ 'projects/20671306372', 'roles/owner' ],
  [ 'projects/377145543109', 'roles/owner' ],
  [ 'folders/767216091627', 'roles/owner' ],
  [ 'folders/36290848176', 'roles/owner' ],
  [ 'folders/96505015065', 'roles/owner' ],
  [ 'projects/185023072868', 'roles/owner' ],
  [ 'projects/377145543109', 'roles/owner' ],
  [ 'folders/188906894377', 'roles/owner' ],
  [ 'folders/635215680011', 'roles/owner' ],
  [ 'folders/96505015065', 'roles/owner' ],
  [ 'folders/495694787245', 'roles/owner' ],
  [ 'projects/20671306372', 'roles/owner' ],
  [ 'folders/93198982071', 'roles/owner' ],
  [ 'folders/361332156337', 'roles/owner' ],
  [ 'folders/518729943705', 'roles/owner' ],
  [ 'folders/837642324986', 'roles/owner' ],
  [ 'folders/93198982071', 'roles/owner' ],
  [ 'folders/361332156337', 'roles/owner' ]
]
permissionsGraph.whoHasWhat('serviceAccount:devops-dude-1@striking-arbor-264209.iam.gserviceaccount.com')
[ [ 'folders/188906894377', 'roles/owner' ] ]
```
