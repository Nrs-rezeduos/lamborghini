import "./TimelineCard.css";

export default function TimelineCard({ item }) {
  return (
    <div className="timeline-card">

      <div className="timeline-year">
        {item.year}
      </div>

      <img
        src={item.image}
        alt={item.title}
        className="timeline-image"
      />

      <h3>
        {item.title}
      </h3>

      <a href={item.link}>
        View more
      </a>

    </div>
  );
}