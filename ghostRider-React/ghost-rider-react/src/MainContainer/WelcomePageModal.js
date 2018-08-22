import React from 'react';
import classes from './WelcomePageModal.css';

const WelcomePageModal = (props) => {


  return (
    <div className="welcomePageModal">
      <h2>Welcome to <br /><br /><img src={require('./Ghost-Rider-Final.png')} className="gRider" /></h2>
      <img src={require('./458outline1.png')} className="f458" />
      <h4>- Rent or Rent Out -</h4>
      <h6>Save Some Money or Make Some Money!</h6>
      <p>(g)HOST/RIDER allows you to put a vehicle up for rent!  Allow random people to pay you cash in exchange for using your car.  On the opposite end, if you need to rent a car, it's as easy as contacting the owner of the car.   </p>




    </div>
  )


}

export default WelcomePageModal;
