import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scorpion DevOps | Infraestructura y Despliegue Confiable",
  description: "Especialista en DevOps, Docker, Linux y CI/CD. Ayudo a negocios y proyectos digitales a desplegar, escalar y mantener sistemas modernos de forma segura y eficiente.",
  keywords: ["DevOps", "Docker", "Linux", "CI/CD", "Infraestructura", "Cloud", "Nginx", "Automatización"],
  authors: [{ name: "Scorpion" }],
  openGraph: {
    title: "Scorpion DevOps | Infraestructura y Despliegue Confiable",
    description: "Especialista en DevOps, Docker, Linux y CI/CD para proyectos que necesitan estabilidad y escalabilidad.",
    url: "https://scorpion.cyco.tech",
    siteName: "Scorpion DevOps",
    images: [
      {
        url: "/scorpion.jpeg",
        width: 1200,
        height: 630,
        alt: "Scorpion DevOps",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scorpion DevOps | Infraestructura y Despliegue Confiable",
    description: "Especialista en DevOps, Docker, Linux y CI/CD",
    images: ["/scorpion.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}