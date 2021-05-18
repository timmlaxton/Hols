import React from 'react';
import { Button } from './Button';

const HeroSection = () => {
	return (
		<div className="hero-container">
			<video src="/videos/video-2.mp4" autoPlay loop muted />
			<h1>Adventure awaits</h1>
			<p>What are you waiting for</p>
			<div className="hero-btn">
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
					Get Started
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;
