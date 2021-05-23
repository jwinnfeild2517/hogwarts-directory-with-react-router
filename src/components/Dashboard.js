import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="main-content dashboard">
        <h2>Hogwarts School Directory</h2>
        <div>
          <p>Welcome to Hogwarts <strong><em>"The finest witchcraft and wizardry in the world"</em></strong></p>
          <p>Our school motto is Draco Dormiens Nunquam Titillandus, which means <em>"Never tickle a sleeping dragon".</em></p>
          <p>We are located in the Scottish Highlands, we accept magical students from Great Britain and Ireland for enrollment. Established and funded by the Ministry of Magic since the 10th century</p>
          <hr />
        </div>
      </div>
    );
  }
}

export default Home;