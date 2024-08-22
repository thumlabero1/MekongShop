// components/Header.tsx
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Header: React.FC = () => {
  return (
    <Helmet>
    <header>
    <div className="header-top space-bg">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-8 col-lg-12 col-md-12">
                    <div data-announcement-autoplay="1" data-announcement-autoplay-delay="5000" className="ae-anno-announcement-wrapper page_speed_1061251116">
                        <div className="ae-anno-announcement__items page_speed_1660913121">
                            <div className="ae-anno-announcement__controls page_speed_719155678">
                                <button className="ae-anno-announcement__arrow ae-anno-announcement__next-button" title="Next button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                                    </svg>
                                </button>
                                <button className="ae-anno-announcement__arrow ae-anno-announcement__previous-button" title="Previous button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                                    </svg>
                                </button>
                            </div>
                            <div data-announcement-id="2" className="page_speed_416405288 ae-anno-announcement">
                                <div className="ae-anno-announcement__content header-welcome-text">
                                    <div className="ae-anno-announcement__text">
                                        <span>
                                            <strong>Trendy 25 silver jewelry, save up 35% off today</strong>
                                        </span>
                                    </div>
                                    <a className="ae-anno-announcement__button" href="/">
                                        Shop now <i className="fal fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div data-announcement-id="3" className="page_speed_416405288 ae-anno-announcement">
                                <div className="ae-anno-announcement__content header-welcome-text">
                                    <div className="ae-anno-announcement__text">
                                        <span>
                                            <strong>Black Friday and Cyber Monday 2023 Deals for Motion Designers, grab it now!</strong>
                                        </span>
                                    </div>
                                    <a className="ae-anno-announcement__button" href="/">
                                        Shop now <i className="fal fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div data-announcement-id="1" className="page_speed_416405288 ae-anno-announcement">
                                <div className="ae-anno-announcement__content header-welcome-text">
                                    <div className="ae-anno-announcement__text">
                                        <span>
                                            <strong>Welcome to our international shop! Enjoy free shipping on orders $100 &amp;up</strong>
                                        </span>
                                    </div>
                                    <a className="ae-anno-announcement__button" href="/">
                                        Shop now <i className="fal fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 d-none d-xl-block">
                    <div className="headertoplag d-flex align-items-center justify-content-end">
                        <div className="headertoplag__lang">
                            <ul>
                                <li>
                                    <button>
                                        USD 
                                        <span>
                                            <i className="fal fa-angle-down"></i>
                                        </span>
                                    </button>
                                    <ul className="header-meta__lang-submenu">
                                        <li>
                                            <a href="https://ninico.botble.com/currency/switch/USD">USD</a>
                                        </li>
                                        <li>
                                            <a href="https://ninico.botble.com/currency/switch/EUR">EUR</a>
                                        </li>
                                        <li>
                                            <a href="https://ninico.botble.com/currency/switch/VND">VND</a>
                                        </li>
                                        <li>
                                            <a href="https://ninico.botble.com/currency/switch/NGN">NGN</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="headertoplag__lang">
                            <ul>
                                <li>
                                    <button>
                                        <img src='https://ninico.botble.com/vendor/core/core/base/img/flags/us.svg' title="English" loading="lazy" alt="English flag" className="flag page_speed_169212214"></img>
                                        English 
                                        <span>
                                            <i className="fal fa-angle-down"></i>
                                        </span>
                                    </button>
                                    <ul className="header-meta__lang-submenu">
                                        <li>
                                            <a href="https://ninico.botble.com/vi">
                                                <img src='https://ninico.botble.com/vendor/core/core/base/img/flags/vn.svg' title="Tiếng Việt" loading="lazy" alt="Tiếng Việt flag" className="flag page_speed_169212214"></img>
                                                Tiếng Việt 
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://ninico.botble.com/ar">
                                                <img src='https://ninico.botble.com/vendor/core/core/base/img/flags/sa.svg' title="Arabic" loading="lazy" alt="Arabic flag" className="flag page_speed_169212214"></img>
                                                 Arabic 
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-top-social">
                            <a href="https://www.facebook.com" title="Facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com" title="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.behance.net" title="Behance">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="https://www.youtube.com" title="Youtube">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.linkedin.com" title="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="logo-area mt-30 d-none d-xl-block">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-2 col-lg-3">
                    <div className="logo">
                        <a href="https://ninico.botble.com">
                            <img data-bb-lazy="true" className="page_speed_559784219" src='https://ninico.botble.com/storage/general/logo.png' alt="Ninico - Minimal eCommerce"></img>
                        </a>
                    </div>
                </div>
                <div className="col-xl-10 col-lg-9">
                    <div className="header-meta-info d-flex align-items-center justify-content-between">
                        <div className="header-search-bar">
                            <form action="https://ninico.botble.com/products" className="position-relative form--quick-search" data-url="https://ninico.botble.com/ajax/search-products" method="GET">
                                <div className="search-info p-relative">
                                    <div className="product-category-label">
                                        <label htmlFor="product-category-select" className="form-label text text-truncate d-inline-block">All Categories</label>
                                        <i className="fal fa-chevron-down ms-2"></i>
                                    </div>
                                    <select className="product-category-select" name='categories[]'>
                                        <option value="0">All Categories</option>
                                        <option value="1">Pro Glasses</option>
                                        <option value="2">Casual Shoes</option>
                                        <option value="3">&nbsp;&nbsp;Winter Jacket</option>
                                        <option value="4">&nbsp;&nbsp;New Added</option>
                                        <option value="5">&nbsp;&nbsp;Wooden</option>
                                        <option value="6">&nbsp;&nbsp;Furniture</option>
                                        <option value="7">&nbsp;&nbsp;Clock</option>
                                        <option value="8">&nbsp;&nbsp;Gifts</option>
                                        <option value="9">&nbsp;&nbsp;Crafts</option>
                                        <option value="10">Gift Sets</option>
                                        <option value="11">Plastic Gifts</option>
                                        <option value="12">Handy Cream</option>
                                        <option value="13">Cosmetics</option>
                                        <option value="14">Silk Accessories</option>
                                        <option value="15">Finest Skincare Lotions</option>
                                        <option value="16">Bags &amp;Purses</option>
                                        <option value="17">Sunglasses</option>
                                    </select>
                                    <input type='text' name='q' className="input-search-product has-category-select" placeholder="Search products..." value="" autoComplete="off"> </input>
                                    <button className="header-search-icon" title="search">
                                        <i className="fal fa-search"></i>
                                    </button>
                                </div>
                                <div className="panel--search-result"></div>
                            </form>
                        </div>
                        <div className="header-meta d-flex align-items-center ">
                            <div className="header-meta__social d-flex align-items-center ml-25">
                                <button className="header-cart p-relative tp-cart-toggle" title="cart">
                                    <i className="fal fa-shopping-cart"></i>
                                    <span className="tp-product-count">0</span>
                                </button>
                                <a href="https://ninico.botble.com/compare" className="header-cart p-relative">
                                    <i className="fal fa-exchange"></i>
                                    <span className="tp-product-compare-count">0</span>
                                </a>
                                <a href="https://ninico.botble.com/wishlist" className="header-cart p-relative">
                                    <i className="fal fa-heart"></i>
                                    <span className="tp-product-wishlist-count">0</span>
                                </a>
                                <a href="https://ninico.botble.com/login" title="Login">
                                    <i className="fal fa-user"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="main-menu-area mt-20 d-none d-xl-block">
        <div className="for-megamenu p-relative">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-3">
                        <div className="cat-menu__category p-relative">
                            <span className="tp-cat-toggle">
                                <i className="fal fa-bars"></i>
                                Categories 
                            </span>
                            <div className="category-menu category-menu-off page_speed_1213168635">
                                <ul className="cat-menu__list">
                                    <li className="">
                                        <a href="https://ninico.botble.com/product-categories/gift-sets">Gift Sets </a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="https://ninico.botble.com/product-categories/casual-shoes">Casual Shoes </a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="https://ninico.botble.com/product-categories/crafts">Crafts</a>
                                            </li>
                                            <li>
                                                <a href="https://ninico.botble.com/product-categories/gifts">Gifts</a>
                                            </li>
                                            <li>
                                                <a href="https://ninico.botble.com/product-categories/clock">Clock</a>
                                            </li>
                                            <li>
                                                <a href="https://ninico.botble.com/product-categories/furniture">Furniture</a>
                                            </li>
                                            <li>
                                                <a href="https://ninico.botble.com/product-categories/wooden">Wooden</a>
                                            </li>
                                            <li>
                                                <a href="https://ninico.botble.com/product-categories/new-added">New Added</a>
                                            </li>
                                            <li>
                                                <a href="https://ninico.botble.com/product-categories/winter-jacket">Winter Jacket</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a href="https://ninico.botble.com/product-categories/pro-glasses">Pro Glasses </a>
                                    </li>
                                    <li className="">
                                        <a href="https://ninico.botble.com/product-categories/sunglasses">Sunglasses </a>
                                    </li>
                                    <li className="">
                                        <a href="https://ninico.botble.com/product-categories/bags-purses">Bags &amp;Purses </a>
                                    </li>
                                    <li className="">
                                        <a href="https://ninico.botble.com/product-categories/finest-skincare-lotions">Finest Skincare Lotions </a>
                                    </li>
                                    <li className="">
                                        <a href="https://ninico.botble.com/product-categories/silk-accessories">Silk Accessories </a>
                                    </li>
                                    <li className="">
                                        <a href="https://ninico.botble.com/product-categories/cosmetics">Cosmetics </a>
                                    </li>
                                    <li className="">
                                        <a href="https://ninico.botble.com/product-categories/handy-cream">Handy Cream </a>
                                    </li>
                                    <li className="">
                                        <a href="https://ninico.botble.com/product-categories/plastic-gifts">Plastic Gifts </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="main-menu">
                            <nav id="mobile-menu">
                                <ul>
                                    <li className="has-dropdown">
                                        <a href="https://ninico.botble.com/" className="">Home </a>
                                        <ul className="submenu">
                                            <li className="">
                                                <a href="https://ninico.botble.com/" className="">Wooden Home </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/fashion-home" className="">Fashion Home </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/furniture-home" className="">Furniture Home </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/cosmetics-home" className="">Cosmetics Home </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/food-grocery-home" className="">Food Grocery </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="https://ninico.botble.com/" className="">Shop </a>
                                        <ul className="submenu">
                                            <li className="">
                                                <a href="https://ninico.botble.com/products" className="">Shop Grid </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/products?layout=list" className="">Shop List </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com" className="">Shop Detail </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/store-locator" className="">Shop Location </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/cart" className="">Cart </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/wishlist" className="">Wishlist </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="https://ninico.botble.com/" className="">Pages </a>
                                        <ul className="submenu">
                                            <li className="">
                                                <a href="https://ninico.botble.com/orders/tracking" className="">Order Tracking </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/about" className="">About </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/register" className="">Sign up </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/login" className="">Login </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/404" className="">404 / Error </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/coming-soon" className="">Coming soon </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="https://ninico.botble.com/" className="">Blog </a>
                                        <ul className="submenu">
                                            <li className="">
                                                <a href="https://ninico.botble.com/blog" className="">Blog </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/blog/4-expert-tips-on-how-to-choose-the-right-mens-wallet" className="">Blog Detail </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a href="https://ninico.botble.com/contact" className="">Contact </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="menu-contact">
                            <ul>
                                <li>
                                    <div className="menu-contact__item">
                                        <div className="menu-contact__icon">
                                            <i className="fal fa-phone-alt"></i>
                                        </div>
                                        <div className="menu-contact__info">
                                            <a href="tel:908. 408. 501. 89">908. 408. 501. 89</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
</Helmet>
  );
};

export default Header;
