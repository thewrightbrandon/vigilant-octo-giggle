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

        <h2>Add Movie</h2>

        <form onSubmit={this.handleSubmit}>

          <div className="row">
            <div className="col-4">
              <label className="form-label" htmlFor="title">Title</label>
              <input className="form-control" type="text" id="title"
              onChange={this.handleChange} value={this.state.title} />
            </div>
            <div className="col-4">
              <label className="form-label" htmlFor="year">Year</label>
              <input className="form-control" type="text" id="year"
              onChange={this.handleChange} value={this.state.year} />
            </div>
            <div className="col-4">
              <label className="form-label" htmlFor="genre">Genre</label>
              <input className="form-control" type="text" id="genre"
              onChange={this.handleChange} value={this.state.genre} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="image">Image</label>
              <input className="form-control" type="text" id="image"
              onChange={this.handleChange} value={this.state.image} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <input className="btn btn-success" type="submit" value="Add Movie" />
            </div>

          </div>

        </form>


      </div>
    )
  }
}


ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
