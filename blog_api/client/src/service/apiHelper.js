import axios from 'axios'

const URL = 'http://localhost:3001'

export const request = async (blogData) => {
  try {
    const response = await axios.post(`${URL}/blogs`, blogData)
    return response.data
  } catch(e) {
    console.log(e)
  }
}
