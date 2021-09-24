import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styling/style.css';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
// import lap1Desc from './lap1Desc';
// import lap2Desc from './lap2Desc';
// import lap3Desc from './lap3Desc';
import img1 from './Images/lap_image1.jfif';
import img2 from './Images/lap_image2.jfif';
import img3 from './Images/lap_image3.jfif';
import img4 from './Images/lap_image4.webp';
import img5 from './Images/lap_image5.jfif';
import img6 from './Images/lap_image6.jfif';
import img7 from './Images/lap_image7.webp';
import img8 from './Images/lap_image8.webp';
import img9 from './Images/lap_image9.webp';

export class Laptop extends React.Component {
    render() {
        return <div>
            <div className="container">
                <h3 id="hone">Laptops</h3>

                <div className="row" id="div1">

                    <p className="col-4" id="product">
                    <img src={img1} alt="" height={200} width={200} />
                        <p id="para">
                            RS.64,000/-
                            <br></br>
                            HP Pavilion x360
                            <br />
                            <Router>
                                <Link to="/HPPavilion" className="link">To know More</Link>
                                <Route path="/HPPavilion" component={Lap1Desc} />
                            </Router>
                        </p>
                    </p>

                    <p className="col-4" id="product">
                    <img src={img2} alt="" height={200} width={200} />
                        <p id="para">
                            RS.35,500/-
                            <br></br>
                            Dell Vostro 15 350
                            <br />
                            <Router>
                                <Link to="/Dell" className="link">To know More</Link>
                                <Route path="/Dell" component={Lap2Desc} />
                            </Router>
                        </p>
                    </p>

                    <p className="col-4" id="product">
                    <img src={img3} alt="" height={200} width={200} />
                        <p id="para">
                            RS.95,000/-
                            <br></br>
                            Apple MacBook Pro
                            <br />
                            <Router>
                                <Link to="/Apple" className="link">To know More</Link>
                                <Route path="/Apple" component={Lap3Desc} />
                            </Router>
                        </p>
                    </p>
                </div>

            </div>
            <br />

            <div className="container">
                <div className="row" id="div1">

                    <p className="col-4" id="product">
                    <img src={img4} alt="" height={200} width={200} />
                        <p id="para">
                            RS.43,000/-
                            <br></br>
                            Lenovo IdeaPad
                            <br />
                            <Router>
                                <Link to="/LenovoIdeapad" className="link">To know More</Link>
                                <Route path="/LenovoIdeapad" component={Lap4Desc} />
                            </Router>
                        </p>
                    </p>

                    <p className="col-4" id="product">
                    <img src={img5} alt="" height={200} width={200} />
                        <p id="para">
                            RS.18,500/-
                            <br></br>
                            Acer Aspire
                            <br />
                            <Router>
                                <Link to="/acerAspire" className="link">To know More</Link>
                                <Route path="/acerAspire" component={Lap5Desc} />
                            </Router>
                        </p>
                    </p>

                    <p className="col-4" id="product">
                    <img src={img6} alt="" height={200} width={200} />
                        <p id="para">
                            RS.25,000/-
                            <br></br>
                            HP ChromeBook
                            <br />
                            <Router>
                                <Link to="/HPChromeBook" className="link">To know More</Link>
                                <Route path="/HPChromeBook" component={Lap6Desc} />
                            </Router>
                        </p>
                    </p>
                </div>

            </div>

            <br />

            <div className="container">
                <div className="row" id="div1">

                    <p className="col-4" id="product">
                    <img src={img7} alt="" height={200} width={200} />
                        <p id="para">
                            RS.28,499/-
                            <br></br>
                            Dell Inspiron
                            <br />
                            <Router>
                                <Link to="/DellInspiron" className="link">To know More</Link>
                                <Route path="/DellInspiron" component={Lap7Desc} />
                            </Router>
                        </p>
                    </p>

                    <p className="col-4" id="product">
                    <img src={img8} alt="" height={200} width={200} />
                        <p id="para">
                            RS.15,500/-
                            <br></br>
                            HP Mini Laptop
                            <br />
                            <Router>
                                <Link to="/HPMini" className="link">To know More</Link>
                                <Route path="/HPMini" component={Lap8Desc} />
                            </Router>
                        </p>
                    </p>

                    <p className="col-4" id="product">
                    <img src={img9} alt="" height={200} width={200} />
                        <p id="para">
                            RS.25,000/-
                            <br></br>
                            Dell Inspiron 5567
                            <br />
                            <Router>
                                <Link to="/DellIns5567" className="link">To know More</Link>
                                <Route path="/DellIns5567" component={Lap9Desc} />
                            </Router>
                        </p>
                    </p>
                </div>

            </div>

            <br />

        </div>
    }
}

