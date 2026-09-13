import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe, FiChevronDown } from "react-icons/fi";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ml", label: "മലയാളം" },
];

const LanguageMenu = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Change language"
        className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2.5 py-1.5 text-white backdrop-blur-sm"
      >
        <FiGlobe className="h-4 w-4 shrink-0" />
        <FiChevronDown
          className={`h-3 w-3 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-32 overflow-hidden rounded-xl border border-white/10 bg-[#111511] shadow-xl">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left text-sm ${
                lang.code === current.code
                  ? "bg-green-500/20 text-green-400"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageMenu;