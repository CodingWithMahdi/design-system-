interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="mb-2 font-medium text-gray-700 text-sm">
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
      />
      {error && <span className="mt-1 text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Input;