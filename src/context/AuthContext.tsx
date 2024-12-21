"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    setAuthenticated: (isAuthenticated: boolean) => void
    login: () => void; // Function to log in
    logout: () => void; // Function to log out
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

    // Function to handle login
    const login = () => {
        setAuthenticated(true); // Set authentication state to true
    };

    // Function to handle logout
    const logout = () => {
        setAuthenticated(false); // Set authentication state to false
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
