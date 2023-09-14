import React from "react";

import Card from "./projectCard/projectCard.component";

function ProjectCards( { cardList } ) {
    return (
        <div className="project-card-container"> {
            cardList.map( (card) => {
                return (<Card key={card.id} card={card}/> )
            })}
        </div>
    );
}

export default ProjectCards;