import React, { useState, useEffect } from "react";
import HomePageNavbar from "../components/HomePageNavbar";
import HomeHero from "../components/HomeHero";
import AfterHero from "../components/AfterHero";
import Footer from "../components/Footer";

const HomePage = () => {
	const [homeMenuToggle, setHomeMenuToggle] = useState(false);

	useEffect(() => {
		if (homeMenuToggle) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [homeMenuToggle]);

	return (
		<div className="relative">
			<div
				className={`bg-primary w-full z-[-2] min-w-[150px] bg-opacity-95 fixed top-0 left-0 h-screen`}
			></div>
			<div className="min-w-[283px]">
				<HomePageNavbar
					homeMenuToggle={homeMenuToggle}
					setHomeMenuToggle={setHomeMenuToggle}
				/>
				<HomeHero />
				<AfterHero />
				<Footer />
			</div>
		</div>
	);
};

export default HomePage;




