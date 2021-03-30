import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'lorem ipsum...', author: 'Natalia', id: 1},
        { title: 'Welcome Home', body: 'lorem ipsum...', author: 'Briana', id: 2},
        { title: 'Dev Top Tips', body: 'lorem ipsum...', author: 'Vladimir', id: 3},
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs!' />
        </div>
    );
}

export default Home;