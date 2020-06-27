import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import extract_posts from './post.js'
import FetchPost from './fetchPost.js'

function Welcome(props) {
    return (
    <div>
        <h1>Welcome to Detox</h1>
    </div>);
}

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.testVariable= "this is a test";
        console.log(this.props)
        ;(async () => {
          console.log(await this.props.posts)  
        })();
    }

    render() {
        return (
        <div>
            <h1>PostInfo</h1>
            <p>{this.testVariable}</p>
        </div>
        );
    }
    
}

class Next extends React.Component {
    state ={

    }
    handleClick = () => { 
        console.log("test()")
    }
    render() {
        return (
          <button onClick={this.handleClick}>Next</button>
        );
    }
}

class Page extends React.Component {
  render() {
    return (
      <div className="board">
          <Welcome />
          <FetchPost />
          <Next />
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('root'))

