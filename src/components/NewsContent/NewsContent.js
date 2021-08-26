import React from "react";

const NewsContent = ({ newsArray }) => {
  return (
    <div className="app-content">
      <div className="download-text">
        <p>
          For the best experience use{" "}
          <span style={{ fontWeight: "bold" }}>inshorts</span> app on your
          smartphone.
        </p>
        <a
          href="https://itunes.apple.com/us/app/news-in-shorts/id892146527"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            height="80%"
            alt=""
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ marginLeft: "2rem" }}
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            height="80%"
            alt=""
          />
        </a>
      </div>
      {newsArray
        .filter((item, newsItem) => newsItem < 15)
        .map((props) => {
          const {
            author,
            title,
            publishedAt,
            description,
            urlToImage,
            url,
            source: { name },
          } = props;

          return (
            <div className="newsCard">
              <img
                className="newsImage"
                src={
                  urlToImage
                    ? urlToImage
                    : "https://www.unityhighschool.org/wp-content/uploads/2014/08/default-placeholder.png"
                }
                alt="News"
              />
              <div className="newsText">
                {" "}
                <span className="title">
                  {title}
                  <br />
                  <span className="author">
                    <a href={url} target="_blank" rel="noreferrer">
                      <b>short</b>{" "}
                    </a>
                    <span className="muted">
                      by {author ? author : "unknown"} on{" "}
                      <span className="publishedAt">{publishedAt}</span>
                    </span>
                  </span>
                  <div className="lowerNewsText">
                    <div className="description">
                      <p>{description}</p>
                    </div>
                  </div>
                </span>
                <div>
                  <span className="readmore">
                    {" "}
                    <a href={url} target="_blank" rel="noreferrer">
                      read more at{" "}
                      <span style={{ color: "black" }}>
                        {" "}
                        <b>{name}</b>{" "}
                      </span>{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default NewsContent;
