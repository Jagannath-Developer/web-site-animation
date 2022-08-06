import React from 'react'
import './CardComponent.css';

function CardComponent(props) {
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={props.urlToImage} className="card-img-top" alt="news" height="200px" />
            <div className="card-body">
                <h5 className="card-title" height="150px">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#profile" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default CardComponent