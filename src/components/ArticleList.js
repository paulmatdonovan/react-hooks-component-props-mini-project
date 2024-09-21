import React from "react"
import { useParams } from "react-router-dom"

function ArticleList({ posts }) {

    let { id } = useParams();
    const article = posts.find((article) => String(article.id) === id);

    if (!article) {
        return <p>Article not found</p>
    }

    return (
        <>
            <section key={id} className="article-detail">
                {/* <img src={article.image} alt={article.preview}></img> */}
                <div>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                </div>
            </section>
        </>
    )

}
export default ArticleList