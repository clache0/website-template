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
      <div className="text-container">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </section>
  );
}
