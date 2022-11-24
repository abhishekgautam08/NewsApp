import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { envConfigs } from "../utils/config";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country, category, pageSize, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    (async () => {
      page === 1 && setProgress(10);
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${envConfigs.newsApiKey}&page=${page}&pageSize=${pageSize}`;

      const data = await fetch(url);
      const parsedData = await data.json();

      setArticles((art) => art.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      page === 1 && setProgress(100);
    })();
  }, [page, country, category, pageSize, setProgress]);

  return (
    <>
      <h1 className="text-center">News top Headline</h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={() => setPage((currentPage) => currentPage + 1)}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="containor">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-6 col-lg-4" key={element.url}>
                <NewsItem
                  title={element.title ?? ""}
                  description={element.description ?? ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
};

export default News;
