import React from 'react';
//组件的引入
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newscontainer'
export default class PCIndex extends React.Component {
  render(){
    return (
      <div>
        <PCHeader/>
        <PCNewsContainer/>
        <PCFooter/>
      </div>
    )
  }
}
