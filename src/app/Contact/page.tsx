"use client"
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../components/Button";
export default function Contact(){

    const contactMethods = [
        {
            icon:
                <IoCallOutline />
            ,
            contact: "Support@example.com"
        },
        {
            icon:
                <IoMailOutline />
            ,
            contact: "+1 (555) 000-000"
        },
        {
            icon:
                <IoLocationOutline />
            ,
            contact: "Mountain View, California, United State."
        },
    ]

    return (

            <div className="max-w-screen-xl mx-auto p-8 pb-12 text-gray-600 text-md md:text-sm">
                <div className="max-w-lg mx-auto gap-12 justify-between items-center lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3">
                        <h1 className="text-3xl font-semibold text-red-500">
                            Contact
                        </h1>
                        <p className="text-gray-800 text-2xl font-semibold sm:text-xl">
                            Let us know how we can help
                        </p>
                        <p>
                            We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
                        </p>
                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-3">
                                            <div className="flex-none text-gray-400">
                                                {item.icon}
                                            </div>
                                            <p>{item.contact}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5"
                        >
                            <div>
                                <label className="font-medium">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Message
                                </label>
                                <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                            </div>
                            <Button
                            text="submit"
                            type="submit"
                            variant="danger"
                            className="w-full"
                        />
                        </form>
                    </div>
                </div>
            </div>
    )
}