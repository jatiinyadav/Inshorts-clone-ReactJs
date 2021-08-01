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
        <img
          src="https://assets.inshorts.com/website_assets/images/appstore.png"
          height="80%"
          alt=""
        />
        <img
          style={{ marginLeft: "2rem" }}
          src="https://assets.inshorts.com/website_assets/images/playstore.png"
          height="80%"
          alt=""
        />
      </div>
      {newsArray.map((props) => {
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
              <span className="title">{title}</span>
              <span className="author">
                <a href={url} target="_blank" rel="noreferrer">
                  <b>short</b>{" "}
                </a>
                <span className="muted">
                  by {author ? author : "unknown"} on{" "}
                  <span className="publishedAt">{publishedAt}</span>
                </span>
              </span>
              <div>
                <div className="lowerNewsText">
                  <div className="description">
                    <p>{description}</p>
                    <span className="readmore">
                      {" "}
                      <a href={url} target="_blank" rel="noreferrer">
                        <b>read more at {name} </b>{" "}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsContent;
