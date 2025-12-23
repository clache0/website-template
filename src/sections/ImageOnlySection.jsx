export default function ImageOnlySection({
  id,
  imageUrl,
  imageAlt = "Image section",
  height = "60vh", // default height, can be overridden
}) {
  return (
    <section
      id={id}
      className="section image-only-section"
      style={{ height }}
    >
      <img src={imageUrl} alt={imageAlt} />
    </section>
  );
}
