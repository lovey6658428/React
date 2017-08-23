import React from 'react';
import {Card} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router';

export default class PCNewsBlock extends React.Component {
  constructor(){
    super();
    this.state = {
      news : ''
    };
  }
  //生命周期函数
  componentWillMount(){
    var myFetchOptions = {
      method : 'GET'
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count,myFetchOptions)
    .then(response=>response.json())
    .then(json=>this.setState({news:json}));
  }

  render(){
    const {news} = this.state;
    // 如果有数据，就将数据遍历，然后放在元素中，如果没有则返回相应提示
    const newsList = news.length
    ?
    news.map((newsItem,index)=>(
      <li key={index}>
        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
          {newsItem.title}
        </Link>
      </li>
    ))
    :
    '没有加载到任何新闻'
    return(
      <div class="topNewsList clearfix1">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>
    )
  }
}
