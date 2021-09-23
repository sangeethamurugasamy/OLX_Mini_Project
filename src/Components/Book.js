import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styling/style.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import book1Desc from './book1Desc';
// import book2Desc from './book2Desc';
// import book3Desc from './book3Desc';
import img1 from './Images/book_image1.jfif';
import img2 from './Images/book_image2.jfif';
import img3 from './Images/book_image3.jfif';
import img4 from './Images/book_image4.jfif';
import img5 from './Images/book_image5.jfif';
import img6 from './Images/book_image6.jfif';
import img7 from './Images/book_image7.jfif';
import img8 from './Images/book_image8.jfif';
import img9 from './Images/book_image9.jfif';


export class Book extends React.Component{
    render(){
        return <div>
        <div className="container">
        <h3 id="hone">Books</h3>

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
            <img src={img3} alt="" height={200} width={200} />
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
        </div>
        </div>

        <br/>

        <div className="container">

        <div className="row" id="div1">
           
            <p className="col-4">
            <img src={img4} alt="" height={200} width={200} />
            <p id="para">
            RS.600/-
            <br></br>
            The Invention of Clouds 
            <br/>
            <Router>
            <Link to="/InventionOfClouds" className="link">To know More</Link>
            <Route path="/InventionOfClouds" component={book4Desc}/>
            </Router>
            </p>
            </p>

            <p className="col-4">
            <img src={img5} alt="" height={200} width={200} />
            <p id="para">
            RS.399/-
            <br></br>
            Ace Of Shades
            <br/>
            <Router>
            <Link to="/AceOfShades" className="link">To know More</Link>
            <Route path="/AceOfShades" component={book5Desc}/>
            </Router> 
            </p>
            </p>
                        
            <p className="col-4">
            <img src={img6} alt="" height={200} width={200} />
            <p id="para">
            RS.249/-
            <br></br>
            The Lord Of The Lost
            <br/>
            <Router>
            <Link to="/TheLordOfTheLost" className="link">To know More</Link>
            <Route path="/TheLordOfTheLost" component={book6Desc}/>
            </Router> 
            </p>
            </p>
        </div>
        </div>

        <br/>

        <div className="container">

        <div className="row" id="div1">
           
            <p className="col-4">
            <img src={img7} alt="" height={200} width={200} />
            <p id="para">
            RS.200/-
            <br></br>
            The White Tiger 
            <br/>
            <Router>
            <Link to="/TheWhiteTiger" className="link">To know More</Link>
            <Route path="/TheWhiteTiger" component={book7Desc}/>
            </Router>
            </p>
            </p>

            <p className="col-4">
            <img src={img8} alt="" height={200} width={200} />
            <p id="para">
            RS.179/-
            <br></br>
            The DHONI Touch
            <br/>
            <Router>
            <Link to="/TheDhoniTouch" className="link">To know More</Link>
            <Route path="/TheDhoniTouch" component={book8Desc}/>
            </Router> 
            </p>
            </p>
                        
            <p className="col-4">
            <img src={img9} alt="" height={200} width={200} />
            <p id="para">
            RS.150/-
            <br></br>
            Harry Potter
            <br/>
            <Router>
            <Link to="/HarryPotter" className="link">To know More</Link>
            <Route path="/HarryPotter" component={book9Desc}/>
            </Router> 
            </p>
            </p>
        </div>
        </div>

        <br/>

        </div>
    }
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

const book4Desc = () => {
    return ( 
        <div>
            <p>The Invention of Clouds tells the extraordinary story of an amateur meteorologist, Luke Howard, and his groundbreaking work to define what had hitherto been random and unknowable structures—clouds. ... He named the clouds, classifying them in terms that remain familiar to this day: cirrus, stratus, cumulus, and nimbus.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const book5Desc = () => {
    return ( <div>
        <p>Ace of Shades is the story of Enne, a young nobody who goes in search of her adoptive mother in the City of Sin. Her only lead is Levi Glaisyer, a young street lord she believes can lead her to her mother. Levi is a man in a bind.</p> 
        <button id = "button" onClick={message}>Add To Cart</button>   
    </div>
    );
}

const book6Desc = () => {
    return (
        <div>
            <p>Lord of the Lost is a German gothic metal band from Hamburg. The band was formed by singer and frontman Chris Harms.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>  
        </div>
      );
}

const book7Desc = () => {
    return ( 
        <div>
            <p>The Secret of His Success. Balram Halwai, the narrator of Aravind Adiga's first novel, “The White Tiger,” is a modern Indian hero. In a country inebriated by its newfound economic prowess, he is a successful entrepreneur, a self-made man who has risen on the back of India's much-vaunted technology industry.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const book8Desc = () => {
    return ( <div>
        <p>Funny, candid, and peppered with delicious anecdotes, The Dhoni Touch reveals an ordinary man living an extraordinary life. For over a decade, Mahendra Singh Dhoni has captivated the world of cricket and over a billion Indians with his incredible ingenuity as captain, wicketkeeper and batsman.</p> 
        <button id = "button" onClick={message}>Add To Cart</button>   
    </div>
    );
}

const book9Desc = () => {
    return (
        <div>
            <p>The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>  
        </div>
      );
}

function message(){
    alert("Thank You For Purchasing!!!")
}