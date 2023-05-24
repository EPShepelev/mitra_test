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

