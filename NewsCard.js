import React from "react";
import './Style.css';

function NewsCard({article}){
    return(
        <div id="card">
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          )}
          <div id="card-content">
            <h3>{article.title}</h3>
            <p>{article.description || 'No description available.'}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more →
            </a>
          </div>
        </div>
    );
}

export default NewsCard;