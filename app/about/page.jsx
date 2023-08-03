import { getData } from "../utils/getData";
import StaticContent from "../components/StaticContent";
import { ABOUT_ID } from "../utils/settings";

export default async function About() {
  console.log("About page rendered...");
  const data = await getData(ABOUT_ID);

  return (
    <main>
      <StaticContent content={data} />
    </main>
  );
}
