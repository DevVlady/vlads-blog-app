import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'lorem ipsum...', author: 'Natalia', id: 1},
        { title: 'Welcome Home', body: 'lorem ipsum...', author: 'Briana', id: 2},
        { title: 'Dev Top Tips', body: 'lorem ipsum...', author: 'Vladimir', id: 3},
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;