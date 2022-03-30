import React, {Component} from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/header.component";

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/hats" element={<HatsPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                </Routes>
            </div>
        );
    }
}

export default App;
