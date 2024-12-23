"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

function Profile() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/Login');
        }
    }, [router, user]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return <h1>Profile Page</h1>;
}

export default Profile;
