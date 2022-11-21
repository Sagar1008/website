import React, { useEffect, useState } from "react";
import axios from "axios";
import ScheduleCard from "./scheduleCard";
import { Row, Col } from "react-bootstrap";

export default function RecentSchedule() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get("https://api.tvmaze.com/schedule");
      console.log(data);
      setData(data.data);
    };
    getData();
  });

  return (
    <Row>
      <div className="col-md-12">
        <div className="section-title">
          <h2>Recent Schedule</h2>
        </div>
      </div>
      {data &&
        data.map((data) => (
          <Col className="col-md-6">
            <ScheduleCard
              name={data.name}
              date={`${data.airdate} ${data.airtime}`}
              summary={data.show.summary}
              img={data.show.image}
              id={data.show.id}
            />
          </Col>
        ))}
    </Row>
  );
}
