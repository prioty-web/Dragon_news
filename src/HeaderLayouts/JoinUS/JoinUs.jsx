import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const JoinUs = () => {
    return (
        <div>
            <h2 className="font-bold my-3">join Us On</h2>
            <div className="join join-vertical flex bg-base-100 rounded-none ">
  <button className="btn join-item bg-base-100 text-blue-600"><FaFacebook></FaFacebook>Facebook</button>
  <button className="btn join-item bg-base-100 text-pink-700"><FaInstagram></FaInstagram> Instagram</button>
  <button className="btn join-item bg-base-100 text-sky-400"><FaTwitter></FaTwitter>Twiter</button>
</div>

        </div>
    );
};

export default JoinUs;