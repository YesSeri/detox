import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Welcome(){
  const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  return(
    <div className="title">
      <h1>Welcome to Detox</h1>
      <h1>{date}</h1>
    </div>
  )
}
function Post(props){

  return(
    <div className="postContainer">
      <h2>{props.post['title']}</h2>
      <p>{props.post['selftext']}</p>
    </div>
  )
}


class Page extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      posts: [{
        title: "Title1",
        selftext: "Selftext1"
      },{
        title: "Title2",
        selftext: "Selftext2"
      }]
    };
  }
  renderButton(){
    return(
      <button onClick={() => this.handleClick()}>Next Post</button>
    );
  }
  handleClick(){
    this.incIndex();
  }
  incIndex(){
    console.log(this.state.index)
    console.log(this.state.posts.length)
    if (this.state.index >= this.state.posts.length -  1) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index +1
      })
    }
  }

  render() {
    return (
      <div className="mainContainer">
          <Welcome />
          <Post 
            post={this.state.posts[this.state.index]}
          />
          {this.renderButton()}
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('root'))

