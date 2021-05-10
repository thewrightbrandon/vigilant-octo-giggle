// console.log('movies')

class App extends React.Component {



  state = {
    title: '',
    image: '',
    year: '',
    genre: '',
    movies: [],
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/movies', this.state).then((response) => {
      console.log(response)
      this.setState({
        movies: response.data,
        title: '',
        image: '',
        year: '',
        genre: '',
      })
    })
  }

  updateMovie = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios.put('/movies/' + id, this.state).then((response) => {
      this.setState({
        movies: response.data,
        title: '',
        image: '',
        year: '',
        genre: '',
      })
    })
  }

  deleteMovie = (event) => {
    axios.delete('/movies/' + event.target.value).then((response) => {
      this.setState({
        movies: response.data
      })
    })
  }

  componentDidMount = () => {
    axios.get('/movies').then((response) => {
      this.setState({
        movies: response.data
      })
    })
  }



  render = () => {
    return (
      <div>

        <Create
        title={this.state.title}
        year={this.state.year}
        genre={this.state.genre}
        image={this.state.image}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        ></Create>

        <br/>
        <h2>LIST OF MOVIES</h2>

        <ul>
          {this.state.movies.map((movie) => {
            return (

              <li key={movie._id}>
                <h3>{movie.title}</h3>
                <h4>{movie.year}</h4>
                <h4>{movie.genre}</h4>
                <img src={movie.image} alt={movie.title} />

                <Edit
                id={movie._id}
                updateMovie={this.updateMovie}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                ></Edit>

                <Delete
                id={movie._id}
                deleteMovie={this.deleteMovie}
                ></Delete>

              </li>
            )
          })}
        </ul>

      </div>
    )
  }
}


ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
