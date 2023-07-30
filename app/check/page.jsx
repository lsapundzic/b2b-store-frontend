const Check = () => {
  console.log(`Checks page rendered...`);

  const envs = process.env.TESTER;

  console.log("Env in Checks: ", envs);
  return (
    <div>
      <h1>Hello from Checks page!</h1>
    </div>
  );
};

export default Check;
