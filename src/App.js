
import todos from './todos.js'
import TodoList from './TodoList.js'

export default function App() 
{
  const setDone = key => {
    const deed = todos.find( current => current.key === key );
    if( deed )
      deed.done = true;
  }

  return (
    <div className='container'>
        <nav className='navbar is-light'>
          <div className='navbar-brand'>
            <span className='navbar-item is-uppercase py-6'>
              Todos
            </span>
          </div>
        </nav>
        <main className='content px-6 py-6'>
          <TodoList list={todos} setDone={setDone} />
        </main>
    </div>
  );
}
