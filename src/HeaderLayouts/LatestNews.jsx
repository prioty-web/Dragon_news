import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex w-11/12 mx-auto justify-center my-9">
            <p className="px-5 py-3 text-gray-200 bg-pink-700">Latest</p>
           <div className=" py-3 bg-slate-100 ">
             <Marquee>
             Journalism without FEAR & FAVOURJournalism without FEAR & FAVOURJournalism without FEAR & FAVOURJournalism without FEAR & FAVOURJournalism without FEAR & FAVOURJournalism without FEAR & FAVOURJournalism without FEAR & FAVOURJournalism without FEAR & FAVOURJournalism without FEAR & FAVOUR
          </Marquee>
           </div>
        </div>
    );
};

export default LatestNews;