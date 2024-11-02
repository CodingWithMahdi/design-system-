import { cn } from "../../utils/cn";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
  className?: string;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, content }) => {
  return (
    <div
      className={cn([
        "fixed inset-0 transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      ])}
    >
      <div
        className={`fixed inset-0 bg-black bg-opacity-50`}
        onClick={onClose}
      ></div>
      <div
        className={cn([
          "fixed right-0 top-0 w-80 bg-white h-full shadow-lg transition-transform duration-300 transform ",
          isOpen ? "translate-x-0" : "-translate-x-96"
        ])}
      >
        {/* <button onClick={onClose} className="p-4">
          Close
        </button> */}
        <div className="p-4">{content}</div>
      </div>
    </div>
  );
};
export default Drawer;
