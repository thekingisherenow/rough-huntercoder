import React, { useRef } from 'react'


const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      desc: descRef.current.value,
      email: emailRef.current.value,
    })
    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      desc: descRef.current.value,
      email: emailRef.current.value
    };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert("thanks for submitting data!")
        nameRef.current.value = null
          phoneRef.current.value= null
          descRef.current.value= null
          emailRef.current.value= null

    
  })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  const nameRef = useRef();
  const phoneRef = useRef();
  const descRef = useRef();
  const emailRef = useRef();


  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
          <div className="-space-y-px rounded-md shadow-sm">
            <div className='my-3'>
              <label htmlFor="Name" className="sr-only">name</label>
              <input id="Name" name="name" type="name" ref={nameRef} autoComplete="name" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Name" />
            </div>
            <div className='my-3'>
              <label htmlFor="Phone" className="sr-only">name</label>
              <input id="Phone" name="phone" type="text" ref={phoneRef} autoComplete="phone" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Phone" />
            </div>

            <div >
              <textarea id="desc" rows="4" ref={descRef} className="block mt-6 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>
            </div>

            <div >
              <label htmlFor="email" className="sr-only">name</label>
              <input id="email" name="email" ref={emailRef} type="email" autoComplete="email" required className="relative mt-6 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="email" />
            </div>

          </div>


          <div className='my-6'>
            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {/* <!-- Heroicon name: mini/lock-closed --> */}
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
              </span>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact