import { MouseEventHandler, ReactNode } from "react";

interface ButtonType {
    primary: string;
    secondary: string;
    tertiary: string;
}

interface ButtonParams {
    children: ReactNode;
    variant: "primary" | "secondary" | "tertiary";
    href?: string;
    onClick?: MouseEventHandler;
}

export default function Button({
    children,
    variant = "primary",
    href,
    onClick
}: Readonly<ButtonParams>) {
  const styles = "block cursor-pointer px-4 py-2 rounded-md font-medium transition-all hover:scale-97";
  const variants: ButtonType = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    tertiary: "bg-transparent border-1 border-gray-400 text-gray",
  };

  return (
    <a
      className={`${styles} ${variants[variant]}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
}