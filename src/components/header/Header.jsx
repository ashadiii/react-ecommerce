 
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (      
      <div className="header">
        <div id="topbar">
            <div className="container">
                <div className="topbar-left">
                     <div className="dropdown">
                          <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">USD
                          <i className="fa fa-angle-down"></i></button>
                          <ul className="dropdown-menu">                            
                            <li><a href="#">Dolar(USD)</a></li>
                            <li><a href="#">EURO(EUR)</a></li>
                          </ul>
                    </div>
                    <div className="dropdown">
                          <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">english
                          <i className="fa fa-angle-down"></i></button>
                          <ul className="dropdown-menu">                            
                            <li><a href="#">vietnames</a></li>
                          </ul>
                    </div>
                </div>
                <div className="voucher">
                    <a href="#" title="use voucher sale 25%">use voucher sale 25%</a>
                    <p>Best discounts and vouchaer codes for online stores</p>
                </div>
                <div className="topbar-right">
                    <div className="sign-in">
                        <a href="#" title="register">Register</a>
                        <span>or</span>
                        <a href="#" title="sign in">Sign in</a>
                    </div>
                </div>
            </div>
        </div>
        <header id="header">
            <div className="header-top">
                <div className="container">
                    <div className="col-md-10 col-sm-9 col-xs-12">
                        <p className="icon-menu-mobile"><i className="fa fa-bars" ></i></p>
                        <div className="logo"><a href="#" title="Futurelife">Futurelife</a></div>
                        <nav className="menu-top">
                            <ul>
                                <li className="level-1 dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" title="Stores">Stores</a>
                                    <i className="fa fa-angle-down"></i>
                                    <ul className="menu-level2 dropdown-menu">
                                        <li className="level2"><a href="home_v1.html" title="Store 01">Store 01</a></li>
                                        <li className="level2"><a href="home_v2.html" title="Store 02">Store 02</a></li>
                                        <li className="level2"><a href="home_v3.html" title="Store 03">Store 03</a></li>
                                        <li className="level2"><a href="home_v4.html" title="Store 02">Store 04</a></li>
                                        <li className="level2"><a href="home_v5.html" title="Store 03">Store 05</a></li>
                                    </ul>
                                </li>
                                <li className="level-1"><a href="#" title="Projects">Projects</a></li>
                                <li className="level-1"><a href="#" title="collection">collection</a></li>
                                <li className="level-1"><a href="#" title="Blog">Blog</a></li>
                                <li className="level-1"><a href="#" title="about us">about us</a></li>
                            </ul>
                        </nav>                    
                    </div>

                    <div className="col-md-2 col-sm-3 col-xs-12">
                        <div className="cart dropdown">
                            <a className="icon-cart" href="#" title="Cart">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="cart-count">02</span>
                            </a>
                            <div className="cart-list dropdown-menu">
                                <ul className="list">
                                    <li>
                                        <a href="#" title="" className="cart-product-image"><img src={require('../../assets/images/Futurelife-product-cart1.jpg')} alt="Product" /></a>
                                        <div className="text">
                                            <p className="product-name">Smart TV Ultra HD 40 inch</p>
                                            <p className="product-price">$ 650.99</p>
                                        </div>
                                    </li> 
                                    <li>
                                        <a href="#" title="" className="cart-product-image"><img src="assets/images/Futurelife-product-cart1.jpg" alt="Product" /></a>
                                        <div className="text">
                                            <p className="product-name">Smart TV Ultra HD 40 inch</p>
                                            <p className="product-price">$ 650.99</p>
                                        </div>
                                    </li>                                   
                                </ul>
                                <p className="total"><span>Total:</span> $1121.98</p>
                                <a className="checkout" href="#" title="">Check out</a>
                            </div>
                        </div>
                        <div className="search dropdown">
                            <i className="fa fa-search dropdown-toggle" data-toggle="dropdown"></i>
                            <div className="search-form dropdown-menu">
                                <form action="#" method="get">
                                    <input type="text" autoComplete="off" placeholder="Enter Keywords To Search..." className="ajax_autosuggest_input ac_input" name="s" />
                                    <button type="submit" className="icon-search">
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            <nav className="mega-menu">
                <div className="container">
                    <ul className="nav navbar-nav" id="navbar">
                        <li className="level1 dropdown">
                            <a href="#" title="tables">Tables</a>
                            <div className="sub-menu dropdown-menu">
                                <div className="top-sub-menu">
                                    <div className="item">
                                        <p className="image"><i className="fa fa-eyedropper"></i></p>
                                        <div className="text">
                                            <h3>Unlimited colors</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <p className="image"><i className="fa fa-cog"></i></p>
                                        <div className="text">
                                            <h3>Powerful UI widgets</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <p className="image"><i className="fa fa-compress"></i></p>
                                        <div className="text">
                                            <h3>Fully responsive layout</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                              <ul className="menu-level-1">
                                <li className="level2"><a href="#">Clothing</a>
                                    <ul className="menu-level-2">
                                        <li className="level3"><a href="#" title="Tops">Tops</a></li>
                                        <li className="level3"><a href="#" title="T-shirts">T-shirts</a></li>
                                        <li className="level3"><a href="#" title="shorts">shorts</a></li>
                                        <li className="level3"><a href="#" title="Coats & Jackets">Coats & Jackets</a></li>
                                        <li className="level3"><a href="#" title="Jeans">Jeans</a></li>
                                    </ul>
                                </li>
                                <li className="level2"><a href="#">Accessories</a>
                                    <ul className="menu-level-2">
                                        <li className="level3"><a href="#" title="Tops">Tops</a></li>
                                        <li className="level3"><a href="#" title="T-shirts">T-shirts</a></li>
                                        <li className="level3"><a href="#" title="shorts">shorts</a></li>
                                        <li className="level3"><a href="#" title="Coats & Jackets">Coats & Jackets</a></li>
                                        <li className="level3"><a href="#" title="Jeans">Jeans</a></li>
                                    </ul>
                                </li>
                                <li className="level2"><a href="#">Brand</a>
                                    <ul className="menu-level-2">
                                        <li className="level3"><a href="#" title="Tops">Tops</a></li>
                                        <li className="level3"><a href="#" title="T-shirts">T-shirts</a></li>
                                        <li className="level3"><a href="#" title="shorts">shorts</a></li>
                                        <li className="level3"><a href="#" title="Coats & Jackets">Coats & Jackets</a></li>
                                        <li className="level3"><a href="#" title="Jeans">Jeans</a></li>
                                    </ul>
                                </li>
                                <li className="level2">
                                    <img src="assets/images/Futurelife-sub-menu1.jpg" alt="Sub-Menu" />
                                </li>
                                <li className="level2">
                                    <img src="assets/images/Futurelife-sub-menu2.jpg" alt="Sub-Menu" />
                                </li>
                              </ul>
                              <div className="bottom-sub-menu">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula nisl tellus, nec adipiscing dolor faucibus eu. Vivamus facilisis non diam a fringilla. Etiam sit amet ullamcorper tellus.</p>
                              </div>
                          </div>
                        </li>
                        <li className="level1 dropdown"><a href="#" title="Chairs">Chairs</a></li>
                        <li className="level1"><a href="#">Light</a></li>
                        <li className="level1"><a href="#" title="sofas">Sofas</a></li>
                        <li className="level1"><a href="#" title="Accessories">Accessories</a></li>
                    </ul>
                </div>
            </nav>
            <nav className="mega-menu-mobile">
                <div className="container">
                      <ul className="nav navbar-nav" id="navbar">
                        <li className="level1 dropdown">
                            <a href="#" title="Home">Home</a>
                            <div className="sub-menu dropdown-menu">
                              <ul className="menu-level-1">
                                <li className="level2"><a href="home_v1.html">Home 1</a></li>
                                <li className="level2"><a href="home_v2.html">Home 2</a></li>
                                <li className="level2"><a href="home_v3.html">Home 3</a></li>
                                <li className="level2"><a href="home_v3.html">Home 4</a></li>
                                <li className="level2"><a href="home_v3.html">Home 5</a></li>
                              </ul>
                          </div>
                        </li>
                        <li className="level1"><a href="#">Projects</a></li>
                        <li className="level1"><a href="#">collection</a></li>
                        <li className="level1"><a href="#">Blog</a></li>
                        <li className="level1"><a href="#">about us</a></li>
                        <li className="level1 dropdown">
                            <a href="#" title="tables">Tables</a>
                            <div className="sub-menu dropdown-menu">
                              <ul className="menu-level-1">
                                <li className="level2"><a href="#">Clothing</a>
                                    <ul className="menu-level-2">
                                        <li className="level3"><a href="#" title="Tops">Tops</a></li>
                                        <li className="level3"><a href="#" title="T-shirts">T-shirts</a></li>
                                        <li className="level3"><a href="#" title="shorts">shorts</a></li>
                                        <li className="level3"><a href="#" title="Coats & Jackets">Coats & Jackets</a></li>
                                        <li className="level3"><a href="#" title="Jeans">Jeans</a></li>
                                    </ul>
                                </li>
                                <li className="level2"><a href="#">Accessories</a>
                                    <ul className="menu-level-2">
                                        <li className="level3"><a href="#" title="Tops">Tops</a></li>
                                        <li className="level3"><a href="#" title="T-shirts">T-shirts</a></li>
                                        <li className="level3"><a href="#" title="shorts">shorts</a></li>
                                        <li className="level3"><a href="#" title="Coats & Jackets">Coats & Jackets</a></li>
                                        <li className="level3"><a href="#" title="Jeans">Jeans</a></li>
                                    </ul>
                                </li>
                                <li className="level2"><a href="#">Brand</a>
                                    <ul className="menu-level-2">
                                        <li className="level3"><a href="#" title="Tops">Tops</a></li>
                                        <li className="level3"><a href="#" title="T-shirts">T-shirts</a></li>
                                        <li className="level3"><a href="#" title="shorts">shorts</a></li>
                                        <li className="level3"><a href="#" title="Coats & Jackets">Coats & Jackets</a></li>
                                        <li className="level3"><a href="#" title="Jeans">Jeans</a></li>
                                    </ul>
                                </li>
                              </ul>
                          </div>
                        </li>
                        <li className="level1 dropdown"><a href="#" title="Chairs">Chairs</a>
                        </li>
                        <li className="level1"><a href="#">Light</a></li>
                        <li className="level1"><a href="#" title="sofas">Sofas</a></li>
                        <li className="level1"><a href="#" title="Accessories">Accessories</a></li>
                    </ul>
                </div>
            </nav>
        </header>
      </div>
    );
  }
}

export default Header;
