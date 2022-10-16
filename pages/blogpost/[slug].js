import React, {  useState } from 'react'
//Step1 : find the file corresponding to the slug,
//step2 : Populate them inside the page.

const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div>

      <div className='p-10 mt-7 max-w-6xl mx-auto'>
        <h1 className='text-4xl text-center p-5'>{blog && blog.title}</h1>
        <hr />
        <p>{blog &&blog.content}</p>
      </div>  


    </div>
  )
}
export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: {
        myBlog
    }, // will be passed to the page component as props
  }
}

export default slug