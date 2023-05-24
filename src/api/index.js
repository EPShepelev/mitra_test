import axios from "axios"

export const getPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response
    } catch (error) {
      console.error(error);
    }
  }

  export const getComments = async (postId) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      return response
    } catch (error) {
      console.error(error);
    }
  }

  export const getUser = async (userId) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
      return response
    } catch (error) {
      console.error(error);
    }
  }

