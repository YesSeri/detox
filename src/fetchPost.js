import React from 'react'
import logo from './assets/loading.gif'


export default class FetchPost extends React.Component {
  state = {
    title: null,
    loading: true,
    posts: [{
      title: "title1",
      selftext: "selftext",},
      {
        title: "title2",
        selftext: "selftext",},
  ]};

  // async componentDidMount(){
  //   const url = "https://www.reddit.com/r/aww/top/.json?sort=top&t=year&limit=10";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ 
  //     title: data['data']['children'][0]['data']['title'],
  //     selftext: data['data']['children'][0]['data']['selftext'],
  //     url: data['data']['children'][0]['data']['url'],
  //     created: data['data']['children'][0]['data']['created'],
  //     posts: data, 
  //     loading: false 
  //   });
  // }

  // next_post(i){
  //   this.setState({ 
  //     title: this.posts['data']['children'][i]['data']['title'],
  //     selftext: this.posts['data']['children'][i]['data']['selftext'],
  //     url: this.posts['data']['children'][i]['data']['url'],
  //     created: this.posts['data']['children'][i]['data']['created'],
  //   });
  // }
    show_next(){

    }

  render() {
    if (this.state.loading) {
      return (
      <div>
        <img src={logo} alt="loading..." />
      </div>
        )
    }

    if (!this.state.posts) {
      return <div>Could not find a Post</div>;
    }

    return (
      <div>
        <div>{this.state.title}</div>
        <div>{this.state.selftext}</div>
        {/* <a href={this.state.url}>Link</a> */}
        {/* <div>{this.state.created}</div> */}
      </div>
    );
  }
}
