import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description,url,urlToImage,date,author} = this.props;
    return (
      <div>
        <div className="card">
          <img src={urlToImage ? urlToImage : "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <hr/>
            <p className="card-text"> PublishedAt : {date}
            </p>
            <p className="card-text"> author : {author}
            </p>
            <a href={url} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
