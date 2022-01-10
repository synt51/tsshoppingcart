import {Link} from "react-router-dom";
import '../App.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUserFriends} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {

    return (
        <div className={"navBar"}>
            <div className={"navBarIcons"}>
                <Link to={"/"}>
                    <button className={"house"} value={"Home"}>
                        <FontAwesomeIcon icon={faHome}/>
                        <p>Home</p>
                    </button>
                </Link>
                <Link to={"/lists"}>
                    <button className={"house"} value={"ListPage"}>
                    <FontAwesomeIcon icon={faUserFriends}/>
                    <p>Lists</p>
                </button>
                </Link>
            </div>
        </div>
    )
}