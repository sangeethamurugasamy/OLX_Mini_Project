import React from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styling/NavBar.css'
import {Navbar,Nav} from 'react-bootstrap'

export class NavBar extends React.Component{
    render()
    {
        return <div className='navBar'>
            <div className="categories">
            <Navbar bg="light" expand="lg">
            <Nav>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to="/Books">Books</Nav.Link>
                <Nav.Link as={Link} to="/Laptops">Laptops</Nav.Link>
                <Nav.Link as={Link} to="/Bikes">Bikes</Nav.Link>
            </Nav>
            </Navbar>
            </div>

            <Switch>
                <Route exact path='/' component={HomeComp}/>
                <Route path="/Books" component={BooksComp}/>
                <Route path="/Laptops" component={LaptopsComp}/>
                <Route path="/Bikes" component={BikesComp}/>
            </Switch>
        </div>
    }
}
function HomeComp(){
    return <h1> Welcome to our Website</h1>
}
function BooksComp(){
    return <h1>This is a Books Component</h1>
}
function LaptopsComp(){
    return <h1>This ia a Laptops Component</h1>
}
function BikesComp(){
    return <h1>This ia a Bikes Component</h1>
}