import { defineField } from "sanity";

import customImage from "@/lib/schemas/customImage";

import {
  CommonGroup,
  commonGroups,
  sectionCommonFields,
} from "../commonFields";

export default {
  options: {},
  name: "section.hero",
  title: "Hero",
  type: "document",
  groups: commonGroups,
  fields: [
    defineField({
      name: "globalData",
      title: "Global Data",
      type: "reference",
      to: [{ type: "section.hero" }],
      group: CommonGroup.Content,
    }),
    defineField({
      group: CommonGroup.Content,
      name: "image",
      type: customImage.name,
    }),
    ...sectionCommonFields,
  ],
  preview: {
    select: {
      image: "image.image",
    },
    prepare({ image }: any) {
      return {
        subtitle: "Hero",
        media: image,
      };
    },
  },
};
