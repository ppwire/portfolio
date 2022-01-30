const TimelineItem = ({ data }) => {
   return (
      <div className="timeline-item">
         <div className="timeline-item-content card-solid-shadow p-2">
            <h4>{data.title}</h4>
            <h5>{data.date}</h5>
            <h5>{data.status}</h5>
            <p>{data.detail}</p>
           
         </div>
         <span className="circle" />
      </div>
   )
}
export default TimelineItem