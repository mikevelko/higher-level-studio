import { createTemplate } from "@/lib/utils";

import defaultPreview from "./default-preview.png";
import defaultTemplate from "./default.json";

export const mapTemplates = [
  createTemplate({
    title: "Map default",
    json: defaultTemplate,
    category: "map",
    screenshot: defaultPreview.src,
  }),
];
