import "./globals.css";

export const metadata = {
  title: "Santa Marta Journal",
  description: "Tu viaje en 4 días",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
