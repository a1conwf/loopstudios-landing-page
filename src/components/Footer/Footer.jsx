import React from "react";
import "./Footer.scss";
import logo from "../../assets/brand/logo.svg";
import iconFacebook from "../../assets/svg/icon-facebook.svg";
import iconTwitter from "../../assets/svg/icon-twitter.svg";
import iconPinterest from "../../assets/svg/icon-pinterest.svg";
import iconInstagram from "../../assets/svg/icon-instagram.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__inner">
					<div className="footer__nav">
						<img src={logo} alt="logo-img" className="footer__nav-logo" />
						<ul className="footer__nav-list hover">
							<li>
								<a href="#!">About</a>
							</li>
							<li>
								<a href="#!">Careers</a>
							</li>
							<li>
								<a href="#!">Events</a>
							</li>
							<li>
								<a href="#!">Products</a>
							</li>
							<li>
								<a href="#!">Support</a>
							</li>
						</ul>
					</div>

					<div className="footer__contact">
						<ul className="footer__contact-socials hover">
							<li>
								<img src={iconFacebook} alt="icon-facebook" />
							</li>
							<li>
								<img src={iconTwitter} alt="icon-twitter" />
							</li>
							<li>
								<img src={iconPinterest} alt="icon-pinterest" />
							</li>
							<li>
								<img src={iconInstagram} alt="icon-instagram" />
							</li>
						</ul>
						<p className="footer__contact-copyright">&#169; 2021 Loopstudios. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
