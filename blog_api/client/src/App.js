import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {
  request
} from './service/apiHelper'


class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
    };
  }

  componentDidMount = async () => {
    const blog = await axios.get('http://localhost:3000/blogs');
    this.setState({
      apiData: blog.data,
      apiDataLoaded: true,
    })
    console.log(blog.data,'blogs')
  }



  showBlogsOnPage() {
    return this.state.apiData&&this.state.apiData.map((blog) => {
      return (
        <div className="blog-id" key={blog.id}>
          <p className="title">{blog.title}</p>
          <span className="content">{blog.content}</span>
          <span className="topic">{blog.topic}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {(this.state.apiDataLoaded) ? this.showBlogsOnPage() : <p>Loading...</p>}
        </div>
      </div>
    );
  }
}

export default App;
