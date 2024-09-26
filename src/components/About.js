import React from "react";

function About({ about, image = "https://via.placeholder.com/215" }) {
    return (
        <div className="about">
            <h4>About This Blog</h4>
            <p>
                Welcome to a space where words matter, stories come to life, and writers find their voice.</p>


            <p>This blog was created with writers in mind—whether you're just starting your journey or you're deep into your writing practice. We understand the unique joys and challenges that come with writing, and our goal is to offer support, inspiration, and practical advice to help you on your creative path.
                <hr />


                <br></br>
                <h4>Why This Blog?</h4>
                As a high school teacher who values storytelling and the craft of writing, I started this blog to create a supportive environment for writers. It’s a place where we can explore the art of writing together, learn from each other, and most importantly, grow as writers.

                Thank you for being here, and I hope this blog becomes a source of inspiration and knowledge for your writing journey.

                Here’s to your next great story.</p>
        </div>
    )
}

export default About