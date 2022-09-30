import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, removeitem, editItem}) => {
  return(
    <div className="grocery-list">
      {
        items.map( item => {
          const {id, title} = item;
          return(
            <article key={id} className="grocery-item">
              <p className="title"> {title} </p>
              <div className="btn-container">
                <button type="submit" className="edit-btn" onClick={() => editItem(id)}> 
                  <FaEdit />
                </button>

                <button type="submit" className="delete-btn" onClick={() => {removeitem(id)}}> 
                  <FaTrash />
                </button>
              </div>
            </article>
            )
        })
      }
    </div>
    )
}

export default List
