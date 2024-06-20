import whatsapp from "../assets/whatsapp.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

const socials = [
	{ src: twitter, alt: "Twitter" },
	{ src: facebook, alt: "Facebook" },
	{ src: instagram, alt: "Instagram" },
];

const Footer = () => {
	return (
		<div className="text-center mt-16 border-t w-full mx-auto text-white font-body_two ss:px-20 px-4">
			<div className="sm:flex sm:justify-between max-w-[1000px] mx-auto">
				<div className="legals sm:mt-16 sm:mx-3">
					<h3 className="text-white font-heading_two py-4 text-2xl font-bold">
						Legals
					</h3>
					<p>Terms and Condition</p>
					<p>Privacy Policy</p>
				</div>
				<div className="contact mt-16">
					<h3 className="text-white font-heading_two py-4 text-2xl font-bold">
						Contact
					</h3>
					<p>atom@atom.com</p>
					<p className="tell">+234 814 177 1672</p>
				</div>
				<div className="socials my-16">
					<h3 className="text-white font-heading_two py-4 text-2xl font-bold">
						Socials
					</h3>
					<div className="icons flex justify-center">
						{socials.map((social, index) => (
							<img
								key={index}
								src={social.src}
								alt={social.alt}
								className="h-10 mx-3"
							/>
						))}
					</div>
				</div>
			</div>
			<div className="copyright py-12">
				<div className="logo">
					<h1 className="text-black text-3xl font-bold font-heading_two">
						Atom
					</h1>
				</div>
				<p>
					Copyright © 2024 PraiseMedia.
					<br />
					All rights reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
