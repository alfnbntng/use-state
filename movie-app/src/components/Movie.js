function Movie({ title, author, url }) {
  return (
    <div className="col">
      <div class="card-group">
        <div class="card">
          <img src={url} class="card-img-top" alt="..." />
          <div class="card-body bg-warning">
            <h5 class="card-title text-light">{title}</h5>
            <p class="card-text bg-warning text-light">
              Mariposa adalah novel fiksi ilmiah yang ditulis oleh Greg Bear
              sebagai sekuel Quantico dan prekuel Queen of Angels, menampilkan
              karakter dari kedua karya sebelumnya. Wikipedia
            </p>
            <p class="card-text text-light">
              <small class=" text-light">{author}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
