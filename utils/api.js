import axios from 'axios';

const API_BASE_URL = 'https://blog-api-1-kt4y.onrender.com/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach JWT token if available
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchPosts = async () => {
  const response = await apiClient.get('/posts/');
  return response.data;
};

export const fetchComments = async (postId) => {
  const response = await apiClient.get(`/posts/${postId}/comments/`);
  return response.data;
};

export const createMicropost = async (data) => {
  const response = await apiClient.post('/microposts/', data);
  return response.data;
};

export const likePost = async (postId) => {
  await apiClient.post(`/posts/${postId}/like/`);
};
