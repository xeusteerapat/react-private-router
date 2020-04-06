import Home from '../components/Pages/Home';
import About from '../components/Pages/About';
import VIP from '../components/Pages/VIP';
import Admin from '../components/Pages/Admin';

const components = {
  home: {
    component: Home,
    url: '/',
  },
  about: {
    component: About,
    url: '/about',
  },
  vip: {
    component: VIP,
    url: '/vip',
  },
  admin: {
    component: Admin,
    url: '/admin',
  },
};

const configRoutes = {
  guest: {
    routes: [components.home, components.about],
    redirect: '/',
  },
  user: {
    routes: [components.home, components.about, components.vip],
    redirect: '/vip',
  },
  admin: {
    routes: [...Object.values(components)],
    redirect: '/admin',
  },
};

export default configRoutes;
