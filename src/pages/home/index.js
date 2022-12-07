import React, { useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import Main from "../../components/main";

function HomePage(){

    const [activeTab,setActiveTab] = useState("Delivery");

    const getCorrectScreen = (tab) => {
        switch(tab){
            case "Main":
                return <Main />
           
            default:
                return <Main />   
        }
    }

    return (
        <div>
            <Header />
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    );
}

export default HomePage;