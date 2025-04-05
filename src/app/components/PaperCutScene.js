import { motion } from "framer-motion";

export default function PaperCutScene() {
  return (
    <div className="relative w-full h-screen bg-[#fdf6e3] overflow-hidden">
      {/* Fondo sin sol ni nubes */}
      <img
        src="/images/santa-marta-cover-optimized.webp"
        alt="Fondo sin sol ni nubes"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Sol con efecto 3D */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute w-24 h-24 top-16 left-16 drop-shadow-[6px_6px_4px_rgba(0,0,0,0.2)] z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="4"
              dy="4"
              stdDeviation="4"
              floodColor="#000000"
              floodOpacity="0.2"
            />
          </filter>
        </defs>
        <circle cx="50" cy="50" r="40" fill="#fcd34d" filter="url(#shadow)" />
      </motion.svg>

      {/* Nube encima del sol */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 80"
        className="absolute w-32 h-16 top-20 left-20 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.1)] z-20"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="40" y="40" width="70" height="20" fill="#ffffff" />
        <circle cx="40" cy="40" r="20" fill="#ffffff" />
        <circle cx="110" cy="40" r="20" fill="#ffffff" />
        <circle cx="75" cy="30" r="20" fill="#ffffff" />
      </motion.svg>

      {/* Nube 1 */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 80"
        className="absolute w-32 h-16 top-24 left-40 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.1)]"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="40" y="40" width="70" height="20" fill="#ffffff" />
        <circle cx="40" cy="40" r="20" fill="#ffffff" />
        <circle cx="110" cy="40" r="20" fill="#ffffff" />
        <circle cx="75" cy="30" r="20" fill="#ffffff" />
      </motion.svg>

      {/* Nube 2 */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 80"
        className="absolute w-28 h-14 top-36 left-80 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.1)]"
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="40" y="40" width="70" height="20" fill="#ffffff" />
        <circle cx="40" cy="40" r="20" fill="#ffffff" />
        <circle cx="110" cy="40" r="20" fill="#ffffff" />
        <circle cx="75" cy="30" r="20" fill="#ffffff" />
      </motion.svg>
    </div>
  );
}
