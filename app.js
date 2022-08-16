function App() {
    const movies = [ { id: 1, title: 'Thor: War and Love' }, { id: 2, title: 'Minion'} ]; 
    const news = 'News hari ini';

    return (
        <div>
            <Greeting />
            { movies.map(movie => (
                <Movie key={movie.id} title={movie.title} berita={news} cover='https'/>
            ))}
        </div>
    )
}

function Movie(props) {
    // console.log(props); // type data props adalah object: {title: 'Thor: War and Love'}
    const { title, berita  } = props;

    return (
        <div>
            <h1>Movie: {title}</h1>
            <p>{berita}</p>
            <h3>I was created from Function Component</h3>
        </div>
    )
}

class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h3>I was created from Class Component</h3>
                <Movie title="saya bukan dari loop" berita="Terkuaknya misteri pembunuhan Bridgen J"/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));