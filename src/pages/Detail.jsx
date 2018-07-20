import React, { Component } from "react";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {showDetailLeft: '100%'};
        this.showDetailContent = this.showDetailContent.bind(this);
    }
    showDetailContent() {
        this.setState(prevState => ({
            showDetailLeft: prevState.showDetailLeft === '0'? '100%' : '0'
        }))
    }
  render() {
    let sty1 = {
      color: '#fff',
    }
    let sty2 = {
      position: "relative"
    }
    let sty3 = {
      fontSize: "13px"
    }
    let sty4 = {
      fontSize: '15px',
      color: 'red',
      fontWeight: '800'
    }
    let sty5 = {
      borderTop:'1px solid #ccc',
      padding: '5px',
      textAlign: 'center'
    }
    let sty6 = {
      width: '77%',
      height: '35px'
    }
    let sty7 = {
      height:'35px'
    }

    return (
      <section className="detail-content">
      <div className="detail-title">
          <span className="report-title">销售分析</span>
          <div className="comment-btn">
              <span className="comment-ico iconfont icon-pinglun open-comment" onClick={this.showDetailContent} style={sty1}></span>
              <span className="comment-ico iconfont icon-buoumaotubiao16" id="set-likes"></span>
              <span className="comment-ico iconfont icon-fav-1" id="set-favorite"></span>
          </div>
      </div>
      <div className="detail" style={sty2}>

          <div className="detail-report ">
              <iframe title="报表" className="iframe" src="" frameBorder="0"></iframe>
          </div>
          <div className="comment" style={{left: this.state.showDetailLeft}}>
              <div className="reportLikes">
                  <div className="like-wrap">
                      <div className="likeTitle">
                          <div className="likeCommentClose">
                              <span className="iconfont icon-close_icon closed" onClick={this.showDetailContent}></span>
                          </div>
                      </div>
                      <div className="likeContent">
                          <span style={sty3}>
                              共
                              <span className="comments-length" style={sty4}>0</span>条评论
                          </span>
                      </div>
                      <div className="commentContent">
                          <div className="content-list">
                              <div style={sty5}>
                                  没有更多评论了......
                              </div>
                          </div>

                          <div className="likeContent-input">
                              <span className="comments-tolpit">评论内容不能为空</span>
                              <input style={sty6} id="creat-comments" type="text" placeholder="评论一下吧....." />
                              <button className="submit" style={sty7} type="button">提交</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
    );
  }
}

export default Detail;
