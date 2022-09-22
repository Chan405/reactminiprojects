import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const menu_categories =  new Set(items.map((item) => item.category));
  const allcategories = ['all', ...menu_categories];
  //console.log(allcategories);

  const [menuitems, setMenuitems] = useState(items);
  const [categories, setCategories] = useState(allcategories);

  const filteritems = (category) => {
    if(category === 'all'){
      setMenuitems(items);
      return;
    }
    const newItems = items.filter( (item) => item.category===category);
    setMenuitems(newItems);
  }

  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Our Menu </h2>
          <div className="underline"> </div>
        </div>

        <Categories categories={categories} filteritems = {filteritems}/>
        <Menu items={menuitems}/>
      </section>
    </main>
    );
}

export default App;
