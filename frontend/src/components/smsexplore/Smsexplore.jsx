import React, { useState } from 'react'
import './Smsexplore.css'
import Navbar from '../navbar/Navbar'
import { toast } from 'react-toastify';

const Smsexplore = () => {
  
  const [result, setResult] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e22aea28-67cb-458f-ad5c-a31f76c270ed");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message)
      toast.success("Email sent successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert(data.message)
      toast.error(error.code.split('/')[1].split('-').join(""));
    }
  };




  return (
    <div className='explore-menu'>
      

        <h1>SMS MAILER</h1>


        <form onSubmit={onSubmit} className='contact-right'>


            <label> Email</label>
            <input type="mail" placeholder='Enter Your Email'  required />
            <label> Write your message here</label>
            <textarea name="message" rows='8' placeholder='enter your message'  required></textarea>
           <button type='submit' className='contact-submit'> Submit now</button>




        </form>



        </div>




  
  )
}

export default Smsexplore