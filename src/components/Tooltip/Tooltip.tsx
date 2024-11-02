import { cn } from "../../utils/cn";
import { useState } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  customClass?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  customClass = ""
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="inline-block relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={cn([
            "absolute bottom-full mb-2 w-max p-2 text-white bg-neutral-600 rounded-md transition-opacity duration-300",
            customClass
          ])}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
