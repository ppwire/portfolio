import { useEffect, useState } from 'react'
import ProjectItem from './ProjectItem'
const Project = () => {

   const [projects, setProjects] = useState([])

   useEffect(() => {
      fetch(import.meta.env.VITE_BASE_URL + "/projects")
         .then(res => res.json())
         .then(res => {
            setProjects(res)
         },
         err => console.error(err)
         )
   }, [])

   return (
      <div id="project" >
         <h3 className="font-medium lg:text-center">Project</h3>
         <br />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center">
            {
               projects.map((el, index) => {
                  return <ProjectItem
                     key={index} image={el.image}
                     title={el.name} description={el.description} siteLink={el.siteUrl} repoLink={el.gitUrl}></ProjectItem>
               })
            }
         </div>
      </div>
   )
}

export default Project