import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const imageSize = 170;
  return (
    <div>
      <Link href="/">
        <Image
          src="/img/logo-no-background.png"
          alt="Sotla company logo"
          width={imageSize}
          height={imageSize}
        />
      </Link>
    </div>
  );
}
