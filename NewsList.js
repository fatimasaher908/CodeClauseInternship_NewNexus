import React from "react";
import NewsCard from "./NewsCard";

function NewsList({articles}){
    return(
         <div id="news-list">
            {articles.map((article, idx) => (
                <NewsCard key = {idx} article={article} />
            ))}
         </div>
    );
}    

export default NewsList;