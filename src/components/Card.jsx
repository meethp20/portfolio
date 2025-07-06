import Stack from "./Stack";
import { useTheme } from "../context/ThemeContext";
export default function Card({link, description, spanStack, appName}) {
    const {theme} = useTheme()
  return (

    <div className="rounded-lg mb-4 w-full break-inside-avoid">
      <a
        href={link}
        target="_blank"
        className={`block p-6 ${
          theme === "dark"
            ? "bg-[#120B1D] border-purple-900"
            : "bg-gray-100 border-gray-200"
        } border  rounded-lg shadow hover:bg-opacity-80 hover:scale-105 transition-all duration-300`}
      > 
        <h5
          className={`mb-2 text-2xl font-mono tracking-tighter font-bold  ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
         {appName}
        </h5>
        <p
          className={`font-mono ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {" "}
          {description}{" "}
        </p>
        <div className="mt-4 flex-wrap gap-2">
          <Stack stack={spanStack} />
        </div>
      </a>

      
    </div>
  );
}
