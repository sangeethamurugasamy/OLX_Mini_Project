import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styling/Footer.css'

export class Footer extends React.Component{
    render(){
        return <footer className='footer'>
            Copyright &copy;2021<strong>
                OLX Ltd;
            </strong>
        </footer>
    }
}