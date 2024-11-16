import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftMain = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=> res.json())
        .then((data=>setCategories(data.data.news_category)))
    },[])
    return (
        <div className="">
            <h1 className="font-bold mb-4">All Category {categories.length}</h1>
            <div className="flex flex-col gap-2 ">
                {
                    categories.map(( category ) => (
                        <NavLink
                        className="btn active:btn-neutral"
                         to={`/category/${category.category_id} `}
                         key={category.category_name}>{category.category_name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftMain;