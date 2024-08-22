import Image from "next/image";
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../styles/fonts.css';
import '../styles/variables.css';
import React, { useEffect } from 'react';
import Header from '../components/Header';  // Import Header từ thư mục components
export default function Home() {
  return (
    useEffect(() => {
        document.body.id = 'page-home';
        
        // Cleanup function to remove the id when the component is unmounted
        return () => {
          document.body.id = 'page-home';
        };
      }, []);
    
    <body id ="page-home">
        <div className="modal fade newsletter-popup" id="newsletter-popup" tabindex="-1" aria-labelledby="newsletterPopupModalLabel" aria-hidden="true" data-delay="5" title="Subscribe Now">
            <div className="modal-dialog modal-lg">
                <div className="modal-content border-0 d-flex flex-md-col flex-lg-row">
                    <div className="d-none d-md-block col-6 newsletter-popup-bg page_speed_2026340436"></div>
                    <button type='button' className="btn-close position-absolute" data-bs-dismiss="modal" data-dismiss="modal" aria-label="Close"></button>
                    <div className="newsletter-popup-content">
                        <div className="modal-header flex-column align-items-start border-0 p-0">
                            <span className="modal-subtitle">Newsletter</span>
                            <h5 className="modal-title fs-2" id="newsletterPopupModalLabel">Subscribe Now</h5>
                            <p className="modal-text text-muted">Subscribe to our newsletter and get 10% off your first purchase</p>
                        </div>
                        <div className="modal-body p-0">
                            <form method="POST" action="https://ninico.botble.com/newsletter/subscribe" accept-charset="UTF-8" id="botble-newsletter-forms-fronts-newsletter-form" className="bb-newsletter-popup-form dirty-check">
                                <input name=_token type=hidden value="wTS76UlGKNDta3ac8Soj7BvpKZq5jIMQdLmqWJG3">
                                <div className="mb-3 position-relative">
                                    <label for="email" className="form-label required">Email Address</label>
                                    <input className="form-control" placeholder="Enter Your Email" required="required" name=email type=email id="email">
                                </div>
                                <button className="btn btn-primary" type=submit>Subscribe</button>
                                <label className="form-check">
                                    <input type=checkbox id="dont_show_again" name=dont_show_again className="form-check-input" value="">
                                    <span className="form-check-label">Don't show this popup again </span>
                                </label>
                                <div className="newsletter-message newsletter-success-message page_speed_67527981"></div>
                                <div className="newsletter-message newsletter-error-message page_speed_67527981"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="scroll-top scroll-to-target" data-target="html" title="back to top">
            <i className="fas fa-angle-up"></i>
        </button>
        <Header />
        <div id="header-sticky" className="logo-area tp-sticky-one mainmenu-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-3">
                        <div className="logo">
                            <a href="https://ninico.botble.com">
                                <img data-bb-lazy="true" className="page_speed_559784219" src=https://ninico.botble.com/storage/general/logo.png alt="Ninico - Minimal eCommerce"></img>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-9">
                        <div className="header-meta-info d-flex align-items-center justify-content-between">
                            <div className="header-search-bar">
                                <form action="https://ninico.botble.com/products" className="position-relative form--quick-search" data-url="https://ninico.botble.com/ajax/search-products" method="GET">
                                    <div className="search-info p-relative">
                                        <div className="product-category-label">
                                            <label for="product-category-select" className="form-label text text-truncate d-inline-block">All Categories</label>
                                            <i className="fal fa-chevron-down ms-2"></i>
                                        </div>
                                        <select className="product-category-select" name=categories[]>
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
                                        <input type=text name=q className="input-search-product has-category-select" placeholder="Search products..." value="" autocomplete="off">
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
        <div id="header-tab-sticky" className="tp-md-lg-header d-none d-md-block d-xl-none pt-30 pb-30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 d-flex align-items-center">
                        <div className="flex-auto header-canvas">
                            <button className="tp-menu-toggle" title="open">
                                <i className="far fa-bars"></i>
                            </button>
                        </div>
                        <div className="logo">
                            <a href="https://ninico.botble.com">
                                <img data-bb-lazy="true" className="page_speed_559784219" src=https://ninico.botble.com/storage/general/logo.png alt="Ninico - Minimal eCommerce"></img>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="header-meta-info d-flex align-items-center justify-content-between">
                            <div className="header-search-bar">
                                <form action="https://ninico.botble.com/products" className="position-relative form--quick-search" data-url="https://ninico.botble.com/ajax/search-products" method="GET">
                                    <div className="search-info p-relative">
                                        <div className="product-category-label">
                                            <label for="product-category-select" className="form-label text text-truncate d-inline-block">All Categories</label>
                                            <i className="fal fa-chevron-down ms-2"></i>
                                        </div>
                                        <select className="product-category-select" name=categories[]>
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
                                        <input type=text name=q className="input-search-product has-category-select" placeholder="Search products..." value="" autocomplete="off">
                                        <button className="header-search-icon" title="search">
                                            <i className="fal fa-search"></i>
                                        </button>
                                    </div>
                                    <div className="panel--search-result"></div>
                                </form>
                            </div>
                            <div className="header-meta__social d-flex align-items-center ml-25">
                                <button className="header-cart p-relative tp-cart-toggle" title="search">
                                    <i className="fal fa-shopping-cart"></i>
                                    <span className="tp-product-count">0</span>
                                </button>
                                <a href="https://ninico.botble.com/compare" className="header-cart p-relative">
                                    <i className="fal fa-exchange"></i>
                                    <span className="tp-product-compare-count">0</span>
                                </a>
                                <a href="https://ninico.botble.com/login" title="Login">
                                    <i className="fal fa-user"></i>
                                </a>
                                <a href="https://ninico.botble.com/wishlist">
                                    <i className="fal fa-heart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="header-mob-sticky" className="tp-md-lg-header d-md-none pt-20 pb-20 ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-3 d-flex align-items-center">
                        <div className="flex-auto header-canvas">
                            <button className="tp-menu-toggle" title="open">
                                <i className="far fa-bars"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="text-center">
                            <div className="logo">
                                <a href="https://ninico.botble.com">
                                    <img data-bb-lazy="true" className="page_speed_559784219" src=https://ninico.botble.com/storage/general/logo.png alt="Ninico - Minimal eCommerce"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="header-meta-info d-flex align-items-center justify-content-end ml-25">
                            <button className="header-cart p-relative tp-search-sidebar-toggle" title="search">
                                <i className="fal fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tpsideinfo">
            <button className="tpsideinfo__close">
                Close <i className="ml-10 fal fa-times"></i>
            </button>
            <div className="tpsideinfo__nabtab mb-4 mt-30">
                <div className="mobile-menu-container">
                    <div className="mobile-menu-bar mb-10">
                        <nav className="mobile-menu-nav">
                            <ul>
                                <li className="has-dropdown">
                                    <a href="https://ninico.botble.com/">
                                        <span className="title">Home</span>
                                    </a>
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
                                    <a href="https://ninico.botble.com/">
                                        <span className="title">Shop</span>
                                    </a>
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
                                    <a href="https://ninico.botble.com/">
                                        <span className="title">Pages</span>
                                    </a>
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
                                    <a href="https://ninico.botble.com/">
                                        <span className="title">Blog</span>
                                    </a>
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
                                    <a href="https://ninico.botble.com/contact">
                                        <span className="title">Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="tpsideinfo__wishlist-link">
                <a href="https://ninico.botble.com/compare" className="header-cart d-block p-relative">
                    <i className="fal fa-exchange"></i>
                    Compare Products <span className="tp-product-compare-count">0</span>
                </a>
            </div>
            <div className="tpsideinfo__wishlist-link">
                <a href="https://ninico.botble.com/orders/tracking">
                    <i className="fal fa-truck"></i>
                    Order Tracking 
                </a>
            </div>
            <div className="tpsideinfo__account-link">
                <a href="https://ninico.botble.com/login" title="Login">
                    <i className="fal fa-user"></i>
                    Login / Register
                </a>
            </div>
            <div id="navbarSupportedContent" className="tpsideinfo__switcher navbar-collapse collapse show mb-4 page_speed_1213168635">
                <ul className="mb-2 navbar-nav me-auto mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="me-2">
                                <img src=https://ninico.botble.com/vendor/core/core/base/img/flags/us.svg title="English" loading="lazy" alt="English flag" className="flag page_speed_1037721413">
                            </span>
                            English 
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="https://ninico.botble.com/vi">
                                    <img src=https://ninico.botble.com/vendor/core/core/base/img/flags/vn.svg title="Tiếng Việt" loading="lazy" alt="Tiếng Việt flag" className="flag page_speed_169212214">Tiếng Việt 
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="https://ninico.botble.com/ar">
                                    <img src=https://ninico.botble.com/vendor/core/core/base/img/flags/sa.svg title="Arabic" loading="lazy" alt="Arabic flag" className="flag page_speed_169212214">Arabic 
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-usd-circle"></i>
                            USD 
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="https://ninico.botble.com/currency/switch/USD">USD</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="https://ninico.botble.com/currency/switch/EUR">EUR</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="https://ninico.botble.com/currency/switch/VND">VND</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="https://ninico.botble.com/currency/switch/NGN">NGN</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div className="body-overlay"></div>
        <div className="tpcartinfo tp-cart-info-area p-relative">
            <button className="tpcart__close" title="close">
                <i className="fal fa-times"></i>
            </button>
            <div className="tpcart">
                <h4 className="tpcart__title">Your Cart</h4>
                <div className="tpcart__product">
                    <div className="tpcart__product-list">
                        <ul>
                            <li className="text-center small text-muted">Your cart is empty!</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center tpcart__free-shipping">
                    <span>
                        Free shipping for orders <b>under 10km</b>
                    </span>
                </div>
            </div>
        </div>
        <div className="tpsideinfo tpsidecategories">
            <button className="tpsideinfo__close">
                Close <i className="ml-10 fal fa-times"></i>
            </button>
            <div className="tpsideinfo__nabtab mt-30 mb-4">
                <div className="mobile-menu-container">
                    <div className="mobile-menu-bar">
                        <nav className="mobile-menu-nav tpsidebar-categories">
                            <ul>
                                <li className="">
                                    <a href="https://ninico.botble.com/product-categories/gift-sets">Gift Sets </a>
                                </li>
                                <li className="has-dropdown">
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
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div className="tpsideinfo tpsidesearch">
            <button className="tpsideinfo__close">
                Close <i className="ml-10 fal fa-times"></i>
            </button>
            <div className="text-center tpsideinfo__search pt-35">
                <span className="mb-20 tpsideinfo__search-title">What Are You Looking For?</span>
                <form action="https://ninico.botble.com/products" className="position-relative form--quick-search" data-url="https://ninico.botble.com/ajax/search-products" method="GET">
                    <input type=text name=q className="input-search-product" placeholder="Search Products..." value="" autocomplete="off">
                    <button title="search">
                        <i className="fal fa-search"></i>
                    </button>
                    <div className="panel--search-result"></div>
                </form>
            </div>
        </div>
        <div className="cartbody-overlay"></div>
        <main>
            <h1 className="d-none">Ninico - Minimal eCommerce</h1>
            <div className="ck-content">
                <section className="slider-area pb-25">
                    <div className="container">
                        <div className="row justify-content-xl-end">
                            <div className="col-xl-9 col-xxl-7 col-lg-9">
                                <div className="tp-slider-area p-relative">
                                    <div className="swiper-container slider-active">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="tp-slide-item">
                                                    <div className="tp-slide-item__content">
                                                        <h4 className="tp-slide-item__sub-title">Accessories</h4>
                                                        <h3 className="tp-slide-item__title mb-25">
                                                            Up To <i>40% Off</i>
                                                            latest Creations
                                                        </h3>
                                                        <a className="tp-slide-item__slide-btn tp-btn" href="/products">
                                                            Shop Now <i className="fal fa-long-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <div className="tp-slide-item__img">
                                                        <picture>
                                                            <source srcset="https://ninico.botble.com/storage/sliders/banner-1.jpg" media="(min-width: 1200px)">
                                                            <source srcset="https://ninico.botble.com/storage/sliders/banner-1.jpg" media="(min-width: 768px)">
                                                            <source srcset="https://ninico.botble.com/storage/sliders/banner-1.jpg" media="(max-width: 767px)">
                                                            <img data-bb-lazy="true" loading="eager" src=https://ninico.botble.com/storage/sliders/banner-1.jpg alt="Up To 40% Off latest Creations"></img>
                                                        </picture>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="tp-slide-item">
                                                    <div className="tp-slide-item__content">
                                                        <h4 className="tp-slide-item__sub-title">Accessories</h4>
                                                        <h3 className="tp-slide-item__title mb-25">
                                                            Up To <i>40% Off</i>
                                                            latest Creations
                                                        </h3>
                                                        <a className="tp-slide-item__slide-btn tp-btn" href="/products">
                                                            Shop Now <i className="fal fa-long-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <div className="tp-slide-item__img">
                                                        <picture>
                                                            <source srcset="https://ninico.botble.com/storage/sliders/banner-2.jpg" media="(min-width: 1200px)">
                                                            <source srcset="https://ninico.botble.com/storage/sliders/banner-2.jpg" media="(min-width: 768px)">
                                                            <source srcset="https://ninico.botble.com/storage/sliders/banner-2.jpg" media="(max-width: 767px)">
                                                            <img data-bb-lazy="true" loading="eager" src=https://ninico.botble.com/storage/sliders/banner-2.jpg alt="Up To 40% Off latest Creations"></img>
                                                        </picture>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="tp-slide-item">
                                                    <div className="tp-slide-item__content">
                                                        <h4 className="tp-slide-item__sub-title">Accessories</h4>
                                                        <h3 className="tp-slide-item__title mb-25">
                                                            Up To <i>40% Off</i>
                                                            latest Creations
                                                        </h3>
                                                        <a className="tp-slide-item__slide-btn tp-btn" href="/products">
                                                            Shop Now <i className="fal fa-long-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <div className="tp-slide-item__img">
                                                        <picture>
                                                            <source srcset="https://ninico.botble.com/storage/sliders/banner-3.jpg" media="(min-width: 1200px)">
                                                            <source srcset="https://ninico.botble.com/storage/sliders/banner-3.jpg" media="(min-width: 768px)">
                                                            <source srcset="https://ninico.botble.com/storage/sliders/banner-3.jpg" media="(max-width: 767px)">
                                                            <img data-bb-lazy="true" loading="eager" src=https://ninico.botble.com/storage/sliders/banner-3.jpg alt="Up To 40% Off latest Creations"></img>
                                                        </picture>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-pagination"></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-xxl-3 col-lg-3">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="tpslider-banner tp-slider-sm-banner mb-30">
                                            <a href="/products">
                                                <div className="tpslider-banner__img">
                                                    <img src=https://ninico.botble.com/storage/sliders/banner-slider-01.jpg alt="New Modern &amp; Stylist &lt;br&gt; Crafts">
                                                    <div className="tpslider-banner__content">
                                                        <h4 className="tpslider-banner__title">
                                                            New Modern &amp;Stylist <br>Crafts
                                                        </h4>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="tpslider-banner">
                                            <a href="/products">
                                                <div className="tpslider-banner__img">
                                                    <img src=https://ninico.botble.com/storage/sliders/banner-slider-02.jpg alt="Popular Energy with our &lt;br&gt; newest collection">
                                                    <div className="tpslider-banner__content">
                                                        <h4 className="tpslider-banner__title">
                                                            Popular Energy with our <br>newest collection
                                                        </h4>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <style>
                    .shortcode-lazy-loading {
                        position: relative;
                        min-height: 12rem;
                    }

                    .loading-spinner {
                        align-items: center;
                        background: hsla(0, 0%, 100%, 0.5);
                        display: flex;
                        height: 100%;
                        inset-inline-start: 0;
                        justify-content: center;
                        position: absolute;
                        top: 0;
                        width: 100%;
                        z-index: 1;
                        &:after {
                            animation: loading-spinner-rotation 0.5s linear infinite;
                            border-color: var(--primary-color) transparent var(--primary-color) transparent;
                            border-radius: 50%;
                            border-style: solid;
                            border-width: 1px;
                            content: ' ';
                            display: block;
                            height: 40px;
                            position: absolute;
                            top: calc(50% - 20px);
                            width: 40px;
                            z-index: 1;
                        }
                    }

                    @keyframes loading-spinner-rotation {
                        0% {
                            transform: rotate(0deg);
                        }

                        100% {
                            transform: rotate(360deg);
                        }
                    }
                </style>
                <div className="shortcode-lazy-loading" data-name="product-categories" data-attributes="{&quot;title&quot;:&quot;Top &lt;span&gt;Categories&lt;\/span&gt;&quot;,&quot;category_ids&quot;:&quot;10,11,12,13,14,15&quot;,&quot;style&quot;:&quot;wooden&quot;}">
                    <div className="loading-spinner"></div>
                </div>
                <div className="shortcode-lazy-loading" data-name="products" data-attributes="{&quot;style&quot;:&quot;wooden&quot;,&quot;title&quot;:&quot;Popular &lt;span&gt;Products&lt;\/span&gt;&quot;,&quot;limit&quot;:&quot;10&quot;}">
                    <div className="loading-spinner"></div>
                </div>
                <div className="shortcode-lazy-loading" data-name="deal-product" data-attributes="{&quot;flash_sale_id&quot;:&quot;1&quot;,&quot;style&quot;:&quot;wooden&quot;}">
                    <div className="loading-spinner"></div>
                </div>
                <div className="shortcode-lazy-loading" data-name="gallery" data-attributes="{&quot;title&quot;:&quot;ninico-shop&quot;,&quot;limit&quot;:&quot;6&quot;,&quot;subtitle&quot;:&quot;Follow On&quot;}">
                    <div className="loading-spinner"></div>
                </div>
            </div>
        </main>
        <footer>
            <div className="footer-area pt-65 page_speed_1099132684">
                <div className="container">
                    <div className="main-footer pb-15 mb-30">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="footer-widget footer-col-1 mb-40">
                                    <div className="footer-logo mb-30"></div>
                                    <div className="footer-content">
                                        <div>Elegant pink origami design three dimensional view and decoration co-exist. Great for adding a decorative touch to any room’s decor.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="footer-widget footer-col-2 ml-30 mb-40">
                                    <h4 className="footer-widget__title mb-30">Information</h4>
                                    <div className="footer-widget__links">
                                        <ul>
                                            <li className="">
                                                <a href="https://ninico.botble.com/" title="Custom Service">Custom Service </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/" title="FAQs">FAQs </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/" title="Order Tracking">Order Tracking </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/" title="Contacts">Contacts </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/" title="Events">Events </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="footer-widget footer-col-2 ml-30 mb-40">
                                    <h4 className="footer-widget__title mb-30">My Account</h4>
                                    <div className="footer-widget__links">
                                        <ul>
                                            <li className="">
                                                <a href="https://ninico.botble.com/" title="Delivery Information">Delivery Information </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/" title="Privacy Policy">Privacy Policy </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/" title="Discount">Discount </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/" title="Custom Service">Custom Service </a>
                                            </li>
                                            <li className="">
                                                <a href="https://ninico.botble.com/" title="Terms &amp; Condition">Terms &amp;Condition </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="footer-widget footer-col-2 ml-30 mb-40">
                                    <h4 className="footer-widget__title mb-30">Social Network</h4>
                                    <div className="footer-widget__links">
                                        <ul>
                                            <li className="">
                                                <a href="#" title="Facebook">
                                                    <i className="fab fa-facebook me-1"></i>
                                                    Facebook 
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="#" title="Dribble">
                                                    <i className="fab fa-dribbble me-1"></i>
                                                    Dribble 
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="#" title="Twitter">
                                                    <i className="fab fa-twitter me-1"></i>
                                                    Twitter 
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="#" title="Behance">
                                                    <i className="fab fa-behance me-1"></i>
                                                    Behance 
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="#" title="Youtube">
                                                    <i className="fab fa-youtube me-1"></i>
                                                    Youtube 
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="footer-widget footer-col-5 mb-40">
                                    <h4 className="footer-widget__title mb-30">Get Newsletter</h4>
                                    <p>Get on the list and get 10% off your first order!</p>
                                    <div className="footer-widget__newsletter">
                                        <form method="POST" action="https://ninico.botble.com/newsletter/subscribe" accept-charset="UTF-8" id="botble-newsletter-forms-fronts-newsletter-form" className="subscribe-form newsletter-form dirty-check">
                                            <input name=_token type=hidden value="wTS76UlGKNDta3ac8Soj7BvpKZq5jIMQdLmqWJG3">
                                            <div className="input-group mb-3">
                                                <input className="form-control" placeholder="Enter Your Email" id="newsletter-email" required="required" name=email type=email>
                                            </div>
                                            <div className="newsletter-message newsletter-success-message page_speed_67527981"></div>
                                            <div className="newsletter-message newsletter-error-message page_speed_67527981"></div>
                                            <button className="footer-widget__fw-news-btn tpsecondary-btn" type=submit>
                                                Subscribe Now<i className="fal fa-long-arrow-right"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-cta pb-20">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6">
                                <div className="footer-cta__contact">
                                    <div className="footer-cta__icon">
                                        <i className="far fa-phone-alt"></i>
                                    </div>
                                    <div className="footer-cta__text">
                                        <a href="tel:980. 029. 666. 99">980. 029. 666. 99</a>
                                        <span>Working 8:00 - 22:00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8 col-md-8 col-sm-6">
                                <div className="footer-cta__source">
                                    <div className="footer-cta__source-content">
                                        <h4 className="footer-cta__source-title">Download App on Mobile</h4>
                                        <p>15% discount on your first purchase</p>
                                    </div>
                                    <div className="footer-cta__source-thumb">
                                        <a href="#">
                                            <img src=https://ninico.botble.com/storage/general/f-app.jpg alt="apple">
                                        </a>
                                        <a href="#">
                                            <img src=https://ninico.botble.com/storage/general/f-google.jpg alt="google">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright page_speed_1178251385">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-5 col-sm-12">
                                <div className="footer-copyright__content d-flex align-items-center h-100">
                                    <span>Copyright 2024 © Ninico. All rights reserved. Powered by Botble. </span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5 col-md-7 col-sm-12">
                                <div className="footer-copyright__brand">
                                    <a href="/">
                                        <img data-bb-lazy="true" loading="lazy" src=https://ninico.botble.com/storage/general/f-brand-icon-01.png alt="Ninico - Minimal eCommerce"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="navigation-bar">
            <ul className="navigation-bar__list">
                <li>
                    <a href="https://ninico.botble.com" className="text-truncate" title="Home">
                        <i className="fal fa-home"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a role="button" href="javascript:void(0)" className="tp-categories-sidebar-toggle text-truncate" title="Categories">
                        <i className="fal fa-list"></i>
                        <span>Categories</span>
                    </a>
                </li>
                <li>
                    <a role="button" href="javascript:void(0)" className="tp-cart-toggle text-truncate" title="Cart">
                        <div className="header-cart p-relative">
                            <i className="fal fa-shopping-cart"></i>
                            <span className="tp-product-count text-white">0</span>
                        </div>
                        <span>Cart</span>
                    </a>
                </li>
                <li>
                    <a href="https://ninico.botble.com/wishlist" className="text-truncate" title="Wishlist">
                        <div className="header-cart p-relative">
                            <i className="fal fa-heart"></i>
                            <span className="tp-product-count tp-product-wishlist-count text-white page_speed_1074197018">0</span>
                        </div>
                        <span>Wishlist</span>
                    </a>
                </li>
                <li>
                    <a href="https://ninico.botble.com/customer/overview" className="text-truncate" title="Account">
                        <i className="fal fa-user"></i>
                        <span>Account</span>
                    </a>
                </li>
            </ul>
        </div>
        <script>
            'use strict';
            window.trans = {};
            window.siteConfig = {};
            window.currencies = {
                "display_big_money": false,
                "billion": "billion",
                "million": "million",
                "is_prefix_symbol": true,
                "symbol": "$",
                "title": "USD",
                "decimal_separator": ".",
                "thousands_separator": ",",
                "number_after_dot": 2,
                "show_symbol_or_title": true
            };
            siteConfig.ajaxCart = 'https://ninico.botble.com/ajax/cart';
            siteConfig.cartUrl = 'https://ninico.botble.com/cart';
        </script>
        <link media="all" type=text/css rel="stylesheet" href="https://ninico.botble.com/vendor/core/plugins/simple-slider/libraries/owl-carousel/owl.carousel.css?v=1.0.2">
        <link media="all" type=text/css rel="stylesheet" href="https://ninico.botble.com/vendor/core/plugins/simple-slider/css/simple-slider.css?v=1.0.2">
        <script data-pagespeed-no-defer="1" src=https://ninico.botble.com/themes/ninico/plugins/jquery/jquery-3.7.1.min.js></script>
        <script src=https://ninico.botble.com/themes/ninico/js/waypoints.js></script>
        <script src=https://ninico.botble.com/themes/ninico/plugins/bootstrap/bootstrap.bundle.min.js></script>
        <script src=https://ninico.botble.com/themes/ninico/plugins/swiper/swiper-bundle.js></script>
        <script src=https://ninico.botble.com/themes/ninico/plugins/slick/slick.js></script>
        <script src=https://ninico.botble.com/themes/ninico/plugins/magnific-popup/magnific-popup.js></script>
        <script src=https://ninico.botble.com/themes/ninico/plugins/nice-select/nice-select.js></script>
        <script src=https://ninico.botble.com/themes/ninico/js/wow.js></script>
        <script src=https://ninico.botble.com/themes/ninico/js/isotope-pkgd.js></script>
        <script src=https://ninico.botble.com/themes/ninico/js/imagesloaded-pkgd.js></script>
        <script src=https://ninico.botble.com/themes/ninico/plugins/jquery-ui/jquery-ui.js></script>
        <script src=https://ninico.botble.com/themes/ninico/js/app.js?v= 1.6.0></script>
        <script src=https://ninico.botble.com/themes/ninico/js/theme.js?v= 1.6.0></script>
        <script src=https://ninico.botble.com/themes/ninico/js/ecommerce.js?v= 1.6.0></script>
        <script src=https://ninico.botble.com/vendor/core/plugins/simple-slider/libraries/owl-carousel/owl.carousel.js?v= 1.0.2></script>
        <script src=https://ninico.botble.com/vendor/core/plugins/simple-slider/js/simple-slider.js?v= 1.0.2></script>
        <script src=https://ninico.botble.com/vendor/core/core/js-validation/js/js-validation.js?v= 1.0.1></script>
        <script>
            jQuery(document).ready(function() {
                'use strict';
                $("#botble-newsletter-forms-fronts-newsletter-form").each(function() {
                    $(this).validate({
                        errorElement: 'div',
                        errorclassName: 'invalid-feedback',
                        errorPlacement: function(error, element) {
                            if (element.closest('[data-bb-toggle="tree-checkboxes"]').length) {
                                error.insertAfter(element.closest('[data-bb-toggle="tree-checkboxes"]'));
                            } else if (element.parent('.input-group').length || element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
                                error.insertAfter(element.parent());
                            } else if ($(element).data('select2')) {
                                error.insertAfter(element.next('span'));
                            } else {
                                error.insertAfter(element);
                            }
                        },
                        highlight: function(element) {
                            $(element).closest('.form-control').removeclassName('is-valid').addclassName('is-invalid');
                        },
                        unhighlight: function(element) {
                            $(element).closest('.form-control').removeclassName('is-invalid').addclassName('is-valid');
                        },
                        success: function(element) {
                            $(element).closest('.form-control').removeclassName('is-invalid').addclassName('is-valid');
                        },
                        focusInvalid: false,
                        rules: JSON.parse('{\u0022email\u0022:{\u0022laravelValidation\u0022:[[\u0022Required\u0022,[],\u0022The email field is required.\u0022,true],[\u0022Email\u0022,[],\u0022The email must be a valid email address.\u0022,false]],\u0022laravelValidationRemote\u0022:[[\u0022Unique\u0022,[\u0022email\u0022,\u0022eyJpdiI6IjYwMldNZzJDcWJ5VngwNEVBcllIa1E9PSIsInZhbHVlIjoiT0c3cFcwSElLRzYrODk5aVZYT2x6Y2oya2hha2ZueHdvbWJUYXJzeW1sQmVJL050aXZsQTRNSFpQeitIR2RkTTkyL21jNnVwOGVBd0kyQ1ZtZnMyUXc9PSIsIm1hYyI6ImMzYThiODY0ODUyNmJlNjAwZjBlZGM3MjkxMjE1NGE4ZDI4YzIxMGYzMzliY2Q4MDc0MDk3MDJkOGVlZWJhZGEiLCJ0YWciOiIifQ==\u0022,false],\u0022The email has already been taken.\u0022,false]]},\u0022status\u0022:{\u0022laravelValidation\u0022:[[\u0022In\u0022,[\u0022subscribed\u0022,\u0022unsubscribed\u0022],\u0022The selected status is invalid.\u0022,false]]}}')
                    });
                });
            });
        </script>
        <script src=https://ninico.botble.com/vendor/core/plugins/language/js/language-public.js?v= 2.2.0></script>
        <script src=https://ninico.botble.com/vendor/core/plugins/cookie-consent/js/cookie-consent.js?v= 1.0.2></script>
        <script src=https://ninico.botble.com/vendor/core/plugins/sale-popup/js/sale-popup.js?v= 1.0.0></script>
        <script src=https://ninico.botble.com/vendor/core/plugins/newsletter/js/newsletter.js></script>
        <script async defer src='https://www.googletagmanager.com/gtag/js?id=G-76NX8HY29D'></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-76NX8HY29D');
        </script>
        <script src=https://ninico.botble.com/vendor/core/packages/theme/js/toast.js></script>
        <script src=https://ninico.botble.com/vendor/core/plugins/announcement/js/announcement.js></script>
        <script>
            var lazyLoadShortcodeBlocks = function() {
                $('.shortcode-lazy-loading').each(function(index, element) {
                    var $element = $(element);
                    var name = $element.data('name');
                    var attributes = $element.data('attributes');
                    $.ajax({
                        url: 'https://ninico.botble.com/ajax/render-ui-blocks',
                        type: 'POST',
                        data: {
                            name,
                            attributes: {
                                ...attributes,
                            },
                        },
                        headers: {
                            'X-CSRF-TOKEN': 'wTS76UlGKNDta3ac8Soj7BvpKZq5jIMQdLmqWJG3'
                        },
                        success: function({error, data}) {
                            if (error) {
                                return;
                            }
                            $element.replaceWith(data);
                            document.dispatchEvent(new CustomEvent('shortcode.loaded',{
                                detail: {
                                    name,
                                    attributes,
                                    html: data,
                                }
                            }));
                        },
                    });
                });
            };
            window.addEventListener('load', function() {
                lazyLoadShortcodeBlocks();
            });
        </script>
        <div className="js-cookie-consent cookie-consent cookie-consent-full-width page_speed_1382324351">
            <div className="cookie-consent-body page_speed_688954177">
                <span className="cookie-consent__message">Your experience on this site will be improved by allowing cookies. </span>
                <button className="js-cookie-consent-agree cookie-consent__agree page_speed_2003703846">Allow cookies </button>
            </div>
        </div>
        <div data-site-cookie-name="cookie_for_consent"></div>
        <div data-site-cookie-lifetime="7300"></div>
        <div data-site-cookie-domain="ninico.botble.com"></div>
        <div data-site-session-secure=""></div>
        <div className="js-sale-popup-container hidden" data-include="https://ninico.botble.com/ajax/sale-popup/products"></div>
        <script src=https://ninico.botble.com/vendor/core/packages/theme/js/toast.js></script>
    </body>
</html>

  );
}
