import { useState } from "react";
import { cn } from "../../lib/utils";

export default function SwapText({
  initialText,
  finalText,
  className,
  supportsHover = true,
  textClassName,
  initialTextClassName,
  finalTextClassName,
  disableClick,
  // The rest of the props are passed to the container div.
  ...props
}) {
  const [active, setActive] = useState(false);
  const common = "block transition-all duration-500 ease-[var(--default-transition)]";

  const longWord = finalText.length > initialText.length ? finalText : null;

  return (
    <div {...props} className={cn("relative overflow-hidden text-white", className)}>
      <div className={cn("group cursor-pointer select-none text-base font-bold", textClassName)}
        onClick={() => !disableClick && setActive((current) => !current)}
      >
        <span className={cn(common, initialTextClassName, {
          "flex flex-col": true,
          "-translate-y-full": active,
          "group-hover:-translate-y-full": supportsHover,
        })}
        >
          {initialText}
          {
            /* Trick to make sure it can always fit all available words after transition as the second word is set to absolute*/
            Boolean(longWord?.length) && <span className="invisible h-0">{longWord}</span>
          }
        </span>
        <span
          className={cn(`${common} absolute top-full`, finalTextClassName, {
            "-translate-y-full": active,
            "group-hover:-translate-y-full": supportsHover,
          })}
        >
          {finalText}
        </span>
      </div>
    </div>
  );
}

