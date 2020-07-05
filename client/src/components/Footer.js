import React from 'react';

const Footer = () => {
  return (
    <section className='bg-dark mt-4'>
      <div className='container text-center text-white py-5'>
        <p className='lead'>JOIN OUR NEWSLETTER FOR DEALS AND UPDATES</p>
        <div className='row justify-content-center'>
          <div className='col-4'>
            <form action=''>
              <div className='input-group'>
                <input type='text' className='form-control' />
                <div className='input-group-append'>
                  <button className='btn btn-info'>Join Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
