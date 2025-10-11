import { commonGroups, sectionCommonFields } from "../commonFields";

export default {
  options: {},
  name: "section.contactForm",
  title: "Contact Form",
  type: "document",
  groups: commonGroups,
  fields: [...sectionCommonFields],
  preview: {
    prepare: () => ({
      title: "Contact Form",
    }),
  },
};
