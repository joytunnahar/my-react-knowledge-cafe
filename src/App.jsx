import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"


function App() {
 const [bookmarks, setBookmarks] = useState([]);
 const [readingTime, setReadingTime] = useState(0);
  
 const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks)
 }

 const handleAddToMarkAsRead = time =>{
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime)
 }

  return (
    <>
      
      <Header></Header>
      <div className="md:flex max-w-[1100px] mx-auto my-12">
          <Blogs
           handleAddToBookmark={handleAddToBookmark}
           handleAddToMarkAsRead={handleAddToMarkAsRead}
           ></Blogs>
          <Bookmarks
           bookmarks={bookmarks}
           readingTime={readingTime}
          ></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
