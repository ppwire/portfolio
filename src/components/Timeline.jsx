import TimelineItem from './TimelineItem'
import { useEffect, useState } from 'react'
const Timeline = () => {

   const [timelines, setTimelines] = useState([])

   useEffect(() => {
      fetch(import.meta.env.VITE_BASE_URL + '/timelines')
         .then(res => res.json())
         .then(res => {
            setTimelines(res)
         },
            (err) => {
               console.log(err)
            }
         )
   }, [])

   return (
      <div id="experiences">
         <h3 className="lg:text-center">Experiences</h3>
         <br />
         <div className="timeline-container">
            {timelines.map((data, index) => {
               return <TimelineItem data={data} key={index}></TimelineItem>
            })}
         </div>
      </div>

   )
}

export default Timeline