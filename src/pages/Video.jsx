import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import VideoDescription from "../components/VideoDescription";
import Information from "../data/information.json";

export default function Video({ match }) {
  const routerID = match.params.id;
  const video = Information.find((item) => item.videoId === routerID);

  return (
    <div id="video" className="container">
      <div className="video-container">
        <YouTube videoId={video.videoId} />
      </div>

      <div className="body-container">
        <h1 className="title">{video.title}</h1>
        <p className="description">
          {video.views} views • {video.uploadDate}
        </p>

        <hr />

        <VideoDescription information={video} />

        <hr />

        <Link className="button" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
