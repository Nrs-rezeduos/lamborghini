import { useRef, useState } from "react";
import milestones from "../../data/milestones";
import TimelineCard from "./TimelineCard";
import "./Milestones.css";

const periods = [
  "1960-1969",
  "1970-1979",
  "1980-1989",
  "1990-1999",
  "2000-2009",
  "2010-2019",
  "2020-TODAY"
];

export default function Milestones() {

  const slider = useRef(null);

  const [activePeriod, setActivePeriod] = useState("1960-1969");

  const filtered =
    milestones.filter(
      item => item.period === activePeriod
    );

  const next = () => {
    slider.current.scrollBy({
      left: 500,
      behavior: "smooth"
    });
  };

  const prev = () => {
    slider.current.scrollBy({
      left: -500,
      behavior: "smooth"
    });
  };

  return (

    <section className="milestones">

      <h2>MILESTONES</h2>

      <div
        className="timeline-wrapper"
        ref={slider}
      >

        {filtered.map(item => (

          <TimelineCard
            key={item.year}
            item={item}
          />

        ))}

      </div>

      <div className="timeline-bottom">

        <div className="periods">

          {periods.map(period => (

            <button
              key={period}
              className={
                activePeriod === period
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActivePeriod(period)
              }
            >
              {period}
            </button>

          ))}

        </div>

        <div className="timeline-arrows">

          <button onClick={prev}>
            &#10094;
          </button>

          <button onClick={next}>
            &#10095;
          </button>

        </div>

      </div>

    </section>

  );
}