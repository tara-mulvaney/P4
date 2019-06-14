import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {  getAllBlogs } from './service/apiHelper';
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
        <div className="blog-id" key={blog.id}>
          <span className="topic">{blog.topic}</span>
          <p className="title">{blog.title}</p>
          <span className="content">{blog.content}</span>
        </div>
<<<<<<< HEAD
        <EditBlog
          blog={blog}/>
=======
        <EditButton/>
>>>>>>> parent of 05eac6f... edit form added, onsubmit i return an error stating can't use redirect outside of a router
        <DeleteButton/>
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
