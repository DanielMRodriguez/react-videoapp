import Home from '../containers/Home.jsx';
import Login from '../containers/Login.jsx';
import Register from '../containers/Register.jsx';
import NotFound from '../containers/NotFoud.jsx';
import Player from '../containers/Player.jsx';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/join',
    exact: true,
    component: Register,
  },
  {
    path: '/player/:id',
    exact: true,
    component: Player,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
