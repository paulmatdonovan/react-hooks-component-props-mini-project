import React from 'react'
import { Link } from 'react-router-dom'

const SeparateArticle = (props) => {
    return (
        <div>
            <Link to={`/article/${props.id}`}> <h2>{props.title} </h2>
            </Link>
            <p></p>
        </div>
    )
}

export default SeparateArticle