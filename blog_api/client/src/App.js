import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {  getAllBlogs, editBlog, deleteBlog, addBlog } from './service/apiHelper';
import AddButton from './components/AddButton/AddButton';
import AddBlog from './components/AddBlog/AddBlog';
import EditButton from './components/EditButton/EditButton';
// import DeleteButton from './components/DeleteButton/DeleteButton';
import EditBlog from './components/EditBlog/EditBlog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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

  handleDelete = async (e) => {
    let id = this.props.blog.id
       e.preventDefault();
      console.log('deleted')
      await axios.delete(`http://localhost:3000/blogs/${id}`)
      this.props.showBlogsOnPage()
    }

  showBlogsOnPage() {
    return this.state.apiData&&this.state.apiData.map((blog) => {
      return (
        <div className="parent">
          <div className="blog">
            <div className="blog-id" key={blog.id}>
              <div className="topic">{blog.topic}</div>
              <p className="title">{blog.title}</p>
              <div className="content">{blog.content}</div>
            </div>
            <div className="buttons">
            <EditBlog
              blog={blog}/>
            <DeleteBlog
              blog={blog}
              type='submit'
              onClick={this.handleDelete}/>
            </div>
          </div>
        </div>
      // <DeleteBlog
      //   blog={blog}/>
      );
    });
  }



  render() {
    return (
      <div className="App">
        <div>
          <Link to='/'><Header /></Link>
          {(this.state.apiDataLoaded) ? this.showBlogsOnPage() : <p>Loading...</p>}
          <Link to='add-blog'><AddButton className="addButton"/></Link>

          <Route
            path='/add-blog'
            render={() => <AddBlog />}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
