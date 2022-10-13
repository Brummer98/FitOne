import React from 'react';

class MyComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://6346b06d9eb7f8c0f882be14.mockapi.io/products/1';
    // 'https://api.github.com/users/hacktivist123/repos'; 
    // 'https://6346b06d9eb7f8c0f882be14.mockapi.io/products/1';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return ''; 
    // <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default MyComponent;