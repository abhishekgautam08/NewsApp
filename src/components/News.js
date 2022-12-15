import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { envConfigs } from "../utils/config";
// import PropTypes from "prop-types";
import Pagination from "./Pagination";
import { NEWS_API_BASE_URL } from "../utils/constants";

const News = ({ section, setProgress }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    (async () => {
      setLoading(true);
      const url = `${NEWS_API_BASE_URL}/${section}.json?api-key=${envConfigs.newsApiKey}`;
      console.log(url);
      const data = await fetch(url);
      const parsedData = await data.json();
      setResults((art) => art.concat(parsedData.results));
      setLoading(false);
    })();
  }, [section, setProgress]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = results.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <h1 className="text-center">News top Headline</h1>
      {loading && <Spinner />}

      <div className="containor">
        <div className="row">
          {currentPosts.map((element) => (
            <div className="col-md-6 col-lg-4" key={element.url}>
              <NewsItem element={element} />
            </div>
          ))}
          <Pagination
            totalPosts={results.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

// News.defaultProps = {
//   country: "in",
//   pageSize: 8,
//   category: "general",
// };

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
//   setProgress: PropTypes.func,
// };

export default News;
