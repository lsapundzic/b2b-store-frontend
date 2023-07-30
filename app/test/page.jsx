const Env = () => {
  const getenv = process.env.TEST;

  console.log("Get variable: ", getenv);
  return (
    <main>
      <h1>Hello!</h1>
      <div>{getenv}</div>
    </main>
  );
};

export default Env;
