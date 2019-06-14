import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {  getAllBlogs, deleteBlog } from './service/apiHelper';
import AddButton from './components/AddButton/AddButton';
import AddBlog from './components/AddBlog/AddBlog';
import EditButton from './components/EditButton/EditButton';
import DeleteButton from './components/DeleteButton/DeleteButton';
import EditBlog from './components/EditBlog/EditBlog';
import DeleteBlog from './components/DeleteBlog/DeleteBlog';
import { Route, Link } from 'react-router-dom';

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
        <EditBlog
          blog={blog}/>
        <DeleteBlog
          blog={blog}/>
      </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>

          <Link to='add-blog'><AddButton/></Link>
          <Route
            path='/add-blog'
            render={() => <AddBlog />}
          />
          {(this.state.apiDataLoaded) ? this.showBlogsOnPage() : <p>Loading...</p>}
        </div>
      </div>
    );
  }
}

export default App;
