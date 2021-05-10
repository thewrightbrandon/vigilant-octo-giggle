class Delete extends React.Component {
  render = () => {
    return (
      <div>

        <br/>
        <button className="btn btn-danger" onClick={this.props.deleteMovie} value={this.props.id}>
          Remove Movie
        </button>

      </div>
    )
  }
}
