import React, { useState } from 'react';

const hotels = [
  {
    id: 1,
    name: 'Ocean Front Units at Miami Beach',
    location: 'Miami Beach, FL',
    price: '$250/night',
    description: 'Spacious apartments offering direct ocean views, ideal for longer stays or families.',
    image: 'https://images.openai.com/thumbnails/cc38d3a7e69d092a7b5b71b8596ebac2.jpeg'
  },
  {
    id: 2,
    name: 'Ocean View Residence at South Beach',
    location: 'Miami Beach, FL',
    price: '$350/night',
    description: 'Modern serviced apartments with panoramic ocean views and luxury amenities.',
    image: 'https://images.openai.com/thumbnails/ba196e5d82620fc181e048db19e5094f.jpeg'
  },
  {
    id: 3,
    name: 'Spacious Ocean View Resort Beach Condo 601',
    location: 'Miami Beach, FL',
    price: '$400/night',
    description: 'Fully equipped condo with expansive ocean views, suitable for groups or families.',
    image: 'https://images.openai.com/thumbnails/d81b528ac66c1af8017c76b6e039b9be.jpeg'
  },
  {
    id: 4,
    name: 'Eden Roc Hotel Miami',
    location: 'Miami Beach, FL',
    price: '$450/night',
    description: 'Iconic hotel offering luxury accommodations and beachfront access.',
    image: 'https://images.openai.com/thumbnails/a4991dc6fc470823b6065953412a0c3a.jpeg'
  },
  {
    id: 5,
    name: 'DW Oceanfront Resort Miami Beach',
    location: 'Miami Beach, FL',
    price: '$350/night',
    description: 'Contemporary resort with oceanfront rooms and a variety of amenities.',
    image: 'https://www.example.com/dw_oceanfront_resort.jpg'
  },
  {
    id: 6,
    name: 'The Miami Beach EDITION',
    location: 'Miami Beach, FL',
    price: '$500/night',
    description: 'Stylish hotel blending modern design with beachfront luxury.',
    image: 'https://www.example.com/miami_beach_edition.jpg'
  },
  {
    id: 7,
    name: 'Fontainebleau Hotel in Miami Beach',
    location: 'Miami Beach, FL',
    price: '$600/night',
    description: 'Historic hotel offering upscale accommodations and vibrant nightlife.',
    image: 'https://www.example.com/fontainebleau_hotel.jpg'
  },
  {
    id: 8,
    name: 'Loews Miami Beach Hotel',
    location: 'Miami Beach, FL',
    price: '$350/night',
    description: 'Family-friendly hotel with beachfront access and multiple dining options.',
    image: 'https://www.example.com/loews_miami_beach.jpg'
  },
  {
    id: 9,
    name: 'Chic Luxury Ocean View in 5 Star Resort',
    location: 'Miami Beach, FL',
    price: '$550/night',
    description: 'Luxury resort offering chic accommodations with ocean views.',
    image: 'https://www.example.com/chic_luxury_ocean_view.jpg'
  },
  {
    id: 10,
    name: 'Jacuzzi, Miami Beach',
    location: 'Miami Beach, FL',
    price: '$200/night',
    description: 'Private property featuring a jacuzzi with scenic ocean views.',
    image: 'https://www.example.com/jacuzzi_miami_beach.jpg'
  }
];

const HotelList = () => {
  const [selectedHotel, setSelectedHotel] = useState(hotels[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
    setCheckInDate('');
    setCheckOutDate('');
    setTotalPrice(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const emailValue = formData.get('email');
    setEmail(emailValue);
    setIsModalOpen(false);
    setIsConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === 'checkIn') {
      setCheckInDate(value);
    } else if (name === 'checkOut') {
      setCheckOutDate(value);
    }

    const checkIn = name === 'checkIn' ? value : checkInDate;
    const checkOut = name === 'checkOut' ? value : checkOutDate;

    if (checkIn && checkOut) {
      const checkInTime = new Date(checkIn).getTime();
      const checkOutTime = new Date(checkOut).getTime();
      const timeDiff = checkOutTime - checkInTime;
      const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      if (nights > 0) {
        const pricePerNight = parseFloat(selectedHotel.price.replace(/[^0-9.]/g, ''));
        const total = pricePerNight * nights;
        setTotalPrice(total);
      } else {
        setTotalPrice(null);
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        {hotels.map(hotel => (
          <div
            key={hotel.id}
            style={{
              ...styles.hotelItem,
              backgroundColor: selectedHotel.id === hotel.id ? '#e0e0e0' : '#f9f9f9',
            }}
            onClick={() => setSelectedHotel(hotel)}
          >
            {hotel.name}
          </div>
        ))}
      </div>

      {/* Hotel Details */}
      <div style={styles.details}>
        <img
          src={selectedHotel.image}
          alt={selectedHotel.name}
          style={styles.image}
        />
        <h2>{selectedHotel.name}</h2>
        <p><strong>Location:</strong> {selectedHotel.location}</p>
        <p><strong>Price:</strong> {selectedHotel.price}</p>
        <p>{selectedHotel.description}</p>

        <div style={styles.buttonContainer}>
          <button style={styles.bookButton} onClick={openModal}>
            Book Now
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button style={styles.closeButton} onClick={closeModal}>
              X
            </button>
            <h3>Book Your Stay at {selectedHotel.name}</h3>
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" style={styles.input} required />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" style={styles.input} required />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="checkIn">Check-In Date:</label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  style={styles.input}
                  value={checkInDate}
                  onChange={handleDateChange}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="checkOut">Check-Out Date:</label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  style={styles.input}
                  value={checkOutDate}
                  onChange={handleDateChange}
                  required
                />
              </div>
              {totalPrice !== null && (
                <div style={styles.formGroup}>
                  <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
                </div>
              )}
              <button type="submit" style={styles.submitButton}>Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {isConfirmationModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3>Information Received</h3>
            <p>Thank you for your booking request! A confirmation has been sent to the email address: <strong>{email}</strong></p>
            <button style={styles.submitButton} onClick={closeConfirmationModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem',
    boxSizing: 'border-box',
    gap: '1rem',
  },
  sidebar: {
    width: '30%',
    paddingRight: '1rem',
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
  hotelItem: {
    padding: '0.75rem',
    marginBottom: '0.5rem',
    cursor: 'pointer',
    borderRadius: '6px',
    transition: 'background-color 0.2s ease',
    color:"black"
  },
  details: {
    width: '70%',
    paddingLeft: '1rem',
    boxSizing: 'border-box',
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: '1rem',
  },
  bookButton: {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '0.75rem 2rem',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    width: '400px',
    boxSizing: 'border-box',
    position: 'relative',
    color:"black"
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '0.75rem 2rem',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default HotelList;
