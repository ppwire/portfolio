import Button from './Button'
const ProjectItem = ({ image, title, description, siteLink, repoLink }) => {
   function toExternalSite(e) {
      console.log(e)
      window.open(e, "_blank")
   }
   return (
      <div className="project-card p-5 flex flex-col justify-between">
         <div>
            <img src={image} alt="" className="project-img" />
            <div className="project-card-body">
               <h4 className="font-medium">{title}</h4>
               <p className="text-gray-700">{description}</p>
            </div>
         </div>
         <div className="project-card-footer ">
            {repoLink && <Button value="REOPOSITORY();" addOnStyle="w-full" onClick={() => toExternalSite(repoLink)} ></Button>}
            {siteLink && <Button value="VISIT();" addOnStyle="w-full" onClick={() => toExternalSite(siteLink)}></Button>}
         </div>
      </div>
   )
}

export default ProjectItem