export default function ScheduleSection({ id, title, items }) {
  return (
    <section id={id} className="section schedule-section">
      <h2 className="schedule-title">{title}</h2>

      <div className="schedule-list">
        {items.map((item, index) => (
          <div className="schedule-item" key={index}>
            <div className="schedule-time">{item.time}</div>
            <div className="schedule-content">
              <div className="schedule-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
