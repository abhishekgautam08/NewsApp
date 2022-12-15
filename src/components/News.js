import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { envConfigs } from "../utils/config";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
import { NEWS_API_BASE_URL } from "../utils/constants";

const News = ({ country, category, pageSize, setProgress }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
  // const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    (async () => {
      // page === 1 && setProgress(10);
      setLoading(true);
      // const url = `${NEWS_API_BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${envConfigs.newsApiKey}&page=${page}&pageSize=${pageSize}`;
      // const url =    `${NEWS_API_BASE_URL}/news?access_key=${ envConfigs.newsApiKey}&languages=en&categories=${category}&offset=${(page - 1) * pageSize   }&limit=${pageSize}`;
      const url = `${NEWS_API_BASE_URL}/arts.json?api-key=${envConfigs.newsApiKey}`;

      const data = await fetch(url);
      const parsedData = await data.json();

      console.log(parsedData);

      // if (parsedData.error) {
      //   return;
      // }

      setResults((art) => art.concat(parsedData.results));
      // setTotalResults(parsedData.pagination.total);
      setLoading(false);
      // page === 1 && setProgress(100);
    })();
  }, [
    // page,
    country,
    category,
    pageSize,
    setProgress,
  ]);

  return (
    <>
      <h1 className="text-center">News top Headline</h1>
      {loading && <Spinner />}

      {/* <InfiniteScroll
        dataLength={results.length}
        next={() => setPage((currentPage) => currentPage + 1)}
        hasMore={results.length !== totalResults}
        loader={<Spinner />}
      > */}
      <div className="containor">
        <div className="row">
          {results.map((element) => (
            <div className="col-md-6 col-lg-4" key={element.url}>
              <NewsItem
                // imageUrl={element.multimedia[0].url}
                title={element.title ?? ""}
                description={element.abstract ?? ""}
                author={element.byline}
                newsUrl={element.url}
                date={element.updated_date}
              />
            </div>
          ))}
        </div>
      </div>
      {/* </InfiniteScroll> */}
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
