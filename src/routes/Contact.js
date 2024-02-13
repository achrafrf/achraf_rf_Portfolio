import React from "react";

const Contact = () => {
  return <div>
  <section className="contact" id="contact">
	<div className="contact-text">
		<h2>Contact <span>Me!</span></h2>
		<h4>If you have any project in your mind.</h4>
		<p>I'm a website Designer - creating bold & brave interface design for compaines all across the world.</p>
		<div className="list">
			<li><a href="#">+212 767113363</a></li>
			<li><a href="#">itsachrafrafiq@gmail.com</a></li>
			<li><a href="#">craete by achraf rafiq</a></li>
		</div>

		<div class="contact-icons">
			<a href="#"><i className='bx bxl-facebook'></i></a>
			<a href="#"><i className='bx bxl-twitter' ></i></a>
			<a href="#"><i className='bx bxl-instagram-alt' ></i></a>
			<a href="#"><i className='bx bxl-youtube' ></i></a>
		</div>

	</div>
	<div class="contact-form">
		<form action="https://formsubmit.co/el/xiyeyi" method="POST">
			<input type="name" placeholder="Your Name " required/>
			<input type="email" placeholder="Your Email " required/>
			<input type="number" placeholder="your Mobile Number" required/>
			<textarea name="" id="" cols="35" rows="10" placeholder="How Can I Help You " required></textarea>
			<input type="submit" value="Send Message" class="submit" required/>
		</form>
	</div>
</section>
  </div>;
};

export default Contact;
