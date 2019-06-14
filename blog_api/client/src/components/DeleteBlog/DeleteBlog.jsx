import React, { Component } from 'react';
import { deleteBlog } from '../../service/apiHelper';
import DeleteButton from '../DeleteButton/DeleteButton'
import Axios from 'axios';

class DeleteBlog extends Component {
    constructor () {
        super();
        this.state = {
            title: null,
            content: null,
            topic: null,
            deletedBlog: false
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = async(e) => {
        e.preventDefault();
        console.log('deleted');
        let deletedBlog = {
            title: this.props.title,
            content: this.props.content,
            topic: this.props.topic
        }
        await deleteBlog(deletedBlog);
        this.setState({deletedBlog: true});
    }

    render() {
        return (
            <div>
              <h1>Delete</h1>
                <DeleteButton onClick={this.props.handleClick}/>
            </div>
        );
    }
}


export default DeleteBlog;
