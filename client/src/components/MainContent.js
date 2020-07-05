import React from 'react';
import calendarIcon from '../img/CalendarIcon.svg';
import kayakIcon from '../img/kayakingIcon.svg';
import clockIcon from '../img/clockIcon.svg';

const imageStyles = {
  width: '12rem',
  height: '10rem',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const MainContent = (props) => {
  return (
    <div className='container py-4 mb-5'>
      <div className='row row-cols-1 row-cols-md-3'>
        <div className='col mb-4  bg-light'>
          <div className='card h-100 text-center border-light'>
            <img
              style={imageStyles}
              src={calendarIcon}
              className='card-img-top'
              alt='Calendar'
            />
            <div className='card-body'>
              <h5 className='card-title'>Schedule your pickup</h5>
              <p className='card-text'>
                There are scheduled pickup times or you can schedule a custom
                pickup for you and your boat.
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4 bg-light'>
          <div className='card h-100 text-center border-light'>
            <img
              style={imageStyles}
              src={kayakIcon}
              className='card-img-top'
              alt='Calendar'
            />
            <div className='card-body'>
              <h5 className='card-title'>Float the river</h5>
              <p className='card-text'>
                Enjoy the day floating the Etowah River without the worry of how
                everyone will get back to their vehicles
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4 bg-light'>
          <div className='card h-100 text-center border-light'>
            <img
              style={imageStyles}
              src={clockIcon}
              className='card-img-top'
              alt='Calendar'
            />
            <div className='card-body'>
              <h5 className='card-title'>On your own time</h5>
              <p className='card-text'>
                Since you will end your float at your personal vehicle there is
                no set time to complete your trip. So take your time and enjoy
                the float.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
