export default function MenuLink({ url, text, toggleMenu }) {
  return (
    <a
      href={url}
      className='scroll-link rounded-xl border-2 border-white text-white font-bold text-3xl px-4 py-2 hover:scale-105 transition-transform duration-300 ease-in'
      onClick={toggleMenu}
    >
      {text}
    </a>
  );
}
