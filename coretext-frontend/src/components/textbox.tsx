import React from 'react';

interface TextBoxProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  copyable?: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({
  label,
  placeholder,
  value,
  onChange,
  readOnly = false,
  copyable = false,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm text-gray-600 font-medium">{label}</label>
      <div className="relative">
        <textarea
          className={`w-full h-40 p-3 border rounded-md text-sm resize-none focus:outline-none ${
            readOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
          }`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={readOnly}
        />
        {copyable && (
          <button
            onClick={handleCopy}
            className="absolute bottom-2 right-2 text-xs text-blue-500 hover:underline"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default TextBox;
