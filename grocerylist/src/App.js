import React, { useState, useEffect } from 'react'
import List from './List';
import Alert from './Alert';

const getlocalstorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getlocalstorage());
  const [isEditing, setIsediting] = useState(false);
  const [editId, setEditid ] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      // alert
      showAlert(true, 'Please enter a value', 'danger');
    } else if( name && isEditing) {
      setList(
        list.map( item => {
          if(item.id === editId) {
            return {...item, title: name}
          }
          return item;
        })
        );

      setName('');
      setEditid(null);
      setIsediting(false);
      showAlert(true, 'item edited', 'success');
    } else {

      showAlert(true, 'Item added', 'success');
      const newItem = { id: new Date().getTime().toString() ,
                        title: name};

      setList([...list, newItem]);
      setName("");
    }
  }


  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type});
  }

  const clearList = () => {
    showAlert(true, 'All items clear', 'danger');
    setList([]);
  }

  const removeitem = (id) => {
    showAlert(true, 'Item removed', 'danger');
    setList(list.filter( item => item.id != id));
  }

  const editItem = (id) => {
    const specificitem = list.find( item=> item.id === id);
    setIsediting(true);
    setEditid(id);
    setName(specificitem.title);
  }

  useEffect( () => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])
  return(
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removealert={showAlert} list={list} />}
        <h3> Grocery bud </h3>

        <div className="form-control">
          <input 
                type="text" 
                className="grocery" 
                value={name} 
                onChange={(e) => {setName(e.target.value)}}/>
          <button type="submit" className="submit-btn">
            { isEditing? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      { list.length > 0 &&
        <div className="grocery-container">
          <List items={list} removeitem={removeitem} editItem={editItem}/>
          <button className="clear-btn" onClick={clearList}> Clear items </button>
        </div>
      }
    </section>
    )
}

export default App
