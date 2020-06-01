import React, { Component } from "react";
import SearchBar from "../components/search-bar";
import VideoList from "./video-list";
import VideoDetail from "../components/video-details";
import Video from "../components/video";
import axios from "axios";
import { API_KEY } from "../credentials";

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL =
  "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movieList: {}, currentMovie: {} };
    this.initMovies();
  }
  initMovies() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(
      function (response) {
        this.setState(
          {
            movieList: response.data.results.slice(1, 6),
            currentMovie: response.data.results[0],
          },
          function () {
            this.applyVideoToCurrentMovie();
          }
        );
      }.bind(this)
    );
  }
  applyVideoToCurrentMovie() {
    axios
      .get(
        `${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`
      )
      .then(
        function (response) {
          if (
            response.data.videos.results[0] &&
            response.data.videos.results[0].key
          ) {
            const youtubekey = response.data.videos.results[0].key;

            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = youtubekey;

            this.setState({ currentMovie: newCurrentMovieState });
          }
        }.bind(this)
      );
  }
  onClickListItem(movie) {
    this.setState({ currentMovie: movie }, function () {
      this.applyVideoToCurrentMovie();
      this.setRecommendation();
    });
  }
  setRecommendation() {
    axios
      .get(
        `${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`
      )
      .then(
        function (response) {
          this.setState({
            movieList: response.data.results.slice(0, 5),
          });
        }.bind(this)
      );
  }

  onClickSearch(searchText) {
    if (searchText) {
      axios
        .get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`)
        .then(
          function (response) {
            if (response.data && response.data.results[0]) {
              if (response.data.results[0].id != this.state.currentMovie.id) {
                this.setState(
                  { currentMovie: response.data.results[0] },
                  () => {
                    this.applyVideoToCurrentMovie();
                    this.setRecommendation();
                  }
                );
              }
            }
          }.bind(this)
        );
    }
  }

  render() {
    const renderVideoList = () => {
      if (this.state.movieList.length >= 5) {
        return (
          <VideoList
            movieList={this.state.movieList}
            callback={this.onClickListItem.bind(this)}
          />
        );
      }
    };
    return (
      <div>
        <div className="search_bar">
          <SearchBar callback={this.onClickSearch.bind(this)} />
        </div>

        <div className="Row">
          <div className="col-md-8">
            <Video videoId={this.state.currentMovie.videoId} />
            <VideoDetail
              title={this.state.currentMovie.title}
              description={this.state.currentMovie.overview}
            />
          </div>
          <div className="col-md-4">{renderVideoList()}</div>
        </div>
      </div>
    );
  }
}

export default App;
