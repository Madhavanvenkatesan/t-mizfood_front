'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define types for user and context
interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role?: string;
}

interface UserContextType {
    user: User | null;
    fetchUser: () => Promise<void>;
    setUser: (user: User | null) => void;
}

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = async () => {
        try {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser)); // Load user from localStorage
            }
        } catch (error) {
            console.error('Failed to fetch user:', error);
            setUser(null);
        }
    };

    useEffect(() => {
        fetchUser(); // Fetch user on mount
    }, []);

    return (
        <UserContext.Provider value={{ user, fetchUser, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use UserContext
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
