 
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (      
        <footer id="footer">
            <div className="container">
                <div className="row footer-top">
                    <div className="col-md-6">
                        <h3>our company</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="infomation">
                            <p><i className="fa fa-phone"></i>Telephone: +84 988 992 085</p>
                            <p><i className="fa fa-envelope-o"></i>Email: lamhvdesigner@gmail.com</p>
                            <p><i className="fa fa-clock-o"></i>8:00 - 19:00, Monday - Saturday, Sunday - closed</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>Customer service</h3>
                        <ul className="menu">
                            <li><a href="#" title="Help">Help</a></li>
                            <li><a href="#" title="Contact Us">Contact Us</a></li>
                            <li><a href="#" title="Warranty">Warranty</a></li>
                            <li><a href="#" title="Terms & Conditions">Terms & Conditions</a></li>
                            <li><a href="#" title="Shopping information">Shopping information</a></li>
                        </ul>
                        <ul className="menu">
                            <li><a href="#" title="My Account">My Account</a></li>
                            <li><a href="#" title="Arder Status">Arder Status</a></li>
                            <li><a href="#" title="Payment">Payment</a></li>
                            <li><a href="#" title="Gift Voucher">Gift Voucher</a></li>
                            <li><a href="#" title="Cancellations">Cancellations</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h3>About</h3>
                        <ul className="menu">
                            <li><a href="#" title="Projects">Projects</a></li>
                            <li><a href="#" title="Jobs">Jobs</a></li>
                            <li><a href="#" title="Collections">Collections</a></li>
                            <li><a href="#" title="Blog">Blog</a></li>
                            <li><a href="#" title="Media">Media</a></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                    <div className="col-md-6 social">
                        <a href="#" title="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" title="sky"><i className="fa fa-skype"></i></a>
                        <a href="#" title="vibo"><i className="fa fa-vine"></i></a>
                        <a href="#" title="facebook"><i className="fa fa-facebook"></i></a>
                    </div>
                    <div className="col-md-6">
                        <p>Copyright &copy; 2016 by <a href="#" title="Pixel-Creative">Pixel-Creative</a>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
