const SkillItem = ({ icon, title, list }) => {
   return (
      <div className="card-solid-shadow p-3">
         <div className="flex">
            <img src={icon} alt="skill-icon" className="mr-2"/>
            <span className="text-lg self-center">{title}</span>
         </div>
         <ul>
            {list.map((el, index) => {
               return <li key={index}>{el}</li>
            })}
         </ul>
      </div>
   )
}

export default SkillItem