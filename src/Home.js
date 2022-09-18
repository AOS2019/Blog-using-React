import { useState } from 'react';
import BlogList from './BlogList';
import BlogListTemp from './BlogListTemp';

const Home = () => {
   const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
   ])

   const handleDelete = (id) => {
      const newBlogs = blogs.filter(blogs => blogs.id !== id);
      setBlogs(newBlogs);

   }

   return ( 
      <div className="home">
         <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
         <BlogListTemp blogs={blogs.filter((blogs) => blogs.author === "mario")} title="Mario's Blogs"/>
      </div>
    );
}
 
export default Home;