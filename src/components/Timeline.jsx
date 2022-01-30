import TimelineItem from './TimelineItem'
import TimelineData from './TimelineData'
const Timeline = () => {
   return (
      <div id="experiences">
         <h3 className="text-center">Experiences</h3>
         <br />
         <div className="timeline-container">
            {TimelineData.map((data, index) => {
               return <TimelineItem data={data} key={index}></TimelineItem>
            })}
         </div>
      </div>

   )
}

export default Timeline