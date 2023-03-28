import { useState } from "react";
import { withLayout } from "../layout/P/Layout";
import { Button, Input, Div, P } from "../components";

function SignUp(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const url = "http://localhost:5000/api/user/signup";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, image })
      });
      const data = await res.json();
      console.log(data);

      localStorage.setItem("userId", data.user._id);
      // other actions after successful registration
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Div>
        <Input
          alignment="centered"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          alignment="centered"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          alignment="centered"
          placeholder="Enter Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button alignment="centered" type="submit" appearance="primary">
          Sign up
        </Button>
      </Div>
    </form>
  );
}

export default withLayout(SignUp);
