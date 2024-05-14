import React, { useState } from 'react';
import './Productcheck.scss';

const Productcheck = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    streetAddress: '',
    address: '',
    state: '',
    zip: '',
    emailAddress: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="wrapper__inputs container">
          <div className="oop">
            <div className="inputs">
              <div className="int">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="int">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className="inputs">
              <div className="int">
                <label htmlFor="country">Country / Region *</label>
                <input type="text" name="country" placeholder="Select a country / region" value={formData.country} onChange={handleChange} />
              </div>
              <div className="int">
                <label htmlFor="city">Town / City *</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
              </div>
            </div>

            <div className="inputs">
              <div className="int">
                <label htmlFor="streetAddress">Street Address *</label>
                <input type="text" name="streetAddress" placeholder="House number and street name" value={formData.streetAddress} onChange={handleChange} />
              </div>
              <div className="int">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" placeholder="Apartment, suite, unit, etc. (optional)" value={formData.address} onChange={handleChange} />
              </div>
            </div>

            <div className="inputs">
              <div className="int">
                <label htmlFor="state">State *</label>
                <input type="text" name="state" placeholder="Select a state" value={formData.state} onChange={handleChange} />
              </div>
              <div className="int">
                <label htmlFor="zip">Zip *</label>
                <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
              </div>
            </div>

            <div className="inputs">
              <div className="int">
                <label htmlFor="emailAddress">Email address *</label>
                <input type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
              </div>
              <div className="int">
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input type="text" name="phoneNumber" placeholder="+966" value={formData.phoneNumber} onChange={handleChange} />
              </div>
            </div>

          </div>
        </div>

        <div className="float__right">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Productcheck;
