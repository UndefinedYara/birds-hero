import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Header } from "./components/ui/header.tsx";
import { CrissCrossBirds } from "./components/ui/criss-cross-birds.tsx";

createRoot(document.getElementById("root")!).render(
  <main className="flex relative w-screen h-screen">
    <Header />
    <App />
    <CrissCrossBirds />
  </main>
);
