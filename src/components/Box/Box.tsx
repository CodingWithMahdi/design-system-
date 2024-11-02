import { cn } from "../../utils/cn";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn(["p-4 m-2 bg-gray-100 rounded ", className])}>
      {children}
    </div>
  );
};

export default Box;
