"use client";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
});

export default function Delivery() {
    return (
        <div className="max-w-screen-xl mx-auto p-8 pb-12 text-gray-600 text-md md:text-sm ">
            <div className="flex flex-col lg:flex-row gap-12 items-center ">
                {/* Interactive Map */}
                <div id="map" className="w-full lg:w-1/2 rounded-lg overflow-hidden ">
                    <MapWithNoSSR />
                </div>

                {/* Contact Section */}
                <div className="max-w-lg space-y-3">
                    <h1 className="text-3xl font-semibold text-red-500">Livraison</h1>
                    <p className="text-gray-800 text-2xl font-semibold sm:text-xl">
                        Let us know how we can help
                    </p>
                    <p>
                        We’re here to help and answer any question you might have. We look
                        forward to hearing from you! Please fill out the form, or use the
                        contact information below.
                    </p>
                </div>
            </div>
        </div>
    );
}
