import React from "react";
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-500 text-white px-6 md:px-20 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3 text-white">Product</h4>
          <ul className="space-y-2">
            <li><a href="#">Alternatives</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Support in English</a></li>
            <li><a href="#">Support in Indonesian</a></li>
            <li><a href="#">Use Free AI Tools</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Company</h4>
          <ul className="space-y-2">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Creator Program</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Affiliate Program</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Support</h4>
          <ul className="space-y-2">
            <li><a href="#">Weekly Demos</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Report a Bug</a></li>
            <li><a href="#">Report an Outage</a></li>
            <li><a href="#">Request a New Feature</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Use Cases</h4>
          <ul className="space-y-2">
            <li><a href="#">For Blog Writers</a></li>
            <li><a href="#">For Social Media Managers</a></li>
            <li><a href="#">For Email Marketers</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-white/40" />

      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-white text-xl">CoreText.ai</span>
          <p className="text-white/80">© 2025 Kelompok 4.</p>
        </div>
        <div className="flex space-x-4 text-teal-500">
          <a href="#" className="bg-white p-2 rounded-full"><FaTwitter /></a>
          <a href="#" className="bg-white p-2 rounded-full"><FaLinkedin /></a>
          <a href="#" className="bg-white p-2 rounded-full"><FaFacebookF /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
