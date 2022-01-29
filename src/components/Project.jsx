import ProjectData from './ProjectData'
import ProjectItem from './ProjectItem'
const Project = () => {
   return (
      <div>
         <h3 className="font-semibold">My Precious Project</h3>

         <div className="flex">
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