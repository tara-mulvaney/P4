import React, { Component } from 'react';
import { editBlog, deleteBlog } from '../../service/apiHelper';
import EditButton from '../EditButton/EditButton'
import DeleteButton from '../DeleteButton/DeleteButton'

class EditBlog extends Component {
    constructor () {
        super();
        this.state = {
            title: null,
            content: null,
            topic: null,
            editedBlog: false,
            deletedBlog: false
        }
    }
    handleFill = () => {
        const title = this.props.blog.title;
        const content = this.props.blog.content;
        const topic = this.props.blog.topic;
        this.setState({title, content, topic})
    }

    handleChange = (e) => {
        const element = e.target;
        const name = element.name;
        const value = element.value;
        console.log(name, value)
        this.setState({[name]: value});
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        let updatedBlog = {
            title: this.state.title,
            content: this.state.content,
            topic: this.state.topic
        }
        let id = this.props.blog.id
        console.log(this.props.blog.id);
        console.log(id);
        console.log(typeof id);
        await editBlog(id, updatedBlog);
        this.setState({editedBlog: true});

    }

    handleClick = async(e) => {
        e.preventDefault();
        let deletedBlog = {
            title: this.props.blog.title,
            content: this.props.blog.content,
            topic: this.props.blog.topic
        }
        let id = this.props.blog.id
        // console.log(this.props.blog.id);
        // console.log(id);
        // console.log(typeof id);
        await deleteBlog(id, deletedBlog);
        this.setState({deletedBlog: true});

    }



    componentDidMount = () => {
        this.handleFill();
    }

    render() {
        return (
          <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input
                        type='input'
                        placeholder='Title'
                        id='title'
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChange}
                        onDelete={this.handleClick}
                    />
                    <label>Content:</label>
                    <input
                        type='input'
                        placeholder='Content'
                        id='content'
                        name='content'
                        value={this.state.content}
                        onChange={this.handleChange}
                        onDelete={this.handleClick}
                    />
                    <label>Topic:</label>
                    <input
                        type='input'
                        placeholder='Topic'
                        id='topic'
                        name='topic'
                        value={this.state.topic}
                        onChange={this.handleChange}
                        onDelete={this.handleClick}
                    />
                    <submit><EditButton onClick={this.handleSubmit}/></submit>
                    <submit><DeleteButton onClick={this.handleClick}/></submit>
                </form>
            </div>
        );
    }
}

export default EditBlog;
