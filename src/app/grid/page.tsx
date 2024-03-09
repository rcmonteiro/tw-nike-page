import Box from "@/components/common/Box"

const Page = () => {
  return (
    <>

      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <Box color="bg-pink-300" className="md:row-span-3 justify-center content-center flex flex-col gap-4">
          <Box color="bg-black"></Box>  
          <Box color="bg-black"></Box>
        </Box>
        <Box color="bg-red-300" className="md:col-span-2 flex flex-row justify-start content-start gap-4">
          <Box color="bg-black"></Box>  
          <Box color="bg-black"></Box>
        </Box>
        <Box color="bg-orange-300" className="md:row-span-2 md:col-span-2 justify-end content-end flex flex-row gap-4">
          <Box color="bg-black"></Box>  
          <Box color="bg-black"></Box>
        </Box>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-36">
        <Box color="bg-pink-300">01</Box>
        <Box color="bg-red-300">02</Box>
        <Box color="bg-orange-300">03</Box>
        <Box color="bg-amber-300">04</Box>
        <Box color="bg-yellow-300">05</Box>
        <Box color="bg-lime-300" className="md:col-span-2">06</Box>
        <Box color="bg-green-300">07</Box>
        <Box color="bg-emerald-300" className="md:col-start-2 md:col-end-4">08</Box>
        <Box color="bg-teal-300" className="md:col-span-4">09</Box>
        <Box color="bg-sky-300" className="md:col-span-3">10</Box>
        <Box color="bg-blue-300">11</Box>
        <Box color="bg-indigo-300" className="md:col-start-2">12</Box>
        <Box color="bg-violet-300" className="md:col-start-4">13</Box>
        <Box color="bg-purple-300">14</Box>
        <Box color="bg-fuchsia-300" className="md:col-start-3">15</Box>
        <Box color="bg-rose-300" className="md:col-start-3 md:col-span-2">16</Box>
      </div>

      <div className="grid md:grid-rows-8 md:grid-flow-col gap-4 mt-36">
        <Box color="bg-pink-300">01</Box>
        <Box color="bg-red-300">02</Box>
        <Box color="bg-orange-300">03</Box>
        <Box color="bg-amber-300">04</Box>
        <Box color="bg-yellow-300">05</Box>
        <Box color="bg-lime-300">06</Box>
        <Box color="bg-green-300">07</Box>
        <Box color="bg-emerald-300">08</Box>
        <Box color="bg-teal-300">09</Box>
        <Box color="bg-sky-300">10</Box>
        <Box color="bg-blue-300">11</Box>
        <Box color="bg-indigo-300">12</Box>
        <Box color="bg-violet-300">13</Box>
        <Box color="bg-purple-300">14</Box>
        <Box color="bg-fuchsia-300">15</Box>
        <Box color="bg-rose-300">16</Box>
      </div>


    </>
  )
}

export default Page