"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

// Define types for the auth state
interface AuthContextType {
    isAuthenticated: boolean;
    accessToken: string | null;
    login: (token: string) => void;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // Start as loading

    // Check if user is authenticated from localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem("accessToken");
        if (storedToken) {
            setAccessToken(storedToken); // Set token if it exists
            setIsAuthenticated(true); // User is authenticated if a valid token exists
        }
        setLoading(false); // Ensure loading is set to false after checking localStorage
    }, []); // Runs once on mount

    // Handle login, storing the access token in localStorage
    const login = (token: string) => {
        try {
            setAccessToken(token); // Store token in state
            setIsAuthenticated(true); // Set user as authenticated
            localStorage.setItem('accessToken', token);           
        } catch (error) {
            console.error("Failed to log in:", error);
        }
    };

    // Handle logout, clearing the token from state and localStorage
    const logout = () => {
        try {
            setAccessToken(null); // Remove token from state
            setIsAuthenticated(false); // Set user as not authenticated
            localStorage.removeItem("accessToken"); // Remove token from localStorage         
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, accessToken, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
