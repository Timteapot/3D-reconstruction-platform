// This file is used to mock the API calls in development environment.
// we will delete this file once we have a complete backend API.
import Mock from 'mockjs';

// login mock
Mock.mock("https://www.demo.com/login", "post", (options) => {
  console.log('Mock login called with options:', options);
  const { username, password } = JSON.parse(options.body)
  console.log('Mock login called with:', username, password);
  if (username === 'admin' && password === 'admin123') {
    return { 
      status: 'success',
      message: 'Login successful',
      code: 200,
      data: {
        token: 'fake-jwt-token-for-admin',
        username: 'admin',
      }
    }
  }
  else if (username === 'user' && password === 'user123') {
    return {
      status: 'success',
      message: 'Login successful',
      code: 200,
      data: {
        token: 'fake-jwt-token-for-user',
        username: 'user',
      }
    }
  }
  return {
    status: 'error',
    message: 'Invalid username or password',
    code: 401,
    data: null
  }
});