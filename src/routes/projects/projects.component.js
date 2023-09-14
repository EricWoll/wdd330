import React from "react";
import { useEffect, useState } from "react";

import SearchBox from "../../components/searchBox/searchBox.component";
import ProjectCards from "../../components/projectCards/projectCards.component";

import "./projectsStylesFolder/projects.styles.small.css";

import data from "../../assets/data.json";

function Projects() {

    const [searchField, setSearchField] = useState("");

    const [projectCards, setProjectCards] = useState([]);
    const [filteredProjectCards, setFilteredProjectCards] = useState([]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
    
        setSearchField(searchFieldString);
    }

    useEffect(() => {
        setProjectCards(data);
    }, []);

    useEffect(() => {
        const newFilteredCards = projectCards.filter((projectCard) => {
          return projectCard.title.toLowerCase().startsWith(searchField);
        });
    
        setFilteredProjectCards(newFilteredCards);
      }, [projectCards, searchField]);

    return (
        <main className="projects-page">
            <div className="projects-page-header">
                <h2 className="projects-page-title">Projects</h2>
                <SearchBox onChangeHandler={ onSearchChange } placeHolder="Search Projects"/>
            </div>
            <ProjectCards cardList={filteredProjectCards}/>
        </main>
    )
}

export default Projects;