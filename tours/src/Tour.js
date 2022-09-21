import React, { useState } from 'react';

const Tour = ({id, name, image, info, price, removeTour}) => {
  const [readmore, setReadmore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name}/>

      <footer>
        <div className="tour-info">
          <h4> {name} </h4>
          <h4 className="tour-price"> ${price}</h4>
        </div>

        <p> 
          { readmore ? info : `${info.substring(0, 230)}...` } 
          <button onClick={ () => {setReadmore(!readmore)} } > 
            { readmore? "Show less" : "Read more"}
          </button>
        </p>

        <button 
          className="delete-btn"
          onClick={ () => removeTour(id)}
        > Not inteested </button>
      </footer>
    </article>
    );
};

export default Tour;
