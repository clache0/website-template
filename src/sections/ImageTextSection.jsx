export default function ImageTextSection({
  id,
  title,
  text,
  imageUrl,
  imageAlt = "Section image",
  reverse = false, // switch image/text layout
}) {
  return (
    <section
      id={id}
      className={`section image-text-section ${reverse ? "reverse" : ""}`}
    >
      <div className="image-container">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}
