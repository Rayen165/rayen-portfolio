import workspace from "./assets/workspace.png";

function Hero() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px",
        gap: "50px",
      }}
    >
      {/* LEFT TEXT */}
      <div style={{ maxWidth: "500px" }}>
        <h1 style={{ color: "white", fontSize: "48px" }}>
          Hello, I'm Rayen
        </h1>

        <p style={{ color: "#bbb", marginTop: "20px" }}>
          Software Developer passionate about modern technologies.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
          src={workspace}
          alt="workspace"
          style={{
            width: "500px",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
            transform: "rotateY(-10deg)",
            transition: "0.5s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform =
              "rotateY(0deg) scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform =
              "rotateY(-10deg) scale(1)")
          }
        />
      </div>
    </div>
  );
}

export default Hero;