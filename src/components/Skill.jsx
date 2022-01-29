import SkillItem from "./SkillItem";
const Skill = () => {
   const data = [
      {
         title: 'Framework/Library',
         icon: '/assets/window-icon.svg',
         list: ['Vue', 'React', 'Express']
      },
      {
         title: 'Programming Language',
         icon: '/assets/code-icon.svg',
         list: ['Javascript', 'HTML', 'CSS']
      },
      {
         title: 'Interest',
         icon: '/assets/head-phone-icon.svg',
         list: ['Game', 'Drawing', 'Manga/Anime']
      }
   ]
   return (
      <div className="flex flex-col lg:flex-row gap-6">
         {data.map((el, index) => {
            return <SkillItem key={index}  title={el.title} icon={el.icon} list={el.list} ></SkillItem>
         })}
      </div>
   )
}

export default Skill;