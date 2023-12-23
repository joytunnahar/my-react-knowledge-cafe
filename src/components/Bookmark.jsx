import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="p-8 m-4 rounded bg-gray-100 ">
            <h3 className="text-2xl font-medium ">{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object
}
export default Bookmark;