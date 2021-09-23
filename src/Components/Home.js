import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styling/style.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import img1 from './Images/book_image1.jfif';
import img2 from "./Images/lap_image1.jfif";
import img3 from "./Images/bike_image2.webp";
import img4 from "./Images/bike_image1.jpg";
import img5 from "./Images/book_image2.jfif";
import img6 from "./Images/lap_image2.jfif";
import img7 from "./Images/lap_image3.jfif"; 
import img8 from "./Images/book_image3.jfif";
import img9 from "./Images/bike_image3.jfif";



export class Home extends React.Component{
    render(){
        return <div>
        <div className="container">
        <div className="row" id="div1">
            
        <p className="col-4">
        <img src={img1} alt="" height={200} width={200} />
        <p id="para">
        RS.400/-
        <br></br>
        Physical Science 
        <br/>
        <Router>
        <Link to="/physical science" className="link">To know More</Link>
        <Route path="/physical science" component={book1Desc}/>
        </Router>
        </p>
        </p>

        <p className="col-4">
        <img src={img2} alt="" height={200} width={200} />
        <p id="para">
        RS.64,000/-
        <br></br>
        HP Pavilion x360
        <br/>
        <Router>
        <Link to="/HPPavilion" className="link">To know More</Link>
        <Route path="/HPPavilion" component={lap1Desc}/>
        </Router>
        </p>
        </p>

        <p className="col-4">
        <img src={img3} alt="" height={200} width={200} />
        <p id="para">
        RS.84,000/-
        <br></br>
        Hero Pleasure Plus Platinum
        <br/>
        <Router>
        <Link to="/PleasurePlus" className="link">To know More</Link>
        <Route exact path="/PleasurePlus" component={bike2Desc}/>
        </Router>
        </p>
        </p>

        </div>
        </div>
        

        
        <div className="container">
        <div className="row" id="div1">
        
        <p  className="col-4">
        <img src={img4} alt="" height={200} width={200} />
        <p id="para">
        RS.90,000/-
        <br></br>
        Duke 250
        <br/>
        <Router>
        <Link to="/Duke250" className="link">To know More</Link>
        <Route exact path="/Duke250" component={bike1Desc}/>
        </Router>
        </p>
        </p>

        <p className="col-4">
        <img src={img5} alt="" height={200} width={200} />
        <p id="para">
        RS.500/-
        <br></br>
        Oxford Dictionary 
        <br/>
        <Router>
        <Link to="/OxfordDictionary" className="link">To know More</Link>
        <Route path="/OxfordDictionary" component={book2Desc}/>
        </Router> 
        </p>
        </p>
                
        <p className="col-4">
        <img src={img6} alt="" height={200} width={200} />
        <p id="para">
        RS.35,500/-
        <br></br>
        Dell Vostro 15 350
        <br/>
        <Router>
        <Link to="/Dell" className="link">To know More</Link>
        <Route path="/Dell" component={lap2Desc}/>
        </Router>
        </p>
        </p>

        </div>
        </div>

        <div className="container">
        <div className="row" id="div1">

        <p className="col-4">
        <img src={img7} alt="" height={200} width={200} />
        <p id="para">
        RS.95,000/-
        <br></br>
        Apple MacBook Pro
        <br/>
        <Router>
        <Link to="/Apple" className="link">To know More</Link>
        <Route path="/Apple" component={lap3Desc}/>
        </Router>
        </p>
        </p>

            
        <p className="col-4">
        <img src={img8} alt="" height={200} width={200} />
        <p id="para">
        RS.350/-
        <br></br>
        Living Planet
        <br/>
        <Router>
        <Link to="/LivingPlanet" className="link">To know More</Link>
        <Route path="/LivingPlanet" component={book3Desc}/>
        </Router> 
        </p>
        </p>

        <p className="col-4">
        <img src={img9} alt="" height={200} width={200} />
        <p id="para">
        RS.70,000/-
        <br></br>
        Pulsar
        <br/>
        <Router>
        <Link to="/Pulsar" className="link">To know More</Link>
        <Route exact path="/Pulsar" component={bike3Desc}/>
        </Router>
        </p>
        </p>
                        
            
        </div>
        </div>
        </div>
    }
}

const bike1Desc = () => {
    return ( 
        <div>
            <p>The 250 Duke is KTM's quarter-litre street bike which sits in between its 200 Duke and 390 Duke in terms of price, displacement, features and components. The motorcycle received an upgrade in 2020 in the form of an LED headlight that is similar to the unit on the 390 Duke.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const bike2Desc = () => {
    return ( 
        <div>
            <p>Hero Pleasure Plus Platinum Engine and Transmission: It is powered by 110.9 cc engine and puts a power of 8.1 PS. Torque remains at 8.7 Nm.
Max Torque: 8.7 Nm @ 5500 rpm</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const bike3Desc = () => {
    return ( 
        <div>
            <p>A pulsar is a highly magnetized rotating compact star (usually neutron stars but also white dwarfs) that emits beams of electromagnetic radiation out of its magnetic poles. The periods of pulsars make them very useful tools for astronomers.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}
const book1Desc = () => {
    return ( 
        <div>
            <p>Physical science is the study of the inorganic world. That is, it does not study living things. (Those are studied in biological, or life, science.) The four main branches of physical science are astronomy, physics, chemistry, and the Earth sciences, which include meteorology and geology.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const book2Desc = () => {
    return ( <div>
        <p>A dictionary is a reference book about words and as such it describes the functioning of individual words (sometimes called lexical items). It does so by listing these words in alphabetical order in the form of headwords, the words listed as entries in the dictionary.</p> 
        <button id = "button" onClick={message}>Add To Cart</button>   
    </div>
    );
}

const book3Desc = () => {
    return (
        <div>
            <p>In The Living Planet, based on his BBC television series, David Attenbourough's searching eye, unfailing curiousty and infectious enthusiasm, explain and illuminate the intricate lives of these colonies - from the lonely heights of the Himalayas to the wild creatures which have established themselves in the most recent of environments, the city.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>  
        </div>
      );
}
const lap1Desc = () => {
    return ( 
        <div>
            <p>HP Pavilion x360 14-dh1011tu 8GB02PA#ACJ Core i5 10th Gen Windows 10 Home Laptop (8 GB RAM, 1 TB HDD + 256 GB SSD, Intel UHD Graphics, 35.56cm, Natural Silver)</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const lap2Desc = () => {
    return ( 
        <div>
            <p>10th Generation Intel® Core™ i3-1005G1 Processor (4MB Cache, up to 3.4 GHz)laptop Windows 10 Home Single Language, English Intel® UHD Graphics with shared graphics memory 8GB, 8GBx1, DDR4, 2666MHz, 1TB 5400 rpm 2.5" SATA Hard Drive, Dune color cover for non-touch LCD

</p> 
            <button id = "button" onClick={message}>Add To Cart</button> 
        </div>
     );
}

const lap3Desc = () => {
    return ( 
        <div>
            <p>Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage.Battery Life (up to hours): 10. Operating system: macOS</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}


function message(){
    alert("Thank You For Purchasing!!!")
}

