import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const ComponentWithAuth = (props: P) => {
        const router = useRouter();
        const { isAuthenticated } = useAuth();

        useEffect(() => {
            // Redirect to login if the user is not authenticated
            if (!isAuthenticated) {
                router.push('/Login'); // Redirect to login page
            }
        }, [isAuthenticated, router]); // Watch for changes in isAuthenticated

        // If the user is not authenticated, don't render the protected component
        if (!isAuthenticated) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    // Add a display name for the HOC
    ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ComponentWithAuth;
};

export default withAuth;
