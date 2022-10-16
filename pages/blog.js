import Link from 'next/link'
import React, {  useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {
    const [blogs, setBlogs] = useState(props.allBlogs)
    const [count, setCount] = useState(4) 

     const fetchData = async () => {
      // a fake async api call like which sends
      // 20 more records in 1.5 secs
      let d = await fetch(`http://localhost:3000/api/blogs?count=${count+2}`);
      setCount(count+2);
      let data = await d.json();
      setBlogs(data); 
       };

  return (   
    <div>
      <h1 className='text-xl font-bold text-center p-8'> BLOGSSS</h1>
      <InfiniteScroll
  dataLength={blogs.length} //This is important field to render the next data
  next={fetchData}
  hasMore={props.allCount !== blogs.length }
  loader={<h4>Loading cha hai yo...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  
>
{blogs.map((blog)=>{
          return (
           <div className='p-5 max-w-2xl mt-4 mx-auto'
            key={blog.slug} >
          <Link href={`/blogpost/${blog.slug}`}>
            <h3 className='cursor-pointer text-5xl p-5'>{blog.title}</h3></Link>
            <p className='ml-5'> {blog.content.substr(0,150)}....</p>
            <span><Link href={`/blogpost/${blog.slug}`}>
            <button className='p-1 bg-red-500 border text-white mx-4 '> READ MORE..</button></Link>
            </span>
        </div>
        )
      })}
</InfiniteScroll>
      </div>
  )
}

export async function getServerSideProps(context) {
   let data = await fetch("http://localhost:3000/api/blogs")
   data = await data.json();
   let allBlogs = [];
   let allCount = data.length;
   for (let index = 0; index < 4 ; index++) {
    let item = data[index];
    allBlogs.push(item);
   }

  //  let allBlogs = await data.json();
  //  setBlogs(myProps)
  //  .then((a)=>{
  //    return(a.json())
  //   })
  //   .then((parsed)=>{
  //     setBlogs(parsed)
  //    })
  return {
      props: {allBlogs,allCount}
  }
}

export default Blog