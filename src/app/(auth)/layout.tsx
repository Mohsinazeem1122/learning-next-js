"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

function AuthPage({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  const navItems = [
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
    { name: "Forgot Password", path: "/forgot-password" },
  ];

  return (
    <div>
      <div>
        <input
          className="border rounded p-1"
          type="text"
          placeholder="enter here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navItems.map((item) => (
        <Link
          href={item.path}
          key={item.name}
          className={pathname === item.path ? "font-bold" : "text-blue-500"}
        >
          <p className="inline-block mx-1">{item.name}</p>
        </Link>
      ))}
      {children}
    </div>
  );
}

export default AuthPage;
