import { useState } from "react";

import Movie from "./components/Movie";

function App() {
  // const movies = useState([{ id: 1, title: 'Pengabdi Setan 2'}]);
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const save = () => {
    setMovies((currentState) => {
      //currentState.push({ id: 2, title: title }) // ngga bisa
      // return currentState.filter()
      return [
        ...currentState,
        {
          id: currentState.length + 1,
          title: title,
          author: author,
          url: url,
        },
      ];
    });
  };

  const edit = (id) => {
    setMovies((currentState) => {
      return currentState.map((state) => {
        if (state.id === id) {
          state.title = title;
          state.author = author;
          state.url = url;
          // hanya mengubah value dari key title
        }
        return state; // tetap return object
      });
    });
  };

  return (
    <div className="tepi">
      <h1 className="font">Alfan Bookstore</h1>
      <br />
      <br />
      <div className="form-outline mb-4">
        <input
          type="text"
          id="form5Example1"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="form-label font" for="form5Example1">
          <u>Masukan Judul Buku</u>
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          id="form5Example2"
          className="form-control"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label className="form-label font" for="form5Example2">
          <u>Masukan Author</u>
        </label>
      </div>
      <div className="form-outline mb-4">
        <input
          type="url"
          id="form5Example2"
          className="form-control"
          onChange={(e) => setUrl(e.target.value)}
        />
        <label className="form-label font" for="form5Example2">
          <u>Masukan Link Gambar</u>
        </label>
      </div>
      <button
        type="submit"
        onClick={save}
        className="btn btn-warning btn-block mb-4"
      >
        Pilih
      </button>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          author={movie.author}
          url={movie.url}
        />
      ))}
    </div>
  );
}
export default App;
