import React from 'react';
import './App.css';
import {Home} from "./pages";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
        </div>
    );
}