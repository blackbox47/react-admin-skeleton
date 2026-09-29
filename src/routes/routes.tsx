import Dashboard from '@pages/dashboard';
import Permissions from '@pages/permissions';
import PermissionCreate from '@pages/permissions/create';
import PermissionEdit from '@pages/permissions/edit';
import Roles from '@pages/roles';
import RoleCreate from '@pages/roles/create';
import RoleEdit from '@pages/roles/edit';
import RolePermissions from '@pages/roles/permissions';
import Profile from '@pages/settings';
import Users from '@pages/users';
import UserCreate from '@pages/users/create';
import UserEdit from '@pages/users/edit';
import {
  DashboardBreadcrumb,
  DynamicUserBreadcrumb
} from '@/routes/route-utils';

const routes = [
  {
    path: '',
    breadcrumb: DashboardBreadcrumb,
    component: Dashboard,
    exact: true,
    children: [],
    props: {
      title: 'Dashboard'
    }
  },
  {
    path: 'users',
    breadcrumb: 'Users',
    component: '',
    exact: true,
    children: [
      {
        path: '',
        breadcrumb: 'Users',
        component: Users,
        exact: true,
        props: {
          title: 'Users'
        }
      },
      {
        path: 'create',
        breadcrumb: 'Create User',
        component: UserCreate,
        exact: true,
        props: {
          title: 'Create User'
        }
      },
      {
        path: ':id',
        breadcrumb: DynamicUserBreadcrumb,
        component: UserEdit,
        exact: true,
        props: {
          title: 'Edit User'
        }
      }
    ]
  },
  {
    path: 'profile',
    breadcrumb: 'Profile',
    component: Profile,
    exact: true,
    children: [],
    props: {
      title: 'User Profile'
    }
  },
  {
    path: 'roles',
    breadcrumb: 'Roles',
    component: '',
    exact: true,
    children: [
      {
        path: '',
        breadcrumb: 'Roles',
        component: Roles,
        exact: true,
        props: {
          title: 'Roles'
        }
      },
      {
        path: 'create',
        breadcrumb: 'Create Role',
        component: RoleCreate,
        exact: true,
        props: {
          title: 'Create Role'
        }
      },
      {
        path: ':id',
        breadcrumb: 'Edit Role',
        component: RoleEdit,
        exact: true,
        props: {
          title: 'Edit Role'
        }
      },
      {
        path: ':id/permissions',
        breadcrumb: 'Set Role Permissions',
        component: RolePermissions,
        exact: true,
        props: {
          title: 'Role Permissions'
        }
      }
    ]
  },
  {
    path: 'permissions',
    breadcrumb: 'Permissions',
    component: '',
    exact: true,
    children: [
      {
        path: '',
        breadcrumb: 'Permissions',
        component: Permissions,
        exact: true,
        props: {
          title: 'Permissions'
        }
      },
      {
        path: 'create',
        breadcrumb: 'Create Permission',
        component: PermissionCreate,
        exact: true,
        props: {
          title: 'Create Permission'
        }
      },
      {
        path: ':id',
        breadcrumb: 'Edit Permission',
        component: PermissionEdit,
        exact: true,
        props: {
          title: 'Edit Permission'
        }
      }
    ]
  },
];

export default routes;
