"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const data = JSON.stringify({
    "email": form.email,
    "phone": form.phone,
    "first_name": form.name,
    "last_name": form.name,
    "message": form.message
   
  
});
  const fetchApiPostContact = async (e) => {
    e.preventDefault()
    setLoading(true)
    await axios({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_APP_API_KEY}/contact`,
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Credentials':'false',
      //   'Access-Control-Allow-Origin':'true'
      // },
        data: data
    })
    .then(function (response) {
        Swal.fire(
          'Message Sent Succesfully!',
          'Thank You For Your Message!',
          'success'
          )
          setLoading(false)
          // toast.success('Thanks For Registering', {
            //   duration:3000
            // })
            setForm({
              name: "",
              phone: "",
              email: "",
              message: ""
            })
          
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }
  const handleChangeForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  return (
    <div className="contact  py-10 w-full relative lg:px-8 xl:px-24 bg-cover bg-no-repeat" id='contact' >
      {/* <img src="/fa-solid_leaf.png" className="lg:w-[173px] w-[100px] absolute top-0 right-4 md:block" alt="" /> */}
      <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-24 bg-[#5F8171] py-10 rounded-3xl">
        <h1 className="text-center font-luxyna tracking-[6px] text-2xl sm:text-4xl mb-6 md:mb-12 lg:mb-16">TALK WITH US</h1>
        <div className="form w-full">
          <form className="w-full lg:w-[800px] space-y-10 mx-auto" onSubmit={fetchApiPostContact}>
            <div className="form-top flex justify-center md:items-center  gap-4 md:gap-6 lg:gap-8 md:flex-row flex-col">
              <div className="name flex w-full flex-col gap-5"><label htmlFor="name" className="text-base sm:text-xl font-luxyna tracking-[4px]">Your Name</label> <input required type="text" className="px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 text-sm rounded-lg !focus:none block w-full p-2.5 focus:border-none focus:ring-0 focus:outline-none" name="name" onChange={handleChangeForm} value={form.name} placeholder="Type Your Name" /></div>
              <div className="name flex w-full flex-col gap-5"><label htmlFor="name" className="text-base sm:text-xl font-luxyna tracking-[4px]">Phone Number</label> <input required type="text" className="px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:none block w-full p-2.5 focus:outline-none" name="phone" onChange={handleChangeForm} value={form.phone} placeholder="Type Your Phone Number" /></div>
              <div className="name flex w-full flex-col gap-5"><label htmlFor="name" className="text-base sm:text-xl font-luxyna tracking-[4px]">Email</label> <input required type="email" className="px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:none block w-full p-2.5 focus:outline-none" name="email" onChange={handleChangeForm} value={form.email} placeholder="Type Your Email" /></div>
            </div>
            <div className="form-bottom">
              <div className="name flex flex-col gap-5"><textarea required id="message" rows="4" className="px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-800 focus:border-greenring-green-800 block w-full p-2.5 focus:outline-none" name="message" onChange={handleChangeForm} value={form.message} placeholder="Type Your Message" /></div>
            </div>
            <div className="justify-center items-center w-full flex">
              <button type='submit' disabled={loading} className="px-20 py-3 bg-[#FC7F66] rounded-xl lg:mt-6 hover:bg-white hover:text-[#FC7F66] transition-all duration-200">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact