import { data } from "autoprefixer"

const ProjectLoading = () => {

   const Boxes = () => {
      const boxes = []
      for (let i = 0; i < 4; i++) {
          boxes.push(<div key={i} className="w-full h-80 bg-slate-200 animate-pulse"></div>)
      }
      return boxes
   }

   return (
      <div>
         <div className="w-full h-10 bg-slate-200 animate-pulse mb-4"></div>
         <div className="grid-cols-4 grid gap-10">
           <Boxes></Boxes>
         </div>
      </div>
   )
}

export default ProjectLoading