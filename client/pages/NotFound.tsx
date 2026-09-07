import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 text-center">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Lost in the flow</p>
        <h1 className="mb-5 text-5xl font-extrabold tracking-[-0.08em] text-foreground">404</h1>
        <p className="mb-7 text-muted-foreground">This page hasn’t been designed yet.</p>
        <Link to="/" className="inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-bold text-background">
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
