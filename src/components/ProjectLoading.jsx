const ProjectLoading = () => {

   const Boxes = () => {
      const boxes = []
      for (let i = 0; i < 4; i++) {
         boxes.push(<div key={i} className="w-full h-80 bg-slate-200 animate-pulse"></div>)
      }
      return boxes
   }

   return (
      <div >
         <div className="w-full h-10 bg-slate-200 animate-pulse mb-4"></div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center">
            <Boxes></Boxes>
         </div>
      </div>
   )
}

export default ProjectLoading