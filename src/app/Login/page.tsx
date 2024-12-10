"use client"

import Button from "../components/Button";
import { useState } from "react";

interface FormData {
    email: string;
    password: string;
}

export default function Login() {

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3333/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("loged in successfully:", data.user);
            } else {
                const errorData = await response.json();
                console.error("login failed:", errorData);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-[calc(100vh-6rem)] md:h-[calc(100vh-3rem)] bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-200"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-200"
                        />
                    </div>
                    <div>
                        <a href="#" className="text-sm  text-gray-700 hover:text-blue-600">
                            Forgot your password?
                        </a>
                    </div>
                    <div>
                        <Button
                            text="Login"
                            type="submit"
                            variant="danger"
                            className="w-full"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
