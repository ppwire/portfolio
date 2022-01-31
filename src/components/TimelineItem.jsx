const TimelineItem = ({ data }) => {
   return (
      <div className="timeline-item">
         <div className="timeline-item-content card-solid-shadow p-2">
            <h5 className="font-bold">{data.title}</h5>
            <p>{data.date}</p>
            <p className="underline font-semibold">{data.status}</p>
            <p className="text-slate-600 font-light">{data.detail}</p>
           
         </div>
      </div>
   )
}
export default TimelineItem