import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import StarBackground from "@/components/StarBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Rota não encontrada:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <StarBackground />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          color: "#fff",
          padding: "1rem",
        }}
      >
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
          Parece que não tem mais nada por aqui...
        </p>
        <Link
          to="/"
          style={{
            padding: "1rem 1.6rem",
            backgroundColor: "#7c3aed",
            color: "#fff",
            borderRadius: "25px",
          }}
        >
          Voltar
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
