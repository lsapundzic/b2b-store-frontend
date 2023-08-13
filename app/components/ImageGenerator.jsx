"use client";

import { Image } from "antd";

export default function CustomImage(src, alt, width, height) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}
