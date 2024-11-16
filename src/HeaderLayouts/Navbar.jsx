import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="md:flex justify-between">
            <div></div>
            <div className="space-x-5">
                <Link to='/'>Home</Link>
                <Link>Career</Link>
                <Link>About</Link>
            </div>
            <div className="flex gap-3">
                <img src="/public/assets/user.png" alt="" />
                <button className="btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;