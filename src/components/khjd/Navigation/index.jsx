import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './index.less';
import backSvg from '@/assets/back.svg';
import searchSvg from '@/assets/search.svg';

class Navigation extends React.Component {
    static defaultProps = {
        show: false
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        show: PropTypes.bool
    };

    pageBack = () => {
        // if(this.state.page === '/'){
        //     window.WebApp.closeWebapp();
        // }else{
            this.props.history.go(-1);
        // }
    };

    searchList = () => {

    };

    render(){
        return (
            <>
                <div className="flex-inline navigation">
                    <img src={backSvg} alt="" onClick={this.pageBack}/>
                    <div className="strong"></div>
                    <div className="title">{this.props.title}</div>
                    <div className="strong"></div>
                    <img src={this.props.show ? searchSvg : ''} alt=""
                         onClick={this.searchList}/>
                </div>
            </>
        );
    }
}

export default withRouter(Navigation);
