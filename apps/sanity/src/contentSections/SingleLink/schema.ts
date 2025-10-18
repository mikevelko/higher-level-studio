import { defineField } from "sanity";

import {
  CommonGroup,
  commonGroups,
  sectionCommonFields,
} from "../commonFields";

export default {
  options: {},
  name: "section.singleLink",
  title: "Single Link",
  type: "document",
  groups: commonGroups,
  fields: [
    defineField({
      group: CommonGroup.Content,
      name: "href",
      type: "string",
    }),
    defineField({
      group: CommonGroup.Content,
      name: "text",
      type: "string",
    }),
    ...sectionCommonFields,
  ],
  preview: {
    prepare: () => ({
      title: "Single Link",
    }),
  },
};
