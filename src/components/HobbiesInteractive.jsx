import { useState } from "react";
import hobbiesVisual from "../assets/workspace.png"; // بدلها بالصورة متاعك

export default function HobbiesInteractive() {
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateY = ((x / width) - 0.5) * 40;
    const rotateX = ((y / height) - 0.5) * -40;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    });
  };

  const handleLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  };

  return (
    <div
      className="interactive-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      <img
        src={hobbiesVisual}
        alt="interactive"
        className="interactive-image"
        style={style}
      />
    </div>
  );
}