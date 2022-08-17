import { useState } from 'react';

import Movie from './components/Movie';

function App() {
  // const movies = useState([{ id: 1, title: 'Pengabdi Setan 2'}]);
  const [ movies, setMovies ] = useState([{ id: 1, title: 'Pengabdi Setan' }]);
  const [ title, setTitle ] = useState('');

  const save = () => {
    setMovies((currentState) => {
      //currentState.push({ id: 2, title: title }) // ngga bisa
      // return currentState.filter() 
      return [ ...currentState, { id: currentState.length+1, title: title } ]
    })
  }

  const edit = (id) => {
    setMovies(currentState => {
      return currentState.map(state => {
        if (state.id === id) {
          state.title = title;// hanya mengubah value dari key title
        }
        return state; // tetap return object
      }) 
    })
  }


  return (
    <div>
      <h1>Hello Wolrd</h1>
      <input 
        type="text" 
        placeholder='title' 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={save}>Save</button>
      {
        movies.map(movie => (
          <Movie key={movie.id} title={movie.title}/>
        ))
      }
      
    </div>
  );
}



export default App;
