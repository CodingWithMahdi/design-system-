import { useEffect } from "react";
import { cn } from "../../utils/cn";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

interface SnackBarProps {
  message: string;
  isOpen: boolean;
  duration?: number;
  className?: string;
  onClose: () => void;
}

const SnackBar: React.FC<SnackBarProps> = ({
  message,
  isOpen,
  duration = 3000,
  onClose,
  className = "",
  ...props
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    <div
      className={cn([
        "fixed bottom-5 right-5 flex transition-transform transform bg-blue-500 text-white p-4 rounded-xl shadow-lg",
        isOpen ? "translate-y-0" : "translate-y-96",
        className
      ])}
      {...props}
    >
      <ExclamationCircleIcon className="mr-2 w-6 h-6 text-white" />
      {message}
    </div>
  );
};

export default SnackBar;
