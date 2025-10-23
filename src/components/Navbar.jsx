import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PLP Task Manager
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/tasks"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Tasks
            </Link>
            <Link
              to="/api-data"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              API Data
            </Link>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            <Link
              to="/"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/tasks"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Tasks
            </Link>
            <Link
              to="/api-data"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors"
              onClick={toggleMenu}
            >
              API Data
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
