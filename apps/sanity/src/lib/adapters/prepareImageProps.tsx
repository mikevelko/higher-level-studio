import type { CustomImage } from "@/generated/extracted-types";
import { stegaClean } from "@sanity/client/stega";
import imageUrlBuilder from "@sanity/image-url";
import {
  ImageAspectRatio,
  type IImageProps,
} from "@shared/ui/components/ui/image/types";

import { client } from "@/lib/api/client";

const builder = imageUrlBuilder(client);

export const urlForImage = (source: CustomImage["image"]) => {
  if (!source?.asset?._ref) {
    return undefined;
  }

  return builder.image(source);
};

export const prepareImageProps = (props?: CustomImage): IImageProps => {
  if (!props || !props.image)
    return {
      src: null as unknown as string,
      alt: "",
      aspectRatio: ImageAspectRatio["1/1"],
      fill: true,
      fit: "cover",
    };

  const url = props.image.asset?._ref.endsWith("svg")
    ? urlForImage(props.image)?.url() || ""
    : urlForImage(props.image)
        ?.height(props.height)
        .fit("max")
        .auto("format")
        .url() || "";

  return {
    src: url,
    alt: props.image.alt,
    aspectRatio: stegaClean(props.aspectRatio) as ImageAspectRatio,
    fit: "contain",
    fill: true,
    sizes: "(max-width: 1280px) 100vw, 1280px",
  };
};
