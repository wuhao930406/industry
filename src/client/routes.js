require('require-ensure');
import AppRoot from './app-root';
// import SignInUp from './SignInUp';
const SignInUp = require('./SignInUp');
// import SignIn from './SignIn';
import List from './list';
import NotFound from './notfound';
import ListToUsers from './listtousers';

function loadRoute(cb) {
    return (module) => cb(null, module.default);
}

// const SignInUp = () => require('./SignInUp');
// const SignInUp = (location, cb) => {
//     System.import('./SignInUp')
//       .then(loadRoute(cb))
//       .catch(errorLoading);
// }

// const SignInUp = (location, cb) => rp('./SignInUp')
//     .then(module => module)
//     .catch(err => err);

// const SignInUp = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('./SignInUp').default);
//   }, 'signInUp');
// };

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
