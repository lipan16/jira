import Temperature from '../components/temperature';
import About from '@/components/about';
import Home from '../pages/Home';
import khjdTask from '@/pages/khjd/taskhandle/index'

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
    },
    {
        path: '/khjd/task',
        name: 'khjdTask',
        component: khjdTask
    }
];

export default routes;
