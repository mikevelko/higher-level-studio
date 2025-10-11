import { createTemplate } from "@/lib/utils";

import defaultPreview from "./default-preview.png";
import defaultTemplate from "./default.json";

export const contactFormTemplates = [
  createTemplate({
    title: "Contact form default",
    json: defaultTemplate,
    category: "contactForm",
    screenshot: defaultPreview.src,
  }),
];
