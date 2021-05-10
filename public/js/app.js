// console.log('movies')

class App extends React.Component {

  state = {
    name: '',
    image: '',
    year: '',
    genre: '',
    movies: [],
  }

  handleChange = (event) => {

  }

  handleSubmit = (event) => {

  }

  updateMovie = (event) => {

  }

  deleteMovie = (event) => {

  }

  componentDidMount = () => {

  }

  render = () => {
    return (
      <div>
        <h2>Add Movie</h2>
        <form>
          <div className="row">
            <div className="col-4">
              <label className="form-label" htmlFor="title">Title</label>
              <input className="form-control" type="text" id="title"
              onChange=""/>
            </div>
          <div>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
