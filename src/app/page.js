"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

const itinerary = [
  {
    day: "Día 1",
    title: "El Rodadero",
    image: "/images/dia1-rodadero.webp",
    description:
      "Disfruta del atardecer en El Rodadero. Camina por el malecón, prueba mariscos frescos y contempla el sol escondiéndose tras el mar.",
    icons: ["☀️", "🩴", "🍤", "🌇"],
  },
  {
    day: "Día 2",
    title: "Parque Tayrona – Cabo San Juan",
    image: "/images/dia2-tayrona.webp",
    description:
      "Explora la selva y relájate en una de las playas más icónicas del país. Senderos, palmeras y mar cristalino.",
    icons: ["🌴", "🏞️", "🦜", "🩱"],
  },
  {
    day: "Día 3",
    title: "Minca – Pozo Azul & Cascada Marinka",
    image: "/images/dia3-minca.webp",
    description:
      "Aventura en la Sierra Nevada. Nada en pozos naturales, contempla cascadas y respira el aire fresco de la montaña.",
    icons: ["🌄", "💧", "🥾", "🦋"],
  },
  {
    day: "Día 4",
    title: "Bahía Concha",
    image: "/images/dia4-bahiaconcha.webp",
    description:
      "Relájate en una bahía tranquila, perfecta para nadar, hacer snorkel o simplemente descansar bajo una palmera.",
    icons: ["🌊", "⛱️", "🐠", "📸"],
  },
];

function DespedidaSantaMarta({ onRestart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-xl rounded-2xl max-w-md w-full p-4 flex flex-col gap-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl md:text-2xl font-semibold text-center text-gray-700"
      >
        ¡Gracias Santa Marta por este hermoso viaje! 🌴
      </motion.h1>

      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#c8e6f7] to-[#a3c9f9]">
        {/* Fondo colinas */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-200 to-green-100 rounded-t-[30%] shadow-inner z-0" />
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-emerald-200 to-emerald-100 rounded-t-[40%] shadow-md z-0" />

        {/* Capas de nubes animadas */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -40 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-6 left-0 w-full h-full z-10"
        >
          <img
            src="/images/nube-capa1.png"
            alt="Nube capa 1"
            className="absolute left-4 top-4 w-1/3 opacity-80"
          />
          <img
            src="/images/nube-capa2.png"
            alt="Nube capa 2"
            className="absolute left-24 top-8 w-1/3 opacity-60"
          />
        </motion.div>

        {/* Avión */}
        <motion.img
          src="/images/airplane.png"
          alt="Avión"
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-12 left-0 w-32 z-20"
        />
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={onRestart}
        className="mx-auto px-6 py-2 bg-black text-white rounded-full text-sm shadow hover:bg-gray-800"
      >
        Volver al inicio
      </motion.button>
    </motion.div>
  );
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [page, setPage] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const audioRef = useRef(null);

  const next = () => {
    if (page < itinerary.length - 1) setPage(page + 1);
    else setShowFinal(true);
  };

  const prev = () => {
    if (showFinal) setShowFinal(false);
    else if (page > 0) setPage(page - 1);
    else setShowIntro(true);
  };

  const current = itinerary[page];

  useEffect(() => {
    if (showFinal && audioRef.current) {
      audioRef.current.play().catch(() => {});
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [showFinal]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF8F5] to-[#EAF2F1] flex items-center justify-center p-4">
      <audio ref={audioRef} src="/audio/final.mp3" loop />
      {showIntro ? (
        <div className="relative bg-white shadow-xl rounded-2xl max-w-md w-full overflow-hidden">
          <img
            src="/images/santa-marta-cover.png"
            alt="Portada Santa Marta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white p-6 text-center">
            <h1 className="text-3xl font-bold drop-shadow-md">
              Santa Marta en Capas
            </h1>
            <p className="text-lg mt-2 drop-shadow">Un viaje en 4 días</p>
            <button
              onClick={() => setShowIntro(false)}
              className="mt-6 px-6 py-3 bg-white text-black rounded-full text-lg font-medium shadow hover:bg-gray-100 transition"
            >
              Comenzar el viaje
            </button>
          </div>
        </div>
      ) : showFinal ? (
        <DespedidaSantaMarta
          onRestart={() => {
            setPage(0);
            setShowFinal(false);
            setShowIntro(true);
          }}
        />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white shadow-xl rounded-2xl max-w-md w-full p-4 flex flex-col gap-4"
          >
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <img
                src={current.image}
                alt={current.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800">{current.day}</h2>
              <h3 className="text-lg text-gray-600 italic">{current.title}</h3>
              <p className="mt-2 text-sm text-gray-500">
                {current.description}
              </p>
              <div className="mt-2 text-lg">{current.icons.join(" ")}</div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={prev}
                className="px-4 py-2 border rounded text-sm text-gray-700 hover:bg-gray-100"
              >
                {page === 0 ? "Inicio" : "Anterior"}
              </button>
              <button
                onClick={next}
                className="px-4 py-2 bg-black text-white rounded text-sm"
              >
                {page === itinerary.length - 1 ? "Finalizar" : "Siguiente"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </main>
  );
}
