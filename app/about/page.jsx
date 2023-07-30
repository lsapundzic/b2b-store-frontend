export const getServerSideProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
};

export default function About() {
  return (
    <div>
      <h1>Client Side API Fetch</h1>
    </div>
  );
}
