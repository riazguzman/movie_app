import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = { isloading: true, movies: [] };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?quality=3D");
    

    
    this.setState({ movies, isloading: false });
  }
  render() {
    const { isloading, movies } = this.state;
    console.log(this);
    return (
      <section className="container">
        {isloading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  genres={movie.genres}
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
