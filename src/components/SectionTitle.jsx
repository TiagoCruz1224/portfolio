export default function SectionTitle({ icon, text, className }) {
  return (
    <h2
      className={`text-3xl ml-5 mr-5 bg-gray-200 text-center text-black border-2 border-black rounded-md px-4 py-2 ${className}`}
    >
      {icon} {text}
    </h2>
  );
}
