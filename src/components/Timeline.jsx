import TimelineItem from './TimelineItem'
import TimelineLoading from './TimelineLoading'
import { useEffect, useState } from 'react'
import FadeIn from './FadeIn'
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
         {timelines.length > 0 ?

            <FadeIn>
               <h3 className="lg:text-center">Experiences</h3>
               <br />
               <div className="timeline-container">
                  {timelines.map((data, index) => {
                     return <TimelineItem data={data} key={index}></TimelineItem>
                  })}
               </div>
            </FadeIn>
            :
            <TimelineLoading></TimelineLoading>
         }
      </div>
   )
}

export default Timeline