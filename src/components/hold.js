return (

  <div className="container-fluid">
        <div className="card">
          <div className="card-block">
            <h3>Song Items:</h3>
            <h2 style={{color: this.props.color}}>
            {this.props.currentInput}
            </h2>

            <div className="card comments col-md-5">
              {this.state.comments.map( (comment) => {
                // key={this.state.comments[1]}
                return <div>
                  <p>User: {comment.userName}</p>
                  <p>Artist/Band: {comment.songArtist}</p>
                  <p>Title: {comment.songTitle}</p>
                  <p>Notes: {comment.songNotes}</p>
                </div>
              })}
            </div>
          </div>
        </div>
  </div>
)
