interface ButtonProps {
    text: string; 
    onClick?: () => void; 
    type?: "button" | "submit" | "reset"; 
    variant?: "primary" | "secondary" | "danger"; 
    disabled?: boolean; 
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
    className,
}) => {
    // Define style variants
    const baseStyles = "px-4 py-1 rounded-lg font-medium transition-all duration-300";
    const variantStyles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-300",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
            {text}
        </button>
    );
};

export default Button;
