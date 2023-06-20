import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <h1 className="title">Todo</h1>
      <div className="mt-[100px] flex justify-center w-[320px]">
        <button
          className="home-btn mr-[12px]"
          onClick={() => {
            navigate("/signin");
          }}
        >
          SignIn
        </button>
        <button
          className="home-btn"
          onClick={() => {
            navigate("/signup");
          }}
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Home;
