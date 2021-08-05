import Home from '../pages/Home';
import About from '@/components/test/about';
import taskHandle from '@/pages/khjd/taskHandle/index';
import khjdDetail from '@/pages/khjd/detail/index';

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
        path: '/khjd/detail',
        name: 'khjdDetail',
        component: khjdDetail
    },
    {
        path: '/khjd/taskHandle',
        name: 'taskHandle',
        component: taskHandle
    }
];

export default routes;
