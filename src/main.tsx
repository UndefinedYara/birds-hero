import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Header } from "./components/ui/header.tsx";
import { CrissCrossBirds } from "./components/ui/criss-cross-birds.tsx";
import { motion } from "motion/react";

createRoot(document.getElementById("root")!).render(
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className="flex relative w-screen h-screen"
  >
    <Header />
    <App />
    <CrissCrossBirds />
  </motion.main>
);
