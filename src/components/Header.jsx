import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div>
                <span>
                    <Link to="/">Home</Link>
                </span>
                /
                <span>
                    <Link to="/contador">Contador</Link>
                </span>
                /
                <span>
                    <Link to="/inputValidation">Validation</Link>
                </span>
                /
                <span>
                    <Link to="/users">Users</Link>
                </span>
            </div>
        </nav>
    );
};

export default Header;
