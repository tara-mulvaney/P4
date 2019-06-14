import React, { Component } from 'react';
import { editBlog } from '../../service/apiHelper';
import EditButton from '../EditButton/EditButton'

class EditBlog extends Component {
    constructor () {
        super();
        this.state = {
            title: null,
            content: null,
            topic: null,
            editedBlog: false
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
                    />
                    <label>Content:</label>
                    <input
                        type='input'
                        placeholder='Content'
                        id='content'
                        name='content'
                        value={this.state.content}
                        onChange={this.handleChange}
                    />
                    <label>Topic:</label>
                    <input
                        type='input'
                        placeholder='Topic'
                        id='topic'
                        name='topic'
                        value={this.state.topic}
                        onChange={this.handleChange}
                    />
                    <submit><EditButton onClick={this.handleSubmit}/></submit>
                </form>
            </div>
        );
    }
}

export default EditBlog;
