import Bookmark from "../Bookmark";
import PropTypes from 'prop-types';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 mt-20 pt-8 ml-4">
            <div className="p-4 m-4 rounded bg-slate-100 ">
            <h3 className="text-xl font-bold ">Spent time on read:{readingTime}</h3>
            </div>
            <h2 className=" text-4xl font-bold ml-4"> Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><Bookmark
                     key={bookmark.id}
                      bookmark={bookmark}
                      ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;