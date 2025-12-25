export default function Home({ backgroundImage }) {
  return (
    <section
      id="home"
      className="section home-section"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      <h1>Home Page</h1>
    </section>
  );
}
