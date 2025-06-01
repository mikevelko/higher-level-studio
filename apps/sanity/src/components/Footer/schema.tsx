import { CommonGroup, commonGroups } from "@/contentSections/commonFields";
import { defineField } from "sanity";

import customImage from "@/lib/schemas/customImage";
import customLink from "@/lib/schemas/customLink";

export default {
  name: "footer",
  title: "Footer",
  type: "document",
  groups: commonGroups,
  options: {},
  fields: [
    defineField({
      type: "string",
      name: "title",
      group: CommonGroup.Content,
      description: "For preview use only",
    }),
    defineField({
      name: "image",
      type: customImage.name,
      group: CommonGroup.Content,
    }),
    defineField({
      type: "string",
      name: "address",
      group: CommonGroup.Content,
    }),
    defineField({
      type: "string",
      name: "contactPhoneNumber1",
      group: CommonGroup.Content,
    }),
    defineField({
      type: "string",
      name: "contactPhoneNumber2",
      group: CommonGroup.Content,
    }),
    defineField({
      type: "string",
      name: "contactEmail",
      group: CommonGroup.Content,
    }),
    defineField({
      name: "facebookUrl",
      type: "string",
      group: CommonGroup.Content,
    }),
    defineField({
      name: "instagramUrl",
      type: "string",
      group: CommonGroup.Content,
    }),
    defineField({
      name: "booksyUrl",
      type: "string",
      group: CommonGroup.Content,
    }),
    defineField({
      name: "servicesLinks",
      type: "array",
      of: [{ type: customLink.name }],
      group: CommonGroup.Content,
    }),
    defineField({
      name: "copywriteText",
      type: "string",
      group: CommonGroup.Content,
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }: any) {
      return {
        title,
      };
    },
  },
};
