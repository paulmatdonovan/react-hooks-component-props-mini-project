import { useState } from "react";


function AddContent() {

    const [title, setTitle] = useState("");
    const [preview, setPreview] = useState('');
    const [article, setArticle] = useState('');
    const [image, setImage] = useState(null);
    const [posts, setPosts] = useState([]);



    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
        console.log(title)
        const formData = {
            title, preview, article
        };
        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((data) => setPosts((prevData) => [...prevData, data]));
        console.log(posts)
    };

    return (

        <div className="create">
            <h3>Create your post here</h3>
            <form onSubmit={handleSubmit} className="blog-create" action="submit">
                <h4>Title</h4>
                <input onChange={(e) => setTitle(e.target.value)} className="title-box" type="text" placeholder="What's it called?" />
                <h4>Preview</h4>

                <input onChange={(e) => setPreview(e.target.value)} className="title-box" type="text" placeholder="What's it about" />
                <h4>Your Content</h4>

                <input onChange={(e) => setArticle(e.target.value)} className="article-box" type="text" placeholder="Drop your article here!" />
                <input className="submit" type="submit" />
            </form>
        </div>

    )

}

export default AddContent