import { motion } from "framer-motion";

export default function PalmTreeScene() {
  return (
    <div className="w-full aspect-video overflow-hidden rounded-xl">
      <svg
        viewBox="0 0 1024 576"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Background image */}
        <image
          href="/images/dia2-tayrona-bg-optimized.jpg"
          x="0"
          y="0"
          width="1024"
          height="576"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Animated main palm tree with 3D effect */}
        <motion.image
          href="/images/palm-tree-optimized.webp"
          x="540"
          y="-20"
          width="360"
          height="400"
          transform="translate(200 180)"
          style={{
            filter: "drop-shadow(10px 10px 8px rgba(0, 0, 0, 0.3))",
            transformOrigin: "center",
          }}
          animate={{
            rotate: [0, -3, 3, -3, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  );
}
