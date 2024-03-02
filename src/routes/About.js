import React from "react";
import { useRef } from "react";
import { forwardRef } from "react";
const About = () => {
	const ref =useRef(null);
  return <div ref={ref}>
  <section className="about" id="about">
		<div className="about-img">
			<img src="2eme favorite.png"/>
		</div>

		<div className="about-text">
			<h2>About <span>Me</span></h2>
			<h4>Full-Stack Developer</h4>
			<p>Hi, I'm Achraf Rafiq, a Full Stack developer specializing in react.js, laravel and Google Cloud,
			combining quality design with powerful functionality.
			I am proficient in using react.js, and I aspire to be a professional developer, 
			always excited to face new challenges.
			Committed to contributing meaningfully to the technology space and staying ahead of emerging technologies.
				</p>
				<a href="#" className="btn">More About</a>
		</div>
	</section>

  </div>;
};

export default forwardRef(About);
