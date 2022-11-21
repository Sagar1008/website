import React, { useEffect, useState } from "react";
import "./Program.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Program() {
  let query = useQuery();
  const [data, setData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      console.log(data);
      setData(data.data);
    };
    if (id) getData();
  });

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="section-title">
          <h2>{`Programme Detail (${query.get("name")})`}</h2>
        </div>
      </div>
      <div className="col-md-12">
        <div className="post">
          <div className="card-body">
            <div className="card-meta">
              <a className="category cat-1" href="#">
                {query.get("name")}
              </a>
              <span className="date">{query.get("date")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <img src={data.image?.medium} alt="" />
      </div>

      <div className="col-md-6" style={{ textAlign: "justify !important" }}>
        <div className="card-meta">
          <span className="category cat-2">Type: {data.type}</span>
        </div>
        <div className="card-meta">
          <span className="category cat-2">Language: {data.language}</span>
        </div>
        <div className="card-meta">
          <span className="category cat-4">Network: {data.network?.name}</span>
        </div>
        <h4>Genres</h4>
        {data &&
          data.genres?.map((genre) => (
            <span class="card-meta">
              <span class="category cat-3">{genre}</span>
            </span>
          ))}
        <div
          style={{ marginTop: "10px", marginBottom: "10px", color: "#3d455c" }}
        >
          {parse(`${data.summary}`)}
        </div>
        <span>Schedule : {data.schedule?.time}</span>
        <br />
        {data &&
          data.schedule &&
          data.schedule.days?.map((day) => (
            <span className="card-meta">
              <span className="category cat-1">{day}</span>
            </span>
          ))}
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            color: "blue !important",
          }}
        >
          <a className="link" href={data.officialSite}>
            Click here for Office Site
          </a>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            color: "blue !important",
          }}
        >
          <a className="link" href={data.url}>
            Click to watch on site.
          </a>
        </div>
        <a href={data._links?.previousepisode} className="btn primary">
          &lt; Previous Episode
        </a>{" "}
        <a href={data._links?.nextepisode} className="btn warning">
          Next Episode &gt;
        </a>
      </div>
    </div>
  );
}
