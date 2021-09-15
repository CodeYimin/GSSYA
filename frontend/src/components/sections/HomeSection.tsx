import React, { ReactElement } from 'react'

function HomeSection(): ReactElement {
  return (
    <div id="home" className="">
      <div className="flex flex-col justify-center h-90v mx-auto w-6/12">
        <h1 className="text-6xl font-extrabold text-center text-red-600">
          Global Share Support Youth Association
        </h1>
        <p className="text-xl text-red-600 w-8/12 mx-auto text-center mt-2">
          The best place to learn and study 100% FREE with qualified, experienced, and friendly tutors.
        </p>
        <a href="#about" className="w-max mx-auto border-2 border-red-500 mt-4 rounded-full px-10 py-1 hover:bg-red-100 transition">
          <i className="bi bi-arrow-down text-red-500 text-center text-xl" />
        </a>
      </div>
    </div>
  )
}

export default HomeSection
