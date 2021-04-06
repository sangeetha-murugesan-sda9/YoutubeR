import { Link } from "react-router-dom";

export default function Card({ information }) {
  const videoObject = require(`../asserts/images/${information.thumb}`);
  const channelObject = require(`../asserts/images/channels/${information.channelThumb}`);
  const videoURL = videoObject.default;
  const channelURL = channelObject.default;

  return (
    <article className="card">
      <Link to={`video/${information.videoId}`}>
        <img className="preview" src={videoURL} alt={information.description} />
      </Link>

      <div className="meta-data">
        <div className="left">
          <img
            className="channel-thumb"
            src={channelURL}
            alt="Channel thumbnail"
          />
        </div>
        <div className="right">
          <h3 className="title">{information.title}</h3>
          <p className="description">{information.channelName}</p>
          <p className="description">{information.views} views</p>
        </div>
      </div>
    </article>
  );
}
