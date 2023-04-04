import React from "react";
class Hero extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="hero-container">
        <div className="hero-left">
          <h2 className="hero-title">Khawar Mehfooz</h2>
          <h3 className="hero-subtitle">Web Developer</h3>
        </div>
        <div className="hero-right"></div>
      </main>
    );
  }
}
export default Hero;
