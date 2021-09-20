import React from 'react';
import {Header} from './Header';
import {NavBar} from './NavBar';
import {Footer} from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
export class Layout extends React.Component{
    render(){
        return <div>
            <Header/>
            <NavBar/>
            <Footer/>
        </div>
    }
}