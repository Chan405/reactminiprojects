import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(amount <= 0) {
      amount = 1;
    } 

    if( amount > 8){
      amount = 8;
    }
    setText(data.splice(0, amount));
  }
  
  return (
    <section className="section-center">
      <h3> Tired og boring lorem ipsum </h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="count">
        paragraph:

        <input 
        type="number" 
        name="count" 
        id="count" 
        value={count}
        onChange={ (e) => {setCount(e.target.value)} }/>
        </label>

        <button type="submit" className="btn"> Generate </button>
      </form>

      <article className="lorem-text">
      { text.map( (item, index) => {
        return <p key={index}> {item} </p>
      } )}
      </article>
    </section>
    )
}

export default App;
