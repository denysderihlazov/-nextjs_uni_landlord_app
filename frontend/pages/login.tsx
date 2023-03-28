import { useState } from "react";
import { withLayout } from "../layout/P/Layout";
import { Button, Input, Div } from "../components";
import { useUserContext } from "../context/userContext";
import { useRouter } from "next/router";

function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUserContext(); // Получите setUser из контекста
  const router = useRouter(); // Получите router из useRouter
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const url = "http://localhost:5000/api/user/login";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      console.log(data);

      setUser({
        id: data.user._id,
        name: data.user.name,
        email: data.user.email
      });

      localStorage.setItem("user", JSON.stringify({
        id: data.user._id,
        name: data.user.name,
        email: data.user.email
      }));

      localStorage.setItem("userId", data.user._id);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Div>
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
          Log in
        </Button>
      </Div>
    </form>
  );
}

export default withLayout(Login);
