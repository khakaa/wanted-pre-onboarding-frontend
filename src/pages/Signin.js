import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { validationCheck } from "../utils/validation";
import { signinApi } from "../api/AuthApi";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnState, setBtnState] = useState(true);

  useEffect(() => {
    validationCheck(email, password, setBtnState);
  }, [email, password]);

  const signin = async () => {
    try {
      const response = await signinApi({
        email: email,
        password: password,
      });
      // 로그인 성공하면 토큰 저장 후, /todo 이동
      if (response.status === 200) {
        const access_token = response.data.access_token;
        localStorage.setItem("access_token", access_token);
        if (localStorage.getItem("access_token")) {
          navigate("/todo");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="wrapper">
      <h1 className="title mb-[80px]">SignIn</h1>
      <div className="auth-wrapper">
        <p>ID</p>
        <input
          className="input"
          data-testid="email-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>PASSWORD</p>
        <input
          className="input mb-[12px]"
          type="password"
          data-testid="password-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={btnState ? "disabled-btn" : "home-btn"}
          data-testid="signin-button"
          disabled={btnState}
          onClick={signin}
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default Signin;
