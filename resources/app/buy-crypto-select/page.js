'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function BuyCryptoSelect() {
    const [flatTabs, setFlatTabs] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Buy Crypto">
                <div>
                    <section className="buy-crypto flat-tabs">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <ul className="menu-tab">
                                        <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}><h6 className="fs-16">Overview</h6></li>
                                        <li className={flatTabs === 2 ? "active" : ""} onClick={() => handleFlatTabs(2)}><h6 className="fs-16">Buy Crypto</h6></li>
                                        <li className={flatTabs === 3 ? "active" : ""} onClick={() => handleFlatTabs(3)}><h6 className="fs-16">Sell Crypto</h6></li>
                                    </ul>
                                </div>
                                <div className="col-md-9">
                                    <div className="content-tab">
                                        <div className="content-inner buy-crypto__main" style={{ display: `${flatTabs === 1 ? "block" : "none"}` }}>
                                            <div className="top">
                                                <ul className="top-list">
                                                    <li className="active">
                                                        <h6><span />Select currency</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Important Notes</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Payment Details</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main">
                                                <h6>Select Currency</h6>
                                                <p>Reference Price: 1,450,939,280.43 VND/BTC</p>
                                                <form action="buy-crypto-confirm" className="form">
                                                    <div className="form-field">
                                                        <label>Pay</label>
                                                        <input type="number" className="dollar" placeholder="US$" />
                                                    </div>
                                                    <button className="btn-convert" >
                                                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.6691 3.02447L15.4471 0.35791C15.3074 0.195998 15.1203 0.106407 14.9261 0.108432C14.7319 0.110457 14.5461 0.203937 14.4088 0.368737C14.2715 0.533538 14.1936 0.756473 14.1919 0.989527C14.1902 1.22258 14.2649 1.44711 14.3998 1.61475L15.3575 2.76403H2.3319C1.74258 2.76403 1.1774 3.04497 0.760683 3.54505C0.34397 4.04512 0.109863 4.72337 0.109863 5.43059L0.109863 8.09714C0.109863 8.33288 0.187899 8.55896 0.326803 8.72566C0.465707 8.89235 0.654102 8.986 0.850542 8.986C1.04698 8.986 1.23538 8.89235 1.37428 8.72566C1.51319 8.55896 1.59122 8.33288 1.59122 8.09714V5.43059C1.59122 5.19485 1.66926 4.96877 1.80816 4.80207C1.94707 4.63538 2.13546 4.54174 2.3319 4.54174H15.3575L14.3998 5.69102C14.329 5.77302 14.2726 5.8711 14.2338 5.97954C14.195 6.08798 14.1745 6.20462 14.1737 6.32264C14.1728 6.44066 14.1916 6.5577 14.2288 6.66694C14.2661 6.77618 14.3211 6.87542 14.3906 6.95888C14.4601 7.04233 14.5428 7.10833 14.6339 7.15302C14.7249 7.19772 14.8224 7.22021 14.9208 7.21918C15.0191 7.21816 15.1163 7.19363 15.2067 7.14705C15.297 7.10047 15.3788 7.03275 15.4471 6.94786L17.6691 4.2813C17.8052 4.11283 17.8812 3.88746 17.8812 3.65288C17.8812 3.41831 17.8052 3.19293 17.6691 3.02447Z" fill="white" />
                                                            <path d="M17.1467 8.98828C16.9503 8.98828 16.7619 9.08193 16.623 9.24862C16.4841 9.41531 16.406 9.64139 16.406 9.87713V12.5437C16.406 12.7794 16.328 13.0055 16.1891 13.1722C16.0502 13.3389 15.8618 13.4325 15.6653 13.4325H2.63976L3.59746 12.2832C3.73238 12.1156 3.80704 11.8911 3.80535 11.658C3.80366 11.425 3.72576 11.202 3.58844 11.0372C3.45111 10.8724 3.26534 10.779 3.07113 10.7769C2.87693 10.7749 2.68983 10.8645 2.55014 11.0264L0.328098 13.693C0.191902 13.8613 0.115723 14.0867 0.115723 14.3214C0.115723 14.556 0.191902 14.7814 0.328098 14.9498L2.55014 17.6164C2.61846 17.7012 2.70019 17.769 2.79056 17.8155C2.88092 17.8621 2.97812 17.8866 3.07646 17.8877C3.17481 17.8887 3.27234 17.8662 3.36337 17.8215C3.4544 17.7768 3.53709 17.7108 3.60664 17.6274C3.67618 17.5439 3.73118 17.4447 3.76842 17.3354C3.80567 17.2262 3.82441 17.1092 3.82355 16.9911C3.8227 16.8731 3.80226 16.7565 3.76345 16.648C3.72463 16.5396 3.6682 16.4415 3.59746 16.3595L2.63976 15.2102H15.6653C16.2547 15.2102 16.8199 14.9293 17.2366 14.4292C17.6533 13.9291 17.8874 13.2509 17.8874 12.5437V9.87713C17.8874 9.64139 17.8094 9.41531 17.6704 9.24862C17.5315 9.08193 17.3431 8.98828 17.1467 8.98828Z" fill="white" />
                                                        </svg>
                                                    </button>
                                                    <div className="form-field">
                                                        <label>Receive</label>
                                                        <input type="number" className="bitcoin" placeholder="BTC" />
                                                    </div>
                                                    <button type="submit" className="btn-action">Continue</button>
                                                </form>
                                                <div className="button" />
                                            </div>
                                        </div>
                                        <div className="content-inner buy-crypto__main" style={{ display: `${flatTabs === 2 ? "block" : "none"}` }}>
                                            <div className="top">
                                                <ul className="top-list">
                                                    <li className="active">
                                                        <h6><span />Select currency</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Important Notes</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Payment Details</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main">
                                                <h6>Select Currency</h6>
                                                <p>Reference Price: 1,450,939,280.43 VND/BTC</p>
                                                <form action="buy-crypto-confirm" className="form">
                                                    <div className="form-field">
                                                        <label>Pay</label>
                                                        <input type="number" className="dollar" placeholder="US$" />
                                                    </div>
                                                    <button className="btn-convert" >
                                                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.6691 3.02447L15.4471 0.35791C15.3074 0.195998 15.1203 0.106407 14.9261 0.108432C14.7319 0.110457 14.5461 0.203937 14.4088 0.368737C14.2715 0.533538 14.1936 0.756473 14.1919 0.989527C14.1902 1.22258 14.2649 1.44711 14.3998 1.61475L15.3575 2.76403H2.3319C1.74258 2.76403 1.1774 3.04497 0.760683 3.54505C0.34397 4.04512 0.109863 4.72337 0.109863 5.43059L0.109863 8.09714C0.109863 8.33288 0.187899 8.55896 0.326803 8.72566C0.465707 8.89235 0.654102 8.986 0.850542 8.986C1.04698 8.986 1.23538 8.89235 1.37428 8.72566C1.51319 8.55896 1.59122 8.33288 1.59122 8.09714V5.43059C1.59122 5.19485 1.66926 4.96877 1.80816 4.80207C1.94707 4.63538 2.13546 4.54174 2.3319 4.54174H15.3575L14.3998 5.69102C14.329 5.77302 14.2726 5.8711 14.2338 5.97954C14.195 6.08798 14.1745 6.20462 14.1737 6.32264C14.1728 6.44066 14.1916 6.5577 14.2288 6.66694C14.2661 6.77618 14.3211 6.87542 14.3906 6.95888C14.4601 7.04233 14.5428 7.10833 14.6339 7.15302C14.7249 7.19772 14.8224 7.22021 14.9208 7.21918C15.0191 7.21816 15.1163 7.19363 15.2067 7.14705C15.297 7.10047 15.3788 7.03275 15.4471 6.94786L17.6691 4.2813C17.8052 4.11283 17.8812 3.88746 17.8812 3.65288C17.8812 3.41831 17.8052 3.19293 17.6691 3.02447Z" fill="white" />
                                                            <path d="M17.1467 8.98828C16.9503 8.98828 16.7619 9.08193 16.623 9.24862C16.4841 9.41531 16.406 9.64139 16.406 9.87713V12.5437C16.406 12.7794 16.328 13.0055 16.1891 13.1722C16.0502 13.3389 15.8618 13.4325 15.6653 13.4325H2.63976L3.59746 12.2832C3.73238 12.1156 3.80704 11.8911 3.80535 11.658C3.80366 11.425 3.72576 11.202 3.58844 11.0372C3.45111 10.8724 3.26534 10.779 3.07113 10.7769C2.87693 10.7749 2.68983 10.8645 2.55014 11.0264L0.328098 13.693C0.191902 13.8613 0.115723 14.0867 0.115723 14.3214C0.115723 14.556 0.191902 14.7814 0.328098 14.9498L2.55014 17.6164C2.61846 17.7012 2.70019 17.769 2.79056 17.8155C2.88092 17.8621 2.97812 17.8866 3.07646 17.8877C3.17481 17.8887 3.27234 17.8662 3.36337 17.8215C3.4544 17.7768 3.53709 17.7108 3.60664 17.6274C3.67618 17.5439 3.73118 17.4447 3.76842 17.3354C3.80567 17.2262 3.82441 17.1092 3.82355 16.9911C3.8227 16.8731 3.80226 16.7565 3.76345 16.648C3.72463 16.5396 3.6682 16.4415 3.59746 16.3595L2.63976 15.2102H15.6653C16.2547 15.2102 16.8199 14.9293 17.2366 14.4292C17.6533 13.9291 17.8874 13.2509 17.8874 12.5437V9.87713C17.8874 9.64139 17.8094 9.41531 17.6704 9.24862C17.5315 9.08193 17.3431 8.98828 17.1467 8.98828Z" fill="white" />
                                                        </svg>
                                                    </button>
                                                    <div className="form-field">
                                                        <label>Receive</label>
                                                        <input type="number" className="bitcoin" placeholder="BTC" />
                                                    </div>
                                                    <button type="submit" className="btn-action">Continue</button>
                                                </form>
                                                <div className="button" />
                                            </div>
                                        </div>
                                        <div className="content-inner buy-crypto__main" style={{ display: `${flatTabs === 3 ? "block" : "none"}` }}>
                                            <div className="top">
                                                <ul className="top-list">
                                                    <li className="active">
                                                        <h6><span />Select currency</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Important Notes</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Payment Details</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main">
                                                <h6>Select Currency</h6>
                                                <p>Reference Price: 1,450,939,280.43 VND/BTC</p>
                                                <form action="buy-crypto-confirm" className="form">
                                                    <div className="form-field">
                                                        <label>Pay</label>
                                                        <input type="number" className="dollar" placeholder="US$" />
                                                    </div>
                                                    <button className="btn-convert" >
                                                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.6691 3.02447L15.4471 0.35791C15.3074 0.195998 15.1203 0.106407 14.9261 0.108432C14.7319 0.110457 14.5461 0.203937 14.4088 0.368737C14.2715 0.533538 14.1936 0.756473 14.1919 0.989527C14.1902 1.22258 14.2649 1.44711 14.3998 1.61475L15.3575 2.76403H2.3319C1.74258 2.76403 1.1774 3.04497 0.760683 3.54505C0.34397 4.04512 0.109863 4.72337 0.109863 5.43059L0.109863 8.09714C0.109863 8.33288 0.187899 8.55896 0.326803 8.72566C0.465707 8.89235 0.654102 8.986 0.850542 8.986C1.04698 8.986 1.23538 8.89235 1.37428 8.72566C1.51319 8.55896 1.59122 8.33288 1.59122 8.09714V5.43059C1.59122 5.19485 1.66926 4.96877 1.80816 4.80207C1.94707 4.63538 2.13546 4.54174 2.3319 4.54174H15.3575L14.3998 5.69102C14.329 5.77302 14.2726 5.8711 14.2338 5.97954C14.195 6.08798 14.1745 6.20462 14.1737 6.32264C14.1728 6.44066 14.1916 6.5577 14.2288 6.66694C14.2661 6.77618 14.3211 6.87542 14.3906 6.95888C14.4601 7.04233 14.5428 7.10833 14.6339 7.15302C14.7249 7.19772 14.8224 7.22021 14.9208 7.21918C15.0191 7.21816 15.1163 7.19363 15.2067 7.14705C15.297 7.10047 15.3788 7.03275 15.4471 6.94786L17.6691 4.2813C17.8052 4.11283 17.8812 3.88746 17.8812 3.65288C17.8812 3.41831 17.8052 3.19293 17.6691 3.02447Z" fill="white" />
                                                            <path d="M17.1467 8.98828C16.9503 8.98828 16.7619 9.08193 16.623 9.24862C16.4841 9.41531 16.406 9.64139 16.406 9.87713V12.5437C16.406 12.7794 16.328 13.0055 16.1891 13.1722C16.0502 13.3389 15.8618 13.4325 15.6653 13.4325H2.63976L3.59746 12.2832C3.73238 12.1156 3.80704 11.8911 3.80535 11.658C3.80366 11.425 3.72576 11.202 3.58844 11.0372C3.45111 10.8724 3.26534 10.779 3.07113 10.7769C2.87693 10.7749 2.68983 10.8645 2.55014 11.0264L0.328098 13.693C0.191902 13.8613 0.115723 14.0867 0.115723 14.3214C0.115723 14.556 0.191902 14.7814 0.328098 14.9498L2.55014 17.6164C2.61846 17.7012 2.70019 17.769 2.79056 17.8155C2.88092 17.8621 2.97812 17.8866 3.07646 17.8877C3.17481 17.8887 3.27234 17.8662 3.36337 17.8215C3.4544 17.7768 3.53709 17.7108 3.60664 17.6274C3.67618 17.5439 3.73118 17.4447 3.76842 17.3354C3.80567 17.2262 3.82441 17.1092 3.82355 16.9911C3.8227 16.8731 3.80226 16.7565 3.76345 16.648C3.72463 16.5396 3.6682 16.4415 3.59746 16.3595L2.63976 15.2102H15.6653C16.2547 15.2102 16.8199 14.9293 17.2366 14.4292C17.6533 13.9291 17.8874 13.2509 17.8874 12.5437V9.87713C17.8874 9.64139 17.8094 9.41531 17.6704 9.24862C17.5315 9.08193 17.3431 8.98828 17.1467 8.98828Z" fill="white" />
                                                        </svg>
                                                    </button>
                                                    <div className="form-field">
                                                        <label>Receive</label>
                                                        <input type="number" className="bitcoin" placeholder="BTC" />
                                                    </div>
                                                    <button type="submit" className="btn-action">Continue</button>
                                                </form>
                                                <div className="button" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-sale">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="block-text">
                                        <h4 className="heading">Earn up to $25 worth of crypto</h4>
                                        <p className="desc">
                                            Discover how specific cryptocurrencies work — and get a bit of
                                            each crypto to try out for yourself.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="button">
                                        <Link href="#">Create Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}