import Image from "next/image";

export default function Logo() {
  const imageSize = 150;
  const source = "/img/logo-no-background.png";
  return (
    <div>
      <Image
        src={source}
        alt="Sotla company logo"
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
}
