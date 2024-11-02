import { cn } from "../../utils/cn";

interface LoadingCircleProps {
  size?: number;
  color?: string;
  className?: string;
}

const ProgressBar: React.FC<LoadingCircleProps> = ({
  size = 45,
  color = "bg-blue-600",
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn([
        "flex bg-gray-500 rounded-full w-full h-1.5 overflow-hidden",
        className
      ])}
    >
      <div
        className={cn([
          "flex flex-col justify-center  rounded-full text-center  text-xs whitespace-nowrap transition duration-500 overflow-hidden",
          color
        ])}
        style={{ width: `${size}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
