export default function ContactTab({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        right-0
        top-1/2
        -translate-y-1/2
        z-50
        bg-sky-500
        hover:bg-sky-600
        text-white
        px-4
        py-8
        rounded-l-xl
        font-semibold
        tracking-widest
        writing-mode-vertical
      "
    >
      Contact Us
    </button>
  );
}