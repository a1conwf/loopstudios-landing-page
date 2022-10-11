import React from "react";
import "./About.scss";
import aboutImg from "../../assets/images/desktop/image-interactive.jpg";

const About = () => {
	return (
		<section className="about">
			<div className="container">
				<img className="about__img" src={aboutImg} alt="img-interactive" />
				<div className="about__content">
					<h2 className="about__content-title">The leader in interactive VR</h2>
					<p className="about__content-text">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
				</div>
			</div>
		</section>
	);
};

export default About;
