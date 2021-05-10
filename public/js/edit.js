class Edit extends React.Component {
  render = () => {
    return (

      <div>

      <details>

        <summary>Edit This Movie</summary>

        <form id={this.props.id} onSubmit={this.props.updateMovie}>

          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="title">Title</label>
              <input className="form-control" type="text" id="title"
              onChange={this.props.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label" htmlFor="year">Year</label>
              <input className="form-control" type="text" id="year"
              onChange={this.props.handleChange} />
            </div>
            <div className="col-6">
              <label className="form-label" htmlFor="genre">Genre</label>
              <input className="form-control" type="text" id="genre"
              onChange={this.props.handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="image">Image</label>
              <input className="form-control" type="text" id="image"
              onChange={this.props.handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <input className="btn btn-primary" type="submit" value="Update Movie" />
            </div>
          </div>

        </form>

      </details>

      </div>
    )
  }
}
