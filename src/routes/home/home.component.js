import React from "react";
import { useEffect, useState } from "react";

import ProjectCards from "../../components/projectCards/projectCards.component";

import "./homeStylesFolder/home.styles.small.css";

import data from "../../assets/data.json";

function Home() {

    const DAYS_PROJECT_IS_SHOWN = 14

    const [projectCards, setProjectCards] = useState([]);
    const [filteredProjectCards, setFilteredProjectCards] = useState([]);

    useEffect(() => {
        setProjectCards(data);
    }, []);

    useEffect(() => {
        const curDate = new Date().getTime();
        const newFilteredCards = projectCards.filter((card)=> {
            let cardDate = new Date(card.date_created).getTime();
            let dateDifference = (curDate - cardDate) / (1000 * 3600 * 24)
            return (dateDifference <= DAYS_PROJECT_IS_SHOWN);
        });
        
    
        setFilteredProjectCards(newFilteredCards);
      }, [projectCards]);

    return (
        <main className="home-page">
            <h2 className="home-page-title">Home</h2>
            <ProjectCards cardList={filteredProjectCards}/>
        </main>
    )
}

export default Home;