const Lap1Desc = () => {
    let history = useHistory();
    return (
        <div>
            <p>HP Pavilion x360 14-dh1011tu 8GB02PA#ACJ Core i5 10th Gen Windows 10 Home Laptop (8 GB RAM, 1 TB HDD + 256 GB SSD, Intel UHD Graphics, 35.56cm, Natural Silver)</p>
            <button id="button" onClick={message}>Add To Cart</button>    &nbsp;&nbsp;&nbsp;
            <button id="button" onClick={() => { history.push('/Laptop') }}>Go Back</button>
        </div>
    );
}

const Lap2Desc = () => {
    let history = useHistory();
    return (
        <div>
            <p>10th Generation Intel® Core™ i3-1005G1 Processor (4MB Cache, up to 3.4 GHz)laptop Windows 10 Home Single Language, English Intel® UHD Graphics with shared graphics memory 8GB, 8GBx1, DDR4, 2666MHz, 1TB 5400 rpm 2.5" SATA Hard Drive, Dune color cover for non-touch LCD

            </p>
            <button id="button" onClick={message}>Add To Cart</button> &nbsp;&nbsp;&nbsp;
            <button id="button" onClick={() => { history.push('/Laptop') }}>Go Back</button>
        </div>
    );
}

const Lap3Desc = () => {
    let history = useHistory();
    return (
        <div>
            <p>Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage.Battery Life (up to hours): 10. Operating system: macOS</p>
            <button id="button" onClick={message}>Add To Cart</button>   &nbsp;&nbsp;&nbsp;
            <button id="button" onClick={() => { history.push('/Laptop') }}>Go Back</button>
        </div>
    );
}

const Lap4Desc = () => {
    let history = useHistory();
    return (
        <div>
            <p>Lenovo Ideapad 330 Intel Core i5 8th Gen 15.6-inch Laptop (8GB/2TB HDD/DOS/2GB Graphics/Platinum Grey/ 2.2kg), 81DE01JWIN</p>
            <button id="button" onClick={message}>Add To Cart</button>   &nbsp;&nbsp;&nbsp;
            <button id="button" onClick={() => { history.push('/Laptop') }}>Go Back</button>
        </div>
    );
}

const Lap5Desc = () => {
    let history = useHistory();
    return (
        <div>
            <p>Acer Aspire 3 A315-23 15.6" (39.62cms) Laptop (AMD Athlon Silver 3050U dual-core/4GB/1TB HDD/Window 10, Home, 64Bit/AMD RadeonTM Graphics), Silver</p>
            <button id="button" onClick={message}>Add To Cart</button>   &nbsp;&nbsp;&nbsp;
            <button id="button" onClick={() => { history.push('/Laptop') }}>Go Back</button>
        </div>
    );
}

const Lap6Desc = () => {
    let history = useHistory();
    return (
        <div>
            <p>HP Chromebook 14-inch (35.56 cms) Thin & Light Touchscreen Laptop (Celeron N4020/4GB/64GB eMMC + 256GB Expandable Storage/Chrome OS/1.46 kgs Light/ Mineral Silver), 14a-na0003TU</p>
            <button id="button" onClick={message}>Add To Cart</button>   &nbsp;&nbsp;&nbsp;
            <button id="button" onClick={() => { history.push('/Laptop') }}>Go Back</button>
        </div>
    );
}

const Lap7Desc = () => {
    let history = useHistory();
    return (
        <div>
            <p> Dell Inspiron - Windows OS - 14 in - 500 GB drive - Hard Disk Drive - 4 GB RAM - Touchscreen - 1.6 GHz CPU - Intel CPU</p>
            <button id="button" onClick={message}>Add To Cart</button>   &nbsp;&nbsp;&nbsp;
            <button id="button" onClick={() => { history.push('/Laptop') }}>Go Back</button>
        </div>
    );
}

const Lap8Desc = () => {
    let history = useHistory();
    return (
        <div>
            <p>HP Mini Laptop - Windows OS · 12.1 in · 160 GB drive · 8 GB RAM · 2.1 GHz CPU · Intel CPU · Netbook · Intel GPU · Dual Core</p>
            <button id="button" onClick={message}>Add To Cart</button>   &nbsp;&nbsp;&nbsp;
            <button id="button" onClick={() => { history.push('/Laptop') }}>Go Back</button>
        </div>
    );
}

const Lap9Desc = () => {
    let history = useHistory();
    return (
        <div>
            <p>New Dell Inspiron 5567 · Windows OS · 15.6 in · 1 TB drive · Solid State Drive · Hard Disk Drive · 12 GB RAM · Touchscreen · Intel CPU</p>
            <button id="button" onClick={message}>Add To Cart</button>   &nbsp;&nbsp;&nbsp;
            <button id="button" onClick={() => { history.push('/Laptop') }}>Go Back</button>
        </div>
    );
}



function message() {
    alert("Thank You For Purchasing!!!")
}