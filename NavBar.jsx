import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './Styling/NavBar.css'

export class NavBar extends React.Component{
    render()
    {
        return <div className='navBar'>
            <ul>
                <li>Books</li>
                <li>Laptops</li>
                <li>Bikes</li>
            </ul>
            <button className='btn1' type='button'>Login</button>
            <button className='btn2' type='button'>Sell</button>
        </div>
    }
}