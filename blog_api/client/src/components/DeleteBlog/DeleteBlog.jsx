import React, { Component } from 'react';
import { deleteBlog } from '../../service/apiHelper';
import DeleteButton from '../DeleteButton/DeleteButton'

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
              <p>Delete</p>
                <DeleteButton onClick={this.props.handleClick}/>
            </div>
        );
    }
}


export default DeleteBlog;
