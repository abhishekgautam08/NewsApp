import React from "react";
import NoImage from "../image/no image.jpg";
import "./NewsItem.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

const NewsItem = (props) => {
  let { element } = props;
  const imageUrl = element.multimedia ? element.multimedia[0].url : NoImage;
  return (
    <>
      <div className="container">
        <div
          className="card"
          style={{
            margin: 3,
            maxWidth: 500,
            maxHeight: 800,
          }}
        >
          <div className="container-img">
            <img className="card-img" src={imageUrl} alt="NOIMAGE" />
          </div>

          <div className="card-body">
            <h5 className="card-title">
              {element.title}

              <br />
              <br />
            </h5>
            <p className="card-text">
              <ReactReadMoreReadLess
                charLimit={40}
                readMoreText={"▼"}
                readLessText={"▲"}
                readMoreClassName="read-more-less--more"
                readLessClassName="read-more-less--less"
              >
                {element.abstract}
              </ReactReadMoreReadLess>
            </p>
            <p className="card-text">
              <small className="text-muted">
                {element.byline ? element.byline : "Unknown"}
                <br />
                <b>Last updated- </b>
                {Date(element.updated_date).toLocaleString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={element.url}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              More Information Click Here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
