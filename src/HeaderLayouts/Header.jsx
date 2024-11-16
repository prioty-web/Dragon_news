import moment from "moment";

const Header = () => {
    return (
        <div className="flex flex-col justify-center align-middle text-center space-y-2">
           <img   className='w-[500px] mx-auto pt-5' src='/assets/logo.png' />
           <p className="text-gray-500">Journalism without FEAR & FAVOUR </p>
           <p>{moment().format('MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;