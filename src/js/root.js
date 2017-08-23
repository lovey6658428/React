import React from 'react';
import ReactDOM from 'react-dom';
// router 的组件
import {Router,Route,hashHistory} from 'react-router';
// antd 的基础样式
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import MediaQuery from 'react-responsive';

//分别导入PC端和mobile端的主文件
import PCIndex from './components/pc_index'
import MobileIndex from './components/mobile_index'

import PCNewsDetails from './components/pc_news_detalls'
import MobileNewsDetalls from './components/mobile_news_detalls'

export default class Root extends React.Component{
  render(){
    return (
      <div>
      <MediaQuery query='(min-device-width: 1224px)'>
        <Router history={hashHistory}>
          <Router path="/" component={PCIndex}></Router>
          <Router path="/details/:uniquekey" component={PCNewsDetails}></Router>
        </Router>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 1224px)'>
        <Router history={hashHistory}>
          <Router path="/" component={MobileIndex}></Router>
          <Router path="/details/:uniquekey" component={MobileNewsDetalls}></Router>
        </Router>
      </MediaQuery>
      </div>
    );
  };
}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'));
