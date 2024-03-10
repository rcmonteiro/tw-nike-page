'use client'

const Page = () => {

  return (
    <main className="flex flex-col p-5">
      <h1 className="border-t-2 py-2 mt-4 text-center text-lg text-green-400">Hello World</h1>
      <div className="w-full h-10 bg-violet-200 border-t-2 py-2iolet-600 rounded-md border-t-2 py-2 my-4 p-2">
        <p className="text-center font-mono font-extrabold">A div</p>
      </div>
      
      {/* Layout */}
      <div className="fixed w-10 h-10 bg-red-500 top-0">

      </div>

      <h1 className="border-t-2 py-2 lack mt-4 text-center text-lg text-green-400">flex justify-center</h1>
      <div className="flex justify-center">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      </div>
      <h1 className="border-t-2 py-2 mt-4 text-center text-lg text-green-400">flex justify-start</h1>
      <div className="flex justify-start">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      </div>
      <h1 className="border-t-2 py-2 mt-4 text-center text-lg text-green-400">flex justify-end</h1>
      <div className="flex justify-end">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      </div>
      <h1 className="border-t-2 py-2 mt-4 text-center text-lg text-green-400">flex justify-center space-x-1</h1>
      <div className="flex justify-center space-x-1">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      </div>
      <h1 className="border-t-2 py-2 mt-4 text-center text-lg text-green-400">flex justify-center space-x-6</h1>
      <div className="flex justify-center space-x-6">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      </div>
      <h1 className="border-t-2 py-2 mt-4 text-center text-lg text-green-400">flex justify-between</h1>
      <div className="flex justify-between">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      </div>
      <h1 className="border-t-2 py-2 mt-4 text-center text-lg text-green-400">flex justify-around</h1>
      <div className="flex justify-around">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      </div>
      <h1 className="border-t-2 py-2 mt-4 text-center text-lg text-green-400">grid grid-cols-5 gap-2</h1>
      <div className="grid grid-cols-5 gap-2">
        <div className="h-16 rounded-md bg-violet-500"></div>
        <div className="h-16 rounded-md bg-violet-500"></div>
        <div className="h-16 rounded-md bg-violet-500"></div>
        <div className="h-16 rounded-md bg-violet-500"></div>
        <div className="h-16 rounded-md bg-violet-500"></div>
      </div>

      <h1 className="border-t-2 py-2 mt-4 text-center text-lg text-green-400">media queries</h1>
      <div className="md:block hidden">
        <p>I will appear for device resolution {">"} 768px</p>
      </div>
      <div className="max-md:block hidden">
        <p>I will appear for device resolution {"<"} 768px</p>
      </div>

      <button className="my-2 rounded-lg bg-blue-500 px-4 py-2 text-white self-center 
      hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">Click me</button>

      <ul className="my-2 space-y-3">
        <li className="bg-white p-2 first:bg-yellow-100">Item 1</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 2</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 2</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 2</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 2</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 2</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 2</li>
      </ul>

      <h1 className="border-t-2 py-2 mt-4 text-center text-lg text-green-400">Dark mode</h1>
      <div className="mt-10 rounded-lg  px-6 py-8 shadow-xl ring-1 ring-slate-900/5
                      bg-white dark:bg-slate-900">
        <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-slate-100">This is a text element</h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-blue-100">This is an even longer p tag element</p>
        <button 
          onClick={(e) => document.body.classList.toggle('dark')}
          className="text-blue-900 px-4 py-2 text-sm font-medium mt-8 bg-blue-100 rounded-md">Toggle dark</button>

          <p className="text-2xl text-[#973F29] bg-[#efeeee] py-2 mt-8 px-2">Chestnut inline color</p>
          <p className="text-2xl text-chestnut bg-[#efeeee] py-2 mt-8 px-2">Chestnut extended color</p>
      </div>
    </main>
    
  )
}
export default Page