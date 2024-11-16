import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const LoginWith = () => {
    return (
        <div>
            <h2 className="font-bold mb-4 ">Login with</h2>
            <div className="space-y-2">
                <button className="flex w-full justify-center btn gap-2 "><FaGoogle></FaGoogle> Login With Google</button>
                <button className="flex w-full justify-center btn gap-2"><FaGithub></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default LoginWith;