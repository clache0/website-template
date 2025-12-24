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
      {/* <h1>Kristine and Clayton&apos;s Wedding</h1> */}
      {/* <p className="home-date">October 10, 2026</p> */}
    </section>
  );
}
