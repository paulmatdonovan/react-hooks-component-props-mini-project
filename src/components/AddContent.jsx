import { useState } from "react";


function AddContent({ setArticles }) {


    const [image, setImage] = useState(null);
    const [post, setPost] = useState({
        title: "",
        preview: "",
        article: ""
    });



    function handleSubmit(e) {
        e.preventDefault()
        console.log(post)


        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post)
        })
            .then((r) => r.json())
            .then((data) => {
                if (data) {
                    setArticles((prevData) => [...prevData, data])
                    // setPost((prevData) => [...prevData, data])

                    alert(`Successfully added ${data.title}`)
                } else {
                    alert(`Failed to upload article!`)
                }
            });
        setPost({ title: "", preview: "", article: "" });
    };

    return (

        <div className="create">
            <h3>Create your post here</h3>
            <form onSubmit={handleSubmit} className="blog-create" action="submit">
                <h4>Title</h4>
                <input value={post.title} onChange={(e) =>
                    setPost({
                        ...post,
                        [e.target.id]: e.target.value
                    })} id="title" className="title-box" type="text" placeholder="What's it called?" />
                <h4>Preview</h4>

                <input value={post.preview} onChange={(e) => setPost({
                    ...post,
                    [e.target.id]: e.target.value
                })} id="preview" className="title-box" type="text" placeholder="What's it about" />
                <h4>Your Content</h4>

                <input value={post.article} onChange={(e) => setPost({
                    ...post,
                    [e.target.id]: e.target.value
                })} id="article" className="article-box" type="text" placeholder="Drop your article here!" />
                <button className="submit" type="submit" >Submit</button >
            </form>
        </div>

    )

}

export default AddContent