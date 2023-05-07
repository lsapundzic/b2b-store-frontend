import Image from "next/image";

export default function Logo() {
  const imageSize = 120;
  return (
    <div>
      <Image
        src="/public/img/png/logo-no-background.png"
        alt="Sotla company logo"
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
}
