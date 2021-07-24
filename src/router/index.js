import Temperature from '../components/temperature';
import About from '@/components/about';
import Home from '../pages/Home';
import khjdDetail from '@/pages/khjd/detail/index'

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
    }
];

export default routes;
