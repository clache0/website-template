export default function TextSection({
  id,
  title,
  text,
  align = "center",
  className = "",
}) {
  return (
    <section id={id} className={`section text-section ${className}`}>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}
