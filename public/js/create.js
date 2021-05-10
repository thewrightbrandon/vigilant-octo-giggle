class Create extends React.Component {

  render = () => {
    return (

      <div>

        <h2>ADD MOVIE</h2>

        <form className="createMovie" onSubmit={this.props.handleSubmit}>

          <div className="row">
            <div className="col-4">
              <label className="form-label" htmlFor="title">Title</label>
              <input className="form-control" type="text" id="title"
              onChange={this.props.handleChange} value={this.props.title} />
            </div>
            <div className="col-4">
              <label className="form-label" htmlFor="year">Year</label>
              <input className="form-control" type="text" id="year"
              onChange={this.props.handleChange} value={this.props.year} />
            </div>
            <div className="col-4">
              <label className="form-label" htmlFor="genre">Genre</label>
              <input className="form-control" type="text" id="genre"
              onChange={this.props.handleChange} value={this.props.genre} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="image">Image</label>
              <input className="form-control" type="text" id="image"
              onChange={this.props.handleChange} value={this.props.image} />
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
