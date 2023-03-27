import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    let handleReadMore = () => {
        setReadMore(!readMore);
    }
  
    return (
        <article key={id} className="single-tour">
            <img className='.img' src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h5>{name}</h5>
                    <h5 className="tour-price">$ {price}</h5>
                    <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
                    <button className="info-btn" onClick={handleReadMore}>{readMore ? "Show Less" : "Read More" }</button>

                </div>
                    <button className="btn delete-btn btn-block" onClick={()=>removeTour(id)}>not interested</button>
            </footer>

        </article>
    )
}

export default Tour
