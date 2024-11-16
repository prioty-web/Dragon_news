import { Outlet } from "react-router-dom";
import Header from "./Header";
import LatestNews from "./LatestNews";
import LeftMain from "./LeftMain";
import Navbar from "./Navbar";
import RightNav from "./RightNav";


const HeaderLayout = () => {
    return (
        <div className="font-poppins w-11/12 mx-auto">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <main className="md:grid grid-cols-12 gap-3 pt-7">
                <aside className="col-span-3 a"> <LeftMain></LeftMain></aside>
                <section className="col-span-6"><Outlet></Outlet></section>
                <aside className="col-span-3"><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HeaderLayout;