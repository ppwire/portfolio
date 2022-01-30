import ProjectData from './ProjectData'
import ProjectItem from './ProjectItem'
const Project = () => {
   return (
      <div >
         <h3 className="font-medium">Project</h3>
      <br />
         <div className="flex gap-5">
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