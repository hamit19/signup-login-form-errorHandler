import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/signup`);
  });

  return (
    <div>
      <h1>Welcome to home page!.</h1>
    </div>
  );
};

export default HomePage;
