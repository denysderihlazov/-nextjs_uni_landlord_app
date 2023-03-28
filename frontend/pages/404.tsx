import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();
  
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist. Please check the URL or go back to the homepage.</p>
      <button onClick={() => router.push("/")}>Go Back to Homepage</button>
    </div>
  );
};

export default Custom404;
