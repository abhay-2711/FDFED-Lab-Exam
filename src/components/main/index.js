import React from "react";
import "./main.css";

import ExploreSection from "../common/exploreSection";
import { restaurants } from "../../data/hotel";

const restaurantList = restaurants;

const Main = () => {
    return (
    <div>
        <div className="max-width">
        </div>
      
        <ExploreSection list={restaurantList} collectionName="Hotels in Bangalore" />
    </div>
    );
}

export default Main;