import {cn} from "../../utils/cn";

interface BadgeProps {
  text: string;
  color?: "default" | "success" | "warning" | "error";
  icon?: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  color = "default",
  icon,
  className
}) => {
  const colorClasses = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-200 text-green-800",
    warning: "bg-yellow-200 text-yellow-800",
    error: "bg-red-200 text-red-800"
  };

  return (
    <span
      className={cn([
        "inline-flex items-center px-2 py-1 rounded-full text-sm font-medium",
        colorClasses[color],
        className
      ])}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </span>
  );
};

export default Badge;
