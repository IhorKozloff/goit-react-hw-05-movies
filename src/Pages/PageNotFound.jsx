import { Link } from "react-router-dom"

export default function PageNotFound () {
    return <h3>Ooops, page not found. We recommend visiting the <Link to="/">Homepage</Link>.</h3>
};