// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
// import BlogListTemp from './BlogListTemp';

const Home = () => {
   const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

   return ( 
      <div className="home">
         {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>} */}
         {error && <div className='error'> <h3> {error} </h3> </div>}
         {isPending && <div className='loading'> <h2> Loading... </h2> </div>}
         {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
         {/* <BlogListTemp blogs={blogs.filter((blogs) => blogs.author === "mario")} title="Mario's Blogs"/> */}
      </div>
    );
}
 
export default Home;