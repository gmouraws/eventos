import React, {useState} from 'react';
import './home.css'
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';

function Home(){
    return (
        <>
        <Navbar/>
        <h1></h1>
        </>
    )
}

export default Home;