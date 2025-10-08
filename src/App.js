
import { useState } from 'react';
import initialTodos from './todos.js'
import { NavLink, Outlet } from 'react-router-dom';

export default function App() 
{
  const [todos, setTodos] = useState(initialTodos);
  const [showMenu, setShowMenu] = useState(false);  
  const newTodos = [...todos];
    
  const setDone = key => {
    const deed = todos.find( current => current.key === key );
    if( deed )
      deed.done = true;
    setTodos( newTodos );
  }

  const add = deed => {
    setTodos([...todos, deed]);
  };

  const del = key => {
    const newTodos = todos.filter(current=> current.key !== key)
    setTodos( newTodos );
  }
  
  const handleBurgerClick = evt => {
    evt.preventDefault();
    setShowMenu(!showMenu);
  };

  return (
    <div className='container'>
        <nav className='navbar is-light'>
          <div className='navbar-brand'>
            <NavLink to="/" className={({isActive}) => 'navbar-item is-uppercase' + ( isActive ? ' is-active' : '')}>
            Todos
            </NavLink>
            <a href='/' 
              className={showMenu ? 'navbar-burger is-active' : 'navbar-burger'} 
              onClick={handleBurgerClick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
          </div>
          <div className={ showMenu ? 'navbar-menu is-active' : 'navbar-menu'}
               onClick={handleBurgerClick}
          >
            <div className='navbar-start'>
              <NavLink to='add' className={({isActive}) => 'navbar-item' + ( isActive ? ' is-active' : '')}>
                Создать дело
              </NavLink>
            </div>
          </div>
        </nav>
        <main className='content px-6 py-6'>
          <Outlet />
        </main>
    </div>
  );
}
