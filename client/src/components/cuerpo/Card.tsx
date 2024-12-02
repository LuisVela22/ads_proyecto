import React from "react";

interface CardProps {
    cardTitle: string;
    children: string
    src: string
}

const Card: React.FC<CardProps> = ({ cardTitle, children, src}) => {
    return (
        <div className="card col-md-6 col-lg-4" style={{ width: "18rem" }}>
            <img src={src} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{children}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;
