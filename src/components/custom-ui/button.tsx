import { cn } from "@/lib/utils";
import { PropsWithChildren, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: "solid" | "ghost" | "outline" | "danger" | "danger-outline";
}

export default function Button({ children, variant = "solid", ...props }: PropsWithChildren<ButtonProps>) {

    const { className } = props;

    const buttonStyles = "flex items-center justify-center gap-2 cursor-pointer select-none p-2 rounded transition duration-300 transform active:scale-[102%]";
    const ghostStyle = "bg-transparent text-gray-950 hover:bg-slate-100 hover:text-gray-900 dark:hover:bg-gray-900"
    const outlineStyle = "border border-primary dark:border-gray-800 text-primary hover:bg-primary hover:text-white"
    const dangerStyle = 'bg-red-600 hover:bg-red-700';
    const dangerOutlineStyle = 'border bg-white dark:bg-black border-red-600 text-red-600 hover:bg-red-200 hover:text-red';

    return (
        <button
            {...props}
            className={cn(buttonStyles, className, { [dangerStyle]: variant === 'danger', [dangerOutlineStyle]: variant === 'danger-outline', ['bg-gradient-to-br from-primary to-primary-high hover:to-primary-extra-high text-light']: variant === 'solid', [ghostStyle]: variant === "ghost", [outlineStyle]: variant === "outline" })}
        >
            {children}
        </button>
    );
}