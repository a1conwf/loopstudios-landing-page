import React from "react";
import {useState, useEffect} from "react";
import "./Header.scss";
import logo from "../../assets/brand/logo.svg";
import hamburgerIcon from "../../assets/svg/icon-hamburger.svg";
import closeIcon from "../../assets/svg/icon-close.svg";

const Header = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth >= 992) {
				setIsExpanded(false);
			}
		});
	}, []);

	return (
		<header className="header">
			<div className="container">
				<nav className="header__nav">
					<div className="logo">
						<img src={logo} alt="logo-img" />
					</div>

					<ul className="header__nav-list hover">
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

					<div className="hamburger" onClick={() => setIsExpanded(!isExpanded)}>
						{isExpanded ? <img src={closeIcon} alt="close-icon" /> : <img src={hamburgerIcon} alt="hamburger-icon" />}
					</div>

					{isExpanded && (
						<nav className="header__nav-mobile">
							<ul>
								<li>
									<a href="#!">About</a>
									<a href="#!">Careers</a>
									<a href="#!">Events</a>
									<a href="#!">Products</a>
									<a href="#!">Support</a>
								</li>
							</ul>
						</nav>
					)}
				</nav>

				<div className="header__content">
					<h1 className="header__content-title">Immersive experiences that deliver</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
