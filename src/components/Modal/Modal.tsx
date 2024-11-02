import { cn } from "../../utils/cn";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  customStyles?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  customStyles
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="z-50 fixed inset-0 flex justify-center items-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={cn([
          "bg-white rounded-lg shadow-lg z-10 p-6  text-center",
          customStyles
        ])}
      >
        <h2 className="font-semibold text-lg">{title}</h2>
        <div className="mt-4">{children}</div>
        <button
          className="bg-blue-500 mt-4 px-4 py-2 rounded text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
