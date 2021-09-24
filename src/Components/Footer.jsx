import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styling/Footer.css'

export class Footer extends React.Component{
    render(){
        return <footer className='footer'>
            <div className="preFinal">
                <h5>For Queries Contact:</h5>
                <p>missingenigma@gmail.com</p>
                <h5>Customer Support:</h5>
                <p>1804-2345-2345</p>
                <h5>https://missingenigma.com</h5>
            </div>
            <div className="finalTag">
                Copyright &copy;2021<strong>
                    MissingEnigma.com Ltd;
                </strong>
            </div>
        </footer>
    }
}