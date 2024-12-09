import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_SECRET || "complex_password_at_least_32_characters_long",
    cookieName: "myapp_session",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};

// Extend IronSessionData type
declare module "iron-session" {
    interface IronSessionData {
        user?: {
            id: string;
            email: string;
            role: string;
            token: string; // Store the JWT token
        };
    }
}