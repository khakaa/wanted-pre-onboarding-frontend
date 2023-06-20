import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validationCheck } from "../utils/validation";
import { signupApi } from "../api/AuthApi";
function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnState, setBtnState] = useState(true);

  //   유효성 체크
  useEffect(() => {
    validationCheck(email, password, setBtnState);
  }, [email, password]);

  //   회원가입 요청
  const signup = async () => {
    try {
      const response = await signupApi({
        email: email,
        password: password,
      });
      //   console.log(response);

      if (response.status == 201) {
        navigate("/signin");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="wrapper">
      <h1 className="title mb-[80px]">SignUp</h1>
      <div className="auth-wrapper">
        <p>ID</p>
        <input
          className="input"
          data-testid="email-input"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>PASSWORD</p>
        <input
          className="input mb-[12px]"
          type="password"
          data-testid="password-input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className={btnState ? "disabled-btn" : "home-btn"}
          data-testid="signup-button"
          disabled={btnState}
          onClick={signup}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Signup;
