import React from "react";

const BuyerLandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Buyer LandingPage After Login</h1>
      <p style={styles.subheading}>Explore our curated collection and find the perfect products for you.</p>
      {/* Additional content or features can be added here */}
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
  subheading: {
    fontSize: '18px',
    marginBottom: '30px',
  },
};

export default BuyerLandingPage;
