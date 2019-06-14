import React, { Component } from 'react';
import { editBlog } from '../../service/apiHelper';
import EditButton from '../EditButton/EditButton'
import {Redirect} from 'react-router-dom';

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
        const title = this.props.title;
        const content = this.props.content;
        const topic = this.props.topic;
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
        let id = Number(this.props.id)
        console.log(this.props.id, 'pre parse');
        console.log(id);
        console.log(typeof id);
        await editBlog(id, updatedBlog);
        this.setState({editedBlog: true});

    }

    componentDidMount = () => {
        this.handleFill();
    }
    render() {
        if(this.state.editedBlog){
            return <Redirect to='/' />
        }
        return (
          <div>
              <h1>Edit Blog</h1>
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
                    <EditButton/>
                </form>
            </div>
        );
    }
}

export default EditBlog;
