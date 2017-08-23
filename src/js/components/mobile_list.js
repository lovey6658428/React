import React from 'react';
import {Row,Col} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router';

export default class MobileList extends React.Component {
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
      <section key={index} className="m_article list-item special_section">
        <Link to={`details/${newsItem.uniquekey}`}>
          <div className="m_article_img">
            <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
          </div>
          <div className="m_article_info">
            <div className="m_article_title">
              <span>{newsItem.title}</span>
            </div>
            <div className="m_article_desc">
              <div className="m_article_desc_l">
                <span className="m_article_channel">{newsItem.realtype}</span>
                <span className="m_article_time">{newsItem.date}</span>
              </div>
            </div>
          </div>
        </Link>
      </section>
    ))
    :
    '没有加载到任何新闻'
    return(
      <div>
        <Row>
          <Col span={24}>{newsList}</Col>
        </Row>
      </div>
    )
  }
}
