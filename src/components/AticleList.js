import React from "react"
import Article from "./Article.js"

function ArticleList({ posts }) {
    const articles = posts.map((postOb) => {
        return (

            <Article
                key={postOb.id}
                title={postOb.title}
                date={postOb.date}
                preview={postOb.preview} />

        )
    })
    return (
        <main>{articles}</main>
    )

}
export default ArticleList