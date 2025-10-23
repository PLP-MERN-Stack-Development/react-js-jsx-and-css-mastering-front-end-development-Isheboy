import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Database, ListTodo, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Welcome to{" "}
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PLP Task Manager
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern task management application built with React, Tailwind CSS
          v4, and shadcn/ui
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button asChild size="lg">
            <Link to="/tasks">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/api-data">View API Demo</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <ListTodo className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Task Management</CardTitle>
              <CardDescription>
                Create, complete, and organize your tasks efficiently
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Add and delete tasks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Mark tasks as complete
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Filter by status
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  LocalStorage persistence
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Database className="h-10 w-10 text-primary mb-2" />
              <CardTitle>API Integration</CardTitle>
              <CardDescription>
                Fetch and display data from external APIs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Real-time data fetching
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Loading & error states
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Search functionality
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Pagination support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <svg
                className="h-10 w-10 text-primary mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <CardTitle>Theme Support</CardTitle>
              <CardDescription>
                Light and dark mode with smooth transitions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Light & dark themes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  System preference detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Persistent theme selection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Smooth transitions
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Built With Modern Technologies
            </CardTitle>
            <CardDescription className="text-center">
              Leveraging the latest tools and frameworks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold">React 19</p>
                <p className="text-sm text-muted-foreground">UI Framework</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold">Tailwind CSS v4</p>
                <p className="text-sm text-muted-foreground">Styling</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold">shadcn/ui</p>
                <p className="text-sm text-muted-foreground">Components</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold">Vite 7</p>
                <p className="text-sm text-muted-foreground">Build Tool</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
