import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: "EN", label: "English", flag: "src/assets/flags/uk.png" },
  { code: "ID", label: "Indonesia", flag: "src/assets/flags/id.png" },
];

interface Props {
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSwitch: React.FC<Props> = ({ selectedLanguage, onLanguageChange }) => {
  const [open, setOpen] = useState(false);

  const selected = languages.find((lang) => lang.code === selectedLanguage) || languages[0];

  return (
    <div className="relative">
      <div
        className="flex items-center bg-[#4BD2D2] px-3 py-1 rounded-full cursor-pointer shadow-md"
        onClick={() => setOpen(!open)}
      >
        <img src={selected.flag} alt={selected.code} className="w-8 h-5 rounded-md mr-2 object-cover" />
        <span className="font-bold text-black mr-1">{selected.code}</span>
        <FaChevronDown />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setOpen(false);
              }}
              className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img src={lang.flag} alt={lang.code} className="w-5 h-3 mr-2 rounded-sm object-cover" />
              <span className="text-sm">{lang.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
