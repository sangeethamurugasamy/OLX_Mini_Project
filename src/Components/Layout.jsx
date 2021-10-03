import React from 'react';
import Header from './Header';
import {NavBar} from './NavBar';
import {Footer} from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatbot from './Chatbot';
import Banner from './Banner';
export class Layout extends React.Component{
    render(){
        return <div>
            <Header/>
            <Chatbot/>
            {/* <Banner/> */}
            <NavBar/>
            <Footer/>
        </div>
    }
}