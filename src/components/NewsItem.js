import React from "react";
import NoImage from "../image/no image.jpg";
import "./NewsItem.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div
        className="card"
        style={{
          margin: 3,

          maxWidth: 500,
          maxHeight: 600,
        }}
      >
        <img
          src={imageUrl ? imageUrl : NoImage}
          alt=""
          style={{
            width: "450px",
            height: "300px",
            objectFit: "contain",
          }}
        />

        <div className="card-body">
          <h5 className="card-title">
            <ReactReadMoreReadLess
              charLimit={30}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {title}
            </ReactReadMoreReadLess>
            <br />
            <br />
            <span className="badge bg-secondary">{source}</span>
          </h5>
          <p className="card-text">
            <ReactReadMoreReadLess
              charLimit={30}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {description}
            </ReactReadMoreReadLess>
          </p>
          <p className="card-text">
            <small className="text-muted">
              <b> By-</b> {author ? author : "Unknown"}
              <br />
              <b>Last updated- </b> {new Date(date).toLocaleString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            More Information Click Here
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
