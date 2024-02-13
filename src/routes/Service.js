import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";



const Service = () => {
  return (
    <div>
    <section className="services" id="services">
	<div className="main-text">
		<h2><span>My</span>Services</h2>
	</div>
	<div className="services-content">
		<div className="box">
			<div className="s-icons">
				<i className='bx bx-mobile-alt'></i>
			</div>
			<h3>FRONT-END</h3>
			<div className='icons'><FaHtml5 className='FaHtml5' /><FaCss3Alt className='FaCss3Alt'/>
			<FaBootstrap className='FaBootstrap'/><IoLogoJavascript className='IoLogoJavascript'/>
			<FaReact className='FaReact'/>
			
			</div>
			<p>HTML structures content, CSS styles it, and JavaScript adds interactivity to web pages.
			Bootstrap accelerates front-end development with a responsive grid system and pre-designed components.
			React simplifies the creation of dynamic and modular user interfaces through its component-based architecture.</p>
			<a href="#" className="btn">Read More</a>
		</div>

		<div class="box">
			<div className="s-icons">
				<i className='bx bx-code-alt'></i>
			</div>
			<h3>BACK-END</h3>
			<div className='icons'><SiPhp className='SiPhp'/><SiPython className='SiPython'/>
			<FaLaravel className='FaLaravel'/>
			</div>
			<p>Laravel provides an elegant and modern PHP framework for web development.
			PHP is a versatile scripting language, widely used for server-side development.
			Python, with frameworks like Flask and Django, offers a powerful and flexible environment for web development, along with its broad use in other domains.</p>
			<a href="#" className="btn">Read More</a>
		</div>

		<div class="box">
			<div className="s-icons">
				<i className='bx bx-edit-alt'></i>
			</div>
			<h3>DATA BASE</h3>
			<div className='icons'><SiMysql className='SiMysql'/><SiMongodb className='SiMongodb'/></div>
			<p>The choice between MongoDB and SQL/MySQL depends on project requirements, data complexity, scalability needs, and the developer's familiarity with the technologies.
			MongoDB provides flexibility and scalability for dynamic data, while SQL/MySQL ensures data integrity and consistency in structured.</p>
			<a href="#" className="btn">Read More</a>
		</div>
	</div>

</section>

    </div>
  )
}
export default Service;