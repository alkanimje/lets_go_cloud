import React from "react";

import Header from './Header';
import Footer from './Footer';
//import ReactDOM from 'react-dom';
import Checkbox from 'rc-checkbox';
//import 'rc-checkbox/assets/index.css';

 

export default function main(){
 //   render() {
    return (
    <div>
        <Header/>
        <Checkbox value="S3"> S3 Bucket</Checkbox>
        <Footer/>
    </div>
    );

 
    
}