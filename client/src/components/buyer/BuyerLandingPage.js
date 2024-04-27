import React from "react";
import { Link } from "react-router-dom";

const BuyerLandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Buyer LandingPage</h1>
      <p style={styles.description}>
        Discover amazing products from our curated collection.
      </p>
      <div style={styles.buttons}>
        <Link to="/signin" style={styles.button}>Sign In</Link>
        <Link to="/signup" style={styles.button}>Sign Up</Link>
      </div>
      <div style={styles.testimonials}>
        {/* Testimonials or reviews can go here */}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#ddb849',
    borderRadius: '5px',
    textDecoration: 'none',
  },
  testimonials: {
    // Styles for testimonials or reviews section
  }
};

export default BuyerLandingPage;
