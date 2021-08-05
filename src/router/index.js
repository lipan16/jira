import Home from '../pages/Home';
import {RouterPath} from '../utils/constant';
import About from '@/components/test/about';
import khjdDetail from '@/pages/khjd/detail/index';
import taskHandle from '@/pages/khjd/taskHandle/index';
import taskTransfer from '@/pages/khjd/taskTransfer/index';

const routes = [
    {
        path: RouterPath.index,
        component: Home
    },
    {
        path: RouterPath.about,
        component: About
    },
    {
        path: RouterPath.khjdDetail,
        component: khjdDetail
    },
    {
        path: RouterPath.taskHandle,
        component: taskHandle
    },
    {
        path: RouterPath.taskTransfer,
        component: taskTransfer
    }
];

export default routes;
