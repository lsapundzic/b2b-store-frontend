import Link from "next/link";

const Tests = () => {
  return (
    <div>
      <h1>This is a page for testing layout and logic.</h1>
      <p>Please return to the main page immediately</p>
      <Link href="./">Home</Link>
    </div>
  );
};

export default Tests;
