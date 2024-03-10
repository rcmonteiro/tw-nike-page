import Box from "@/components/common/Box"

const Page = () => {

  return (
    <main className="flex flex-col p-2 gap-2 justify-center h-screen">
      <div className="grid grid-cols-3 gap-2 flex-1">
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-row justify-evenly items-start</span>
          <div className="flex flex-row h-full w-full justify-evenly items-start gap-2">
            <Box color="bg-slate-200 py-2">🐞</Box>
            <Box color="bg-slate-200 py-4">🐞</Box>
          </div>
        </Box>
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-row justify-around items-end</span>
          <div className="flex flex-row h-full w-full justify-around items-end gap-2">
            <Box color="bg-slate-200 py-2">🐞</Box>
            <Box color="bg-slate-200 py-4">🐞</Box>
          </div>
        </Box>
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-row justify-around items-center</span>
          <div className="flex flex-row h-full w-full justify-between items-center gap-2">
            <Box color="bg-slate-200 py-2">🐞</Box>
            <Box color="bg-slate-200 py-4">🐞</Box>
          </div>
        </Box>
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-row justify-center items-baseline</span>
          <div className="flex flex-row h-full w-full justify-center items-baseline gap-2">
            <Box color="bg-slate-200 py-2">🐞</Box>
            <Box color="bg-slate-200 py-4">🐞</Box>
          </div>
        </Box>
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-row justify-start items-stretch</span>
          <div className="flex flex-row h-full w-full justify-start items-stretch gap-2">
            <Box color="bg-slate-200 py-2" className="flex items-center">🐞</Box>
            <Box color="bg-slate-200 py-4" className="flex items-center">🐞</Box>
          </div>
        </Box>
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-row justify-end items-stretch</span>
          <div className="flex flex-row h-full w-full justify-end items-stretch gap-2">
            <Box color="bg-slate-200" className="flex items-center">🐞</Box>
            <Box color="bg-slate-200" className="flex items-center">🐞</Box>
          </div>
        </Box>
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-col justify-evenly</span>
          <div className="flex flex-col h-full w-full justify-center gap-2">
            <Box color="bg-slate-200">🐞</Box>
            <Box color="bg-slate-200">🐞</Box>
          </div>
        </Box>
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-col justify-around</span>
          <div className="flex flex-col h-full w-full justify-around gap-2">
            <Box color="bg-slate-200">🐞</Box>
            <Box color="bg-slate-200">🐞</Box>
          </div>
        </Box>
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-col justify-around</span>
          <div className="flex flex-col h-full w-full justify-between gap-2">
            <Box color="bg-slate-200">🐞</Box>
            <Box color="bg-slate-200">🐞</Box>
          </div>
        </Box>
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-col justify-center</span>
          <div className="flex flex-col h-full w-full justify-center gap-2">
            <Box color="bg-slate-200">🐞</Box>
            <Box color="bg-slate-200">🐞</Box>
          </div>
        </Box>
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-col justify-start</span>
          <div className="flex flex-col h-full w-full justify-start gap-2">
            <Box color="bg-slate-200">🐞</Box>
            <Box color="bg-slate-200">🐞</Box>
          </div>
        </Box>
        <Box color="bg-violet-500" className="flex flex-col items-center">
          <span className="text-white">flex-col justify-end</span>
          <div className="flex flex-col h-full w-full justify-end gap-2">
            <Box color="bg-slate-200">🐞</Box>
            <Box color="bg-slate-200">🐞</Box>
          </div>
        </Box>
      </div>
    </main>
    
  )
}
export default Page