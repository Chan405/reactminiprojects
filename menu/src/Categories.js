import React from 'react';

const Categories= ({categories, filteritems}) => {
  return (
    <div className="btn-container">
      {
        categories.map( (category, idx) => {
          return(
            <button key={idx} 
                    type="button" 
                    className="filter-btn" 
                    onClick={()=> filteritems(category)}>
              {category}
            </button>
            )
        })
      }
    </div>
    );
};

export default Categories;
