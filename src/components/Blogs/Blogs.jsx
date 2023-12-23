import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark, handleAddToMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
     useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
     },[])
    return (
        <div className="w-2/3">
            <h2 className=" text-4xl font-bold">Blogs{blogs.length}</h2>
            {
                blogs.map(blog =><Blog
                     key={blog.id}
                      blog={blog}
                      handleAddToBookmark={handleAddToBookmark}
                      handleAddToMarkAsRead={handleAddToMarkAsRead}
                      ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleAddToBookmark:PropTypes.func, 
    handleAddToMarkAsRead: PropTypes.func
}
export default Blogs;