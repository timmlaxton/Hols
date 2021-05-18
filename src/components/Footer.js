import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">Join the advenure ti recive our best vacation news</p>
				<p className="foter-subscription-text">You can unsubscribe anytime</p>
				<div className="input-areas">
					<form>
						<input type="email" name="email placeholder=" Your email className="footer-input" />
						<Button buttonStyle="btn--outline">Subscribe</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About Us</h2>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
					</div>
					<div className="footer-link-items">
						<h2>About Us</h2>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
					</div>
					<div className="footer-link-items">
						<h2>About Us</h2>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
						<Link to="/sign-up">How it Works</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
