import Temperature from '../components/temperature';
import About from '@/components/about';
import Home from '../pages/Home';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
];

export default routes;
