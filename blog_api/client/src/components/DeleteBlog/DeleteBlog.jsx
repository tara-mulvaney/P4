import React, { Component } from 'react';
import { deleteBlog } from '../../service/apiHelper';
import DeleteButton from '../DeleteButton/DeleteButton'

class DeleteBlog extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            content: "",
            topic: "",
            deletedBlog: false
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleFill = () => {
        const title = this.props.blog.title;
        const content = this.props.blog.content;
        const topic = this.props.blog.topic;
        console.log(this.props.blog.id)
        this.setState({title, content, topic})
    }

    componentDidMount = () => {
        this.handleFill();
          let id = this.props.blog.id
    }


    handleDelete = async(e) => {
      e.preventDefault();
        let deletedBlog = {
          title: "",
          content: "",
          topic: ""
        }
        let id = this.props.blog.id
        console.log(id)
        await deleteBlog(id, deletedBlog);
        this.setState({deletedBlog: true});
        }


    render() {
        return (
            <div>
                <DeleteButton onClick={this.handleDelete}/>
            </div>
        );
    }
}


export default DeleteBlog;
