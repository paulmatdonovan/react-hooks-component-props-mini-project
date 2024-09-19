import React from "react";


function Article({ title, date, preview, content }) {

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{content}</p>
        </article>
    )
}


export default Article