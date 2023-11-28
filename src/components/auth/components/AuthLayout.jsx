import React from 'react'
// import a from '../../../assets/cats.jpeg'

export const AuthLayout = ({ children }) => {
  return (
    <main className=' flex h-screen'>
      <div className=' hidden lg:block w-1/2 bg-cover bg-center h-screen' style={{ backgroundImage: `url('/assets/cats.jpeg')` }}></div>
      <div className=' bg-slate-700 h-screen w-full lg:w-1/2 m-auto items-center flex justify-center'>
        <section className="w-[320px]">{children}</section>
      </div>
    </main>
  )
}
