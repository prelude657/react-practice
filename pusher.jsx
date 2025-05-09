import React, { useState, useEffect } from 'react';

function pusher() {
  const [posts, setPosts] = useState([]);    // State to hold fetched data
  const [loading, setLoading] = useState(true); // Loading state to show loading text
  const [error, setError] = useState(null);  // Error state to show any errors

  // Fetch data from the API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);   // Save the fetched posts in the state
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        setError(error.message); // Set error if something goes wrong
        setLoading(false);
      });
  }, []); // Empty array means it runs once when the component mounts

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default pusher;
