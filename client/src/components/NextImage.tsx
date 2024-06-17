import { BASE_PATH } from "@/data/consts";
import Image from "next/image";
import { ComponentProps, ReactElement } from "react";

interface NextImageProps {
  src: string;
  alt: string;
}

export default function NextImage({
  src,
  alt,
  ...props
}: NextImageProps & ComponentProps<typeof Image>): ReactElement {
  return (
    <Image
      src={(src.startsWith("/") ? BASE_PATH || "" : "") + src}
      loading="eager"
      alt={alt}
      layout="fill"
      objectFit="cover"
      style={{ imageRendering: "crisp-edges" }}
      {...props}
    />
  );
}
