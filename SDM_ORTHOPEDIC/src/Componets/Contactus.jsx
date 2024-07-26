import React from 'react'

export default function Contactus() {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div className="bg-white max-w-4xl mx-auto w-full">
    <div className="grid grid-cols-6 h-full">
      <div className="bg-blue-900 p-10 col-span-2">
        <h2 className="mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Contact Info</h2>
        <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
          Location Address
          <span className="font-normal text-xs text-blue-300 block">Address: Sector B1, Plot No. E-16, Tronica City Industrial Area Loni, Ghaziabad, Uttar Pradesh - 201103</span>
        </p>
        <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
          Phone Number
          <span className="font-normal text-xs text-blue-300 block">+91 9810648410 ,+91 9354256801</span>
        </p>
        <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
          Email Address
          <span className="font-normal text-xs text-blue-300 block">sdmorthopedic@yahoo.com</span>
        </p>

      </div>
      <div className="bg-blue-50 p-14 col-span-4">
        <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Enter your details</h2>
        <div className="grid gap-6 mb-6 grid-cols-2">
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Your Name" ></input>
          </div>
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Company Name" ></input>
          </div>
        </div>
        <div className="grid gap-6 mb-6 grid-cols-2">
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Email Address" ></input>
          </div>
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Subjet" ></input>
          </div>
        </div>
        <div className="mb-6">
          <textarea className="w-full rounded-2xl placeholder:text-xs px-6 py-4" placeholder="Your message " name="" id="" rows="8"></textarea>
        </div>
        <div className="flex justify-center">
          <button className="rounded-full bg-blue-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all">Submit</button>
        </div>
      </div>
    </div>
</div>
</div>
    </div>
  )
}
