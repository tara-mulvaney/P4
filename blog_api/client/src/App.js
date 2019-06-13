import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {
  request, blogData
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
    const blog = await axios.get('http://localhost:3001/blogs');
    const apiData = blogData.data;
  }



  showBlogsOnPage() {
    return this.state.apiData.map((blogData) => {
      return (
        <div className="blog-id" key={blogData.id}>
          <p className="title">{blogData.title}</p>
          <span className="content">{blogData.content}</span>
          <span className="topic">{blogData.topic}</span>
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
