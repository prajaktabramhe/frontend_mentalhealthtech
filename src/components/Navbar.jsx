import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Sync user from localStorage
  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }

  }, [location]);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");

  };

  const linkStyle = (path) =>
    location.pathname === path
      ? "bg-gray-200 text-[#297194] px-4 py-2 rounded-lg"
      : "hover:text-[#EC993D]";

  return (
    <nav className="bg-[#297194] shadow-sm px-6 py-4">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg">✨</div>
          <h1 className="text-xl font-semibold text-[#D1E1F7]">
            MindfulSpace
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#E7F2F7] items-center">

          <li><Link to="/" className={linkStyle("/")}>Home</Link></li>
          <li><Link to="/mood" className={linkStyle("/mood")}>Mood Tracker</Link></li>
          <li><Link to="/journal" className={linkStyle("/journal")}>Journal</Link></li>
          <li><Link to="/chatbot" className={linkStyle("/chatbot")}>AI Companion</Link></li>
          <li><Link to="/dashboard" className={linkStyle("/dashboard")}>Dashboard</Link></li>

          {user ? (
            <>
              <span className="text-white font-medium">
                Hi, {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-[#297194] px-4 py-2 rounded-lg"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-[#EC993D] px-4 py-2 rounded-lg text-white"
              >
                Register
              </Link>
            </>
          )}

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-[#E7F2F7]">

          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/mood" onClick={() => setIsOpen(false)}>Mood Tracker</Link></li>
          <li><Link to="/journal" onClick={() => setIsOpen(false)}>Journal</Link></li>
          <li><Link to="/chatbot" onClick={() => setIsOpen(false)}>AI Companion</Link></li>
          <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>

          {user ? (
            <>
              <span>Hi, {user.name}</span>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>

              <Link to="/register" onClick={() => setIsOpen(false)}>
                Register
              </Link>
            </>
          )}

        </ul>
      )}

    </nav>
  );
};

export default Navbar;