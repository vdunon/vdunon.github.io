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
    secondary: "bg-(image:--gradient-main) p-px rounded-lg",
    tertiary: "bg-transparent border-1 border-gray-400 text-gray",
  };

  if (variant == "secondary") {
    return (
        <a className={`block cursor-pointer rounded-md font-medium transition-all hover:scale-97 ${variants[variant]}`}
        href={href}
        onClick={onClick}
        >
            <span className="block bg-background rounded-md p-2 px-5 h-1/1">
              <span className="text-main">{children}</span>
            </span>
        </a>
    )
  }
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