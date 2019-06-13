import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {  request } from './service/apiHelper';
import AddButton from './components/AddButton/AddButton';
import EditButton from './components/EditButton/EditButton';
import DeleteButton from './components/DeleteButton/DeleteButton';

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
        <div>
        <EditButton/>
        <DeleteButton/>
        <div className="blog-id" key={blog.id}>
          <p className="title">{blog.title}</p>
          <span className="content">{blog.content}</span>
          <span className="topic">{blog.topic}</span>
        </div>
      </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <AddButton/>
          {(this.state.apiDataLoaded) ? this.showBlogsOnPage() : <p>Loading...</p>}
        </div>
      </div>
    );
  }
}

export default App;
