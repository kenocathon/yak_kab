// import React, { useState, useEffect } from 'react';
// import moment from 'moment';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
// import auth from '../auth/auth-helper';

// const BookTrip = () => {
//   const [trip, setTrip] = useState({
//     tripDate: '',
//     tripPackage: '',
//   });
//   const [checkboxes, setCheckboxes] = useState({
//     useProfileAddress: true,
//     isHomePickup: false,
//   });
//   const [userAddress, setUserAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//   });
//   const [customTrip, setCustomTrip] = useState({
//     dropOffLocation: '',
//     pickUpLocation: '',
//     pickUpTime: '',
//   });

//   useEffect(() => {
//     const abortController = new AbortController();
//     const signal = abortController.signal;
//     const jwt = auth.isAuthenticated();

//     // if (checkboxes.useProfileAddress) {
//     //   readAddress().then((data) => {
//     //     setUserAddress({ data });
//     //   });
//     // }
//     return function cleanUp() {
//       abortController.abort();
//     };
//   }, [checkboxes.useProfileAddress]);

//   return (
//     <form>
//       {/* Create a form that has Service type (shuttle, homepickup), if shuttle offer trips,
//       if homepickup ask Address, Trip Date, Drop off location/time, Pickup location/time. */}

//       <div className='container'>
//         <h2 className='display-5 mt-5'>Book A Trip</h2>
//         <fieldset>
//           <legend>Scheduled Trips</legend>
//         </fieldset>
//       </div>
//     </form>
//   );
// };

// export default BookTrip;
