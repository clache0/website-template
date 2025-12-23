export default function TextSection({
  id,
  title,
  text,
  align = "center",       // text alignment: "left", "center", "right"
  backgroundColor = "transparent", // optional background
  padding = "4rem 2rem",  // section padding
}) {
  return (
    <section
      id={id}
      className="section text-section"
      style={{
        textAlign: align,
        backgroundColor,
        padding,
      }}
    >
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </section>
  );
}
