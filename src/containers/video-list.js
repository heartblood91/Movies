import React from "react";
import VideoListItem from "../components/video-list-item";

const VideoList = (props) => {
  const { movieList } = props;
  return (
    <div>
      <h3 className="title_list_item_title">Vous aimerez aussi ...</h3>
      <ul className="list-group">
        {movieList.map((movie) => {
          return (
            <VideoListItem
              key={movie.id}
              movie={movie}
              callback={receiveCallBack}
            />
          );
        })}
      </ul>
    </div>
  );

  function receiveCallBack(movie) {
    props.callback(movie);
  }
};

export default VideoList;
