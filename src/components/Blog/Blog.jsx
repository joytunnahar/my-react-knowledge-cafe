import PropTypes from 'prop-types';
import { IoMdBookmark } from "react-icons/io";


const Blog = ({blog, handleAddToBookmark, handleAddToMarkAsRead}) => {
   
    const {cover, title, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="my-16">
            <img src={cover}alt="" />
            <h2 className="text-4xl font-semibold mt-2 ">{title}</h2>
            {
            hashtags.map((hash,idx) =><span key={idx}><a href="">#{hash}</a></span>)
            }
            <div className="md:flex justify-between my-4">
            <div className="flex items-center justify-center  gap-4 ">
                <div>
                    <img className='w-20 rounded-full' src={author_img}alt="" />
                </div>

                <div>
                    <h3 className="text-2xl font-medium ">{author}</h3>
                    <p className="font-medium">{posted_date}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <span>{reading_time} min read</span> 
                <button
                    onClick={()=>handleAddToBookmark(blog)}
                className='text-3xl '><IoMdBookmark></IoMdBookmark></button>
            </div>
            </div>
            

            <button
            onClick={()=>handleAddToMarkAsRead(reading_time)}
             className="text-purple-700 underline font-semibold  "
             >MarkAsRead</button>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func, 
    handleAddToMarkAsRead:PropTypes.func 
}
export default Blog;