import AppRoot from './app-root';
import SignInUp from './SignInUp';
// import SignIn from './SignIn';
import List from './list';
import NotFound from './notfound';
import ListToUsers from './listtousers';

const routes = [
  { component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: SignInUp
      },
      { path: '/home',
        component: SignInUp
      },
      { path: '/list',
        component: ListToUsers
      },
      { path: '/users',
        component: List
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
