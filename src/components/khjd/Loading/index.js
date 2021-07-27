import {Loading} from 'zarm';
import './index.less';
import loadingSVG from '@/assets/loading.svg'
export default {
    show(text){
        Loading.show({
            content: (
                <div className="layout-loading flex-list">
                    <img src={loadingSVG} alt=""/>
                    {Boolean(text) && <span>{text}</span>}
                </div>
            )
        });
    },
    hide(){
        Loading.hide();
    }
};
