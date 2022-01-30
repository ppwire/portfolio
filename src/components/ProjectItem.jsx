import Button from './Button'
const ProjectItem = ({ image, title, description, siteLink, repoLink }) => {
   function toExternalSite(e) {
      console.log(e)
      window.open(e, "_blank")
   }
   return (
      <div className="project-card p-5">
         <img src={image} alt="" className="project-img" />
         <h4>{title}</h4>
         <p>{description}</p>
         <Button value="REOPOSITORY();" addOnStyle="w-full mb-3"></Button>
         <Button value="VISIT();" addOnStyle="w-full" onClick={()=>toExternalSite(siteLink)}></Button>
      </div>
   )
}

export default ProjectItem