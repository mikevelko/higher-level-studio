import { cn } from "../../../utils";
import { AlignVariant, type IRichTextProps } from "./types";

export function RichText({
  className,
  richText,
  removeInnerMargins,
  alignVariant,
}: IRichTextProps) {
  return (
    <div
      className={cn(
        "text-textColor prose max-w-full text-left dark:prose-invert lg:prose-xl",
        {
          "no-children-margins": removeInnerMargins,
          "lg:text-left": alignVariant === AlignVariant.Left,
          "lg:text-center": alignVariant === AlignVariant.Center,
          "lg:text-right": alignVariant === AlignVariant.Right,
        },
        className,
      )}
    >
      {richText}
    </div>
  );
}
