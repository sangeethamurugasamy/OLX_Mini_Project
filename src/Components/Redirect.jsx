import React from "react";
import {Link} from 'react-router-dom';
import { Register } from "./Register";

export function Redirect(){
   return  <Link to={`/Login/${Register}`}>Register</Link>
}