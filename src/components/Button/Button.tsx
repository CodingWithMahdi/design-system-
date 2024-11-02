import { cn } from "../../utils/cn";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  variant = "primary",
  size = "medium",
  disabled = false
}) => {
  const baseStyles = "rounded-full focus:outline-none transition duration-200";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };
  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={cn([
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      ])}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
