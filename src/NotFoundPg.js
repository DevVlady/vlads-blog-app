import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h2>We Apologize...</h2>
            <p>The page you are looking for cannot be found!</p>
            <p>Click on the link below to be routed back to the main page</p>
            <Link to='/'>Main Page...</Link>
        </div>
    );
}

export default NotFoundPage;