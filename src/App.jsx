import React, { useState, useEffect } from 'react';
import './App.css';
import MessagePrinter from './MessagePrinter';
import LightSwitch from './LightSwitch';
import Header from './header';
import PhotoGallery from './gallery';
import HotelList from './HotelList';
import Subheader from './subeheader';
import Footer from './footer';
import HotelSearch from './HotelSearch';
import { hotels } from './data';
import CountdownTimer from './countdown';
import HamburgerMenu from './HamburgerMenu';
import ClientManager from './ClientManager';

function App() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
  };

  // Fetch posts when page changes
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts((prevPosts) => [...prevPosts, ...data]);
        setHasMore(data.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [page]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
          document.documentElement.scrollHeight &&
        !loading &&
        hasMore
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      <Header />
      <HamburgerMenu></HamburgerMenu>
      <ClientManager></ClientManager>
      <PhotoGallery />

      <div className="pink-box">
        <Subheader />
      </div>
 <div>
  <CountdownTimer></CountdownTimer>
 </div>
      <div style={{ padding: '20px' }}>
        <HotelSearch hotels={hotels} onSelectHotel={handleSelectHotel} />
        {selectedHotel && (
          <div style={{ marginTop: '20px' }}>
            <h2>{selectedHotel.name}</h2>
            <p><strong>Location:</strong> {selectedHotel.location}</p>
            <p><strong>Price:</strong> {selectedHotel.price}</p>
            <p>{selectedHotel.description}</p>
            <img
              src={selectedHotel.image}
              alt={selectedHotel.name}
              style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
            />
          </div>
        )}
      </div>

      <HotelList />

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
        {loading && <p>Loading more posts...</p>}
        {!hasMore && <p>No more posts to load.</p>}
      </div>

      <Footer />
    </>
  );
}

export default App;
