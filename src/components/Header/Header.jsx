import React from "react";
import {useState, useEffect} from "react";
import "./Header.scss";
import logo from "../../assets/brand/logo.svg";
import hamburgerIcon from "../../assets/svg/icon-hamburger.svg";
import closeIcon from "../../assets/svg/icon-close.svg";
import logoDark from "../../assets/brand/logo-dark.svg";
import hamburgerIconDark from "../../assets/svg/icon-hamburger-dark.svg";

const Header = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth >= 992) {
				setIsExpanded(false);
			}
		});
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 610) {
				setIsDark(true);
			} else {
				setIsDark(false);
			}
		});
	}, []);

	return (
		<header className="header">
			<div className="container">
				<div className="header__nav">
					<a className="logo" href="#!">
						{isDark && !isExpanded ? <img src={logoDark} alt="logo-img" /> : <img src={logo} alt="logo-img" />}
					</a>

					<nav className={isExpanded ? "nav active" : "nav"}>
						<ul className={isExpanded ? "nav__list" : "nav__list hover"}>
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
					</nav>

					<div className="hamburger" onClick={() => setIsExpanded(!isExpanded)}>
						{isDark && !isExpanded ? <img src={hamburgerIconDark} alt="hamburger-icon" /> : !isDark && !isExpanded ? <img src={hamburgerIcon} alt="icon-hamburger" /> : <img src={closeIcon} alt="icon-close" />}
					</div>
				</div>

				<div className="header__content">
					<h1 className="header__content-title">Immersive experiences that deliver</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
