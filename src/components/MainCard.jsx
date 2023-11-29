import { Link } from "react-router-dom";
import { useState } from "react";

const MainCard = ({ title, day }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "680px",
    height: "150px",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0px 0px 20px rgba(0, 0, 0, 0.3)" : "none",
    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "transparent",
  };

  const dayStyle = {
    fontWeight: "bold",
    color: "#3498db", // Blue color for Day label
    marginBottom: "8px",
  };

  return (
    <Link
      to={`/${day}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <li className="card" style={cardStyle}>
        <span style={dayStyle}>Day {day}</span>
        <span className="text-gray-300">{title}</span>
      </li>
    </Link>
  );
};

export default MainCard;