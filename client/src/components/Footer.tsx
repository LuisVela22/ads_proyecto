import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white mt-5">
            <div className="container py-5">
                <div className="row">
                    {/* About Us */}
                    <div className="col-md-3">
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec faucibus odio.</p>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">About</a></li>
                            <li><a href="#" className="text-white">Services</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="col-md-3">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="mailto:info@website.com" className="text-white">Email: info@website.com</a></li>
                            <li><a href="tel:+1234567890" className="text-white">Phone: +1 234 567 890</a></li>
                            <li><a href="#" className="text-white">Address: 123 Street, City, Country</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-3">
                        <h5>Follow Us</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-white">
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4" />

                {/* Copyright and Legal */}
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2024 My Website. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#" className="text-white">Privacy Policy</a></li>
                            <li className="list-inline-item"><a href="#" className="text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;