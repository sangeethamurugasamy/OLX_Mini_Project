import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styling/style.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//import bike1Desc from './bike1Desc';
//import bike2Desc from './bike2Desc';
//import bike3Desc from './bike3Desc';
import img1 from './Images/bike_image1.jpg';
import img2 from './Images/bike_image2.webp';
import img3 from './Images/bike_image3.jfif';
import img4 from './Images/bike_image4.jfif';
import img5 from './Images/bike_image5.jfif';
import img6 from './Images/bike_image6.jfif';
import img7 from './Images/bike_image7.jfif';
import img8 from './Images/bike_image8.jfif';
import img9 from './Images/bike_image9.jfif';

export class Bike extends React.Component{
    render(){
        return <div>
        <div className="container">
        <h3 id="hone">Bikes</h3>

        <div className="row" id="div1">
        <p  className="col-4">
        <img src={img1} alt="" height={200} width={200} />
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
        <img src={img2} alt="" height={200} width={200} />
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
                        
        <p className="col-4">
        <img src={img3} alt="" height={200} width={200} />
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

        <br/>

        <div className="container">

        <div className="row" id="div1">
        <p  className="col-4">
        <img src={img4} alt="" height={200} width={200} />
        <p id="para">
        RS.55,000/-
        <br></br>
        TVS Apache
        <br/>
        <Router>
        <Link to="/TVSApache" className="link">To know More</Link>
        <Route exact path="/TVSApache" component={bike4Desc}/>
        </Router>
        </p>
        </p>

        <p className="col-4">
        <img src={img5} alt="" height={200} width={200} />
        <p id="para">
        RS.70,000/-
        <br></br>
        Suzuki Access
        <br/>
        <Router>
        <Link to="/SuzukiAccess" className="link">To know More</Link>
        <Route exact path="/SuzukiAccess" component={bike5Desc}/>
        </Router>
        </p>
        </p>
                        
        <p className="col-4">
        <img src={img6} alt="" height={200} width={200} />
        <p id="para">
        RS.65,000/-
        <br></br>
        RX 100
        <br/>
        <Router>
        <Link to="/rx100" className="link">To know More</Link>
        <Route exact path="/rx100" component={bike6Desc}/>
        </Router>
        </p>
        </p>

        </div>
        </div>

        <br/>

        <div className="container">

        <div className="row" id="div1">
        <p  className="col-4">
        <img src={img7} alt="" height={200} width={200} />
        <p id="para">
        RS.80,000/-
        <br></br>
        Yamaha FZ25
        <br/>
        <Router>
        <Link to="/fz25" className="link">To know More</Link>
        <Route exact path="/fz25" component={bike7Desc}/>
        </Router>
        </p>
        </p>

        <p className="col-4">
        <img src={img8} alt="" height={200} width={200} />
        <p id="para">
        RS.69,000/-
        <br></br>
        TVS Jupiter
        <br/>
        <Router>
        <Link to="/TVSJupiter" className="link">To know More</Link>
        <Route exact path="/TVSJupiter" component={bike8Desc}/>
        </Router>
        </p>
        </p>
                        
        <p className="col-4">
        <img src={img9} alt="" height={200} width={200} />
        <p id="para">
        RS.65,000/-
        <br></br>
        Honda Dio
        <br/>
        <Router>
        <Link to="/hondaDio" className="link">To know More</Link>
        <Route exact path="/hondaDio" component={bike9Desc}/>
        </Router>
        </p>
        </p>

        </div>
        </div>

        <br/>

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

const bike4Desc = () => {
    return ( 
        <div>
            <p>Engine TypeSI, 4- stroke, Air- CooledNo. of Cylinders1Max Power15.53 PS @ 8400 rpmMax Torque13.9 Nm @ 7000 rpmFront BrakeDiscRear BrakeDiscFuel Capacity12 LBody TypeSports Naked Bikes
            </p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const bike5Desc = () => {
    return ( 
        <div>
            <p>Suzuki Access 125 is powered by 124 cc engine. This Access 125 engine generates a power of 8.7 PS @ 6750 rpm and a torque of 10 Nm @ 5500 rpm. The claimed mileage of Access 125 is 57.2 2 kmpl. Suzuki Access 125 gets Drum brakes in the front and rear. The kerb weight of Access 125 is 103 Kg.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const bike6Desc = () => {
    return ( 
        <div>
            <p>Engine	98.2 cc (5.99 cu in) air-cooled, reed valve two-stroke single.Top speed	110kmph+(fully conditioned). Power	11.2hp. Torque	10.45Nm @7500rpm</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const bike7Desc = () => {
    return ( 
        <div>
            <p>Engine249 cc	197.7 cc. Max Power	20.6 bhp @ 8000 rpm	20.7 bhp @ 8500 rpm. Peak Torque 20 Nm @ 6000 rpp 18.1 Nm @ 7000 rpm. Transmission	5-Speed	5-Speed</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const bike8Desc = () => {
    return ( 
        <div>
            <p>Engine Type	Single cylinder, 4 stroke, CVTi, fuel injection. No. of Cylinders 1. Max Power	7.47 PS @ 7000 rpm. Max Torque	8.4 Nm @ 5500 rpm</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const bike9Desc = () => {
    return ( 
        <div>
            <p>Engine Displ : 109.51 cc. Brakes Front :	Drum. Max Power : 7.76 PS @ 8000 rpm. Kerb Weight :	103 Kg</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

function message(){
    alert("Thank You For Purchasing!!!")
}