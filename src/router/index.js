import Home from '../pages/Home';
import {RouterPath} from '../utils/constant';
import About from '@/components/test/about';
import khjdDetail from '@/pages/khjd/detail/index';
import taskHandle from '@/pages/khjd/taskHandle/index';
import taskTransfer from '@/pages/khjd/taskTransfer/index';
import HandleBasicInfo from '../pages/khjd/handleBasicInfo';
import HandleRisk from '../pages/khjd/handleRisk';
import HandleSurvey from '../pages/khjd/handleSurvey';
import HandlePhoto from '../pages/khjd/handlePhoto';

const routes = [
    {
        path     : RouterPath.index,
        component: Home
    },
    {
        path     : RouterPath.about,
        component: About
    },
    {
        path     : RouterPath.khjdDetail,
        component: khjdDetail
    },
    {
        path     : RouterPath.taskHandle,
        component: taskHandle
    },
    {
        path     : RouterPath.taskTransfer,
        component: taskTransfer
    },
    {
        path     : RouterPath.handleBasicInfo,
        component: HandleBasicInfo
    },
    {
        path     : RouterPath.handleRisk,
        component: HandleRisk
    },
    {
        path     : RouterPath.handleSurvey,
        component: HandleSurvey
    },
    {
        path     : RouterPath.handlePhoto,
        component: HandlePhoto
    }
];

export default routes;
