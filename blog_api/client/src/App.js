import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
    };
  }

  componentDidMount = async () => {
    const blogs = await axios.get('http://localhost:3001/blogs');
    const apiData = blogs.data;
  }



  showBlogsOnPage() {
    return this.state.apiData.map((blogs) => {
      return (
        <div className="blog-id" key={blogs.id}>
          <p className="title">{blogs.title}</p>
          <span className="content">{blogs.content}</span>
          <span className="topic">{blogs.topic}</span>
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
