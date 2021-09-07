import React        from 'react';
import PropTypes    from 'prop-types';
import {withRouter} from 'react-router-dom';
import './index.less';
import backSvg      from '../../../assets/back_black.svg';
import searchSvg    from '../../../assets/search.svg';

class Navigation extends React.Component {
    static defaultProps = {
        show: false,
        backSvg
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        show : PropTypes.bool
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
            <div className={['flex-inline', 'navigation', this.props.className].join(' ')}>
                <img src={this.props.backSvg} alt="" onClick={this.pageBack}/>
                <div className="strong"/>
                <div className="title">{this.props.title}</div>
                <div className="strong"/>
                <img src={this.props.show ? searchSvg : ''} alt="" onClick={this.searchList}/>
            </div>
        );
    }
}

export default withRouter(Navigation);
