import React, { Component } from 'react';
import { deleteBlog } from '../../service/apiHelper';
import { Redirect } from 'react-router-dom';
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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // bind it, don't buind it.
    }


    handleSubmit = async(e) => {
        e.preventDefault();
        console.log('deleted');
        let deletedBlog = {
            name: this.state.name,
            age: this.state.age,
            species: this.state.species,
            color: this.state.color,
            gender: this.state.gender,
            breed: this.state.breed,
            medical: this.state.breed,
            bio: this.state.bio,
            image: this.state.image
        }
        await deleteBlog(deletedBlog);
        this.setState({deletedBlog: true});
    }


    handleChange = (e) => {
        const el = e.target;
        const name = el.name;
        const value = el.value;
        console.log(name, value)
        this.setState({[name]: value});
    }

    render() {
        if(!this.props.authenticated){
            return <Redirect to='/login' />
        }
        return (
          <div className="Main">
            <div className="Wrapper">
              <h1>Add a New Pet</h1>
                <form className="Volunteer-form" onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input
                        type='input'
                        placeholder='Pet Name'
                        id='name'
                        name='name'
                        onChange={this.handleChange}
                    />
                    <label>Age:</label>
                    <input
                        type='input'
                        placeholder='Age'
                        id='age'
                        name='age'
                        onChange={this.handleChange}
                    />
                    <label>Species:</label>
                    <input
                        type='input'
                        placeholder='Species'
                        id='species'
                        name='species'
                        onChange={this.handleChange}
                    />
                    <label>Color:</label>
                    <input
                        type='input'
                        placeholder='Color'
                        id='color'
                        name='color'
                        onChange={this.handleChange}
                    />
                    <label>Gender:</label>
                    <input
                        type='input'
                        placeholder='Gender'
                        id='gender'
                        name='gender'
                        onChange={this.handleChange}
                    />
                    <label>Breed:</label>
                    <input
                        type='input'
                        placeholder='Breed'
                        id='breed'
                        name='breed'
                        onChange={this.handleChange}
                    />
                    <label>Medical:</label>
                    <input
                        type='input'
                        placeholder='Fixed'
                        id='medical'
                        name='medical'
                        onChange={this.handleChange}
                    />
                    <label>Bio:</label>
                    <input
                        type='input'
                        placeholder='Biography'
                        id='biography'
                        name='biography'
                        onChange={this.handleChange}
                    />
                    <label>Image:</label>
                    <input
                        type='file'
                        placeholder='Image File'
                        id='image'
                        name='image'
                        onChange={e => this.handleImageConvert(e)}
                    />
                    <button onClick={this.handleUpload}>UPLOAD FILE</button>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
              </div>
            </div>
        );
    }
}

export default DeleteBlog;
