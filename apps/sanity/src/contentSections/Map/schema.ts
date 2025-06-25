import { defineField } from "sanity";

import {
  CommonGroup,
  commonGroups,
  sectionCommonFields,
} from "../commonFields";

export default {
  options: {},
  name: "section.map",
  title: "Map",
  type: "document",
  groups: commonGroups,
  fields: [
    defineField({
      group: CommonGroup.Content,
      name: "longitude",
      type: "number",
    }),
    defineField({
      group: CommonGroup.Content,
      name: "latitude",
      type: "number",
    }),
    defineField({
      group: CommonGroup.Content,
      name: "zoom",
      type: "number",
      description:
        "5-8: Country/region level, 10-12: City level, 13-15: Neighborhood/street level ← This is where 13 falls, 16-18: Building/address level, 19+: Very detailed street view",
    }),
    ...sectionCommonFields,
  ],
  preview: {
    prepare: () => ({
      title: "Map",
    }),
  },
};
