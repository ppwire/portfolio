import ProjectData from './ProjectData'
import ProjectItem from './ProjectItem'
const Project = () => {
   return (
      <div id="project" >
         <h3 className="font-medium lg:text-center">Project</h3>
         <br />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center">
            {
               ProjectData.map((el, index) => {
                  return <ProjectItem key={index} image={el.image} title={el.title} description={el.description} siteLink={el.siteLink} repoLink={el.repoLink}></ProjectItem>
               })
            }
         </div>
      </div>
   )
}

export default Project