// Homepage

import Image from "next/image";

export default function Homepage() {
  console.log("Main page running...");

  return (
    <div>
      <p className="bg-slate-500">I am the content</p>
      <div>
        <Image
          src="https://dummyimage.com/600x400/000/fff.jpg&text=Testdaddy"
          width="600"
          height="400"
          alt="placeholder image"
        ></Image>
      </div>
    </div>
  );
}
