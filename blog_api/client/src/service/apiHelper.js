import axios from 'axios'

const URL = 'http://localhost:3000'

export const getAllBlogs = async (data) => {
  try {
    const response = await axios.post(`${URL}/blogs`, data)
    return response.data
  } catch(e) {
    console.log(e)
  }
}

export const addBlog = async (data) => {
    try{
        const resp = await axios.post('/', data);
        console.log(resp.data);
        return resp
    }
    catch(e){
        console.log(e.message)
    }
}

export const editBlog = async (id, data) => {
    try{
        console.log(id, 'id')
        console.log(data, 'data')
        const resp = await axios.put(`/${id}`, data);
        console.log(resp.json);
        return resp.json;
    }
    catch(e){
        console.log(e.message)
    }
}

export const deleteBlog = async (id) => {
    try{
        const resp = await axios.delete(`/${id}`);
        return console.log(resp, 'deleted');
    }
    catch (e) {
        console.log(e.message)
    }
}
