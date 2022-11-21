import parse from "html-react-parser";

function ScheduleCard(props) {
  return (
    <div className="card">
      <div className="card-meta col-md-12">
        <a
          className="category"
          href="http://project.mediatech.co.in/tvshow/show/getTvShowDetails?id=eNrLtDIyMTAzNjCxBlwwDVcCQg.."
        >
          {props.name}
        </a>

        <span className="date">{props.date}</span>
      </div>
      <a
        className="text-decoration row"
        href={`/tv-show/episode/${props.id}/?name=${props.name}&date=${props.date}`}
      >
        <div className="col-md-5">
          <img src={props.img.medium} alt="" />
        </div>
        <div className="summary col-md-6">{parse(`${props.summary}`)}</div>
      </a>
    </div>
  );
}

export default ScheduleCard;
