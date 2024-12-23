"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

// Define types for the user and auth state
interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role?: string; // Optional
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create AuthProvider to wrap the app and provide context
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // Initialize user state from localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []); // Runs once on mount

    const login = (user: User) => {
        try {
            setUser(user); // Update state
            localStorage.setItem("user", JSON.stringify(user)); // Persist in localStorage
        } catch (error) {
            console.error("Failed to log in:", error);
        }
    };

    const logout = () => {
        try {
            setUser(null); // Update state
            localStorage.removeItem("user"); // Remove from localStorage
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
