import React from "react";
import './Contact.css';

function Contact () {
    return (
    <div className="contact">
       <form>
        <section className="form-group">
          <label htmlFor="formGroupExampleInput"><h1 class="contact">Name</h1></label>
          <input type="text" className="form-control text-center" id="formGroupExampleInput" placeholder="Enter First and Last Name" />
        </section>
        <section className="form-group">
          <label htmlFor="formGroupExampleInput2"><h1 class="contact">Email</h1></label>
          <input type="text" className="form-control text-center" id="formGroupExampleInput2" placeholder="Enter Email Address" />
        </section>
        <section className="form-group">
          <label htmlFor="formGroupExampleInput3"><h1 class="contact">Message</h1></label>
          <input type="text" className="form-control text-center" id="formGroupExampleInput3" placeholder="What would you like to talk about?" />
        </section>
        <section className="Submitbtn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </section>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Contact;