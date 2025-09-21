import { Link } from 'react-router-dom'

const HomePage = () => {
    return (

        <div
            style={{
                textAlign: "center"        // ข้อความอยู่กึ่งกลาง
            }}
        >

            <h1>Welcome to the Bookstore</h1>
            <p>this is the home page of the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/books"> Go to Book List</Link>
        </div>
    )
}

export default HomePage;