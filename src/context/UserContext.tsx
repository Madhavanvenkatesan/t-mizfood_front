import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode } from 'react';
import apiClient from '../services/apiClient';
import { useAuth } from './AuthContext';

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
    handleLogout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated, loading, accessToken } = useAuth();
    const [user, setUser] = useState<User | null>(null);

    // Memoize the fetchUser function to prevent unnecessary re-renders
    const fetchUser = useCallback(async () => {
        if (loading || !isAuthenticated || !accessToken) {
            return;
        }

        try {
            const response = await apiClient.get('/me', {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            if (response.status === 200) {
                const userData = response.data.user;
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
            } else {
                console.error('Failed to fetch user:', response.statusText);
                setUser(null);
            }
        } catch (error) {
            console.error('Failed to fetch user:', error);
            setUser(null);
        }
    }, [loading, isAuthenticated, accessToken]); // Dependencies for fetchUser function

    // Initialize user state from localStorage on app load
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Fetch user only when authenticated, not loading, and accessToken is available
    useEffect(() => {
        if (!loading && isAuthenticated && accessToken) {
            fetchUser();
        }
    }, [isAuthenticated, loading, accessToken, fetchUser]); // Correct dependencies

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, fetchUser, setUser, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
