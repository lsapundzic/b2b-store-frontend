import Image from "next/image";

export default function Logo() {
  const imageSize = 170;
  return (
    <div>
      <Image
        src="/img/logo-no-background.png"
        alt="Sotla company logo"
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
}
