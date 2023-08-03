import { getData } from "../data/getData";
import StaticContent from "../components/StaticContent";
import { CONTACT_ID } from "../utils/settings";

export default async function Contact() {
  console.log("Contact page rendered...");
  const data = await getData(CONTACT_ID);

  return (
    <main>
      <StaticContent content={data} />
    </main>
  );
}
