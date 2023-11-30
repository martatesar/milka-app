const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        fontSize: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Home</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          fontSize: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="/#/ar">AR</a>
        <a href="/#/360">360</a>
      </div>
    </div>
  );
};

export default HomePage;
