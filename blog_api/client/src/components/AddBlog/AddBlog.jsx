import React, { Component } from 'react';
import { addBlog } from '../../service/apiHelper';
import AddButton from '../AddButton/AddButton';

class AddBlog extends Component {
    constructor () {
        super();
        this.state = {
            title: "",
            content: "",
            topic: "",
            addedBlog: false
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
        let newBlog = {
            title: this.state.title,
            content: this.state.content,
            topic: this.state.topic
        }
        // let id = this.props.id
        // console.log(this.props.id);
        // console.log(id);
        // console.log(typeof id);
        await addBlog(newBlog);
        this.setState({addedBlog: true});

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
                    <submit><AddButton onClick={this.handleSubmit}/></submit>
                </form>
            </div>
        );
    }
}

export default AddBlog;
