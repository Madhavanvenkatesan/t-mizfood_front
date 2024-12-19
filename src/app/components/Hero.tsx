import { IoCall } from 'react-icons/io5'; // Ensure correct import
import Image from 'next/image'; // Ensure you are using Next.js Image component
import Button from './Button'; // Adjust the path to your Button component

const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row w-full gap-6 py-12 md:py-20 bg-gradient-to-r from-red-700 to-red-500">
            {/* Left Content */}
            <div className="flex-1 px-6 md:px-12 flex flex-col justify-center items-center text-center md:text-left md:items-start">
                <h3 className="text-3xl font-semibold text-white md:text-5xl leading-tight">
                    L’excellence des saveurs à <span className="text-yellow-400">votre service</span>
                </h3>
                <p className="text-white mt-4 leading-relaxed">
                    Commandez en gros et bénéficiez de livraisons rapides et fiables.
                </p>
                <p className="text-white mt-2 text-sm leading-relaxed">
                    Vous souhaitez devenir client ? Contactez-nous dès maintenant.
                </p>
                <a href="tel:+330769908927" className="mt-4">
                    <Button
                        text={
                            <>
                                <IoCall className="text-lg" />
                                Contacter
                            </>
                        }
                        type="button"
                        variant="secondary"
                        className="flex items-center justify-center gap-2 px-3 py-2 bg-yellow-500 text-white hover:text-black font-medium rounded-md hover:bg-yellow-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                        />
                </a>
            </div>

            {/* Right Content */}
            <div className="flex-1 flex justify-center items-center relative px-12">
                <Image
                    src="/hero_image.svg"
                    alt="Image of a delivery service"
                    className="object-contain"
                    width={500}
                    height={500} 
                    priority 
                />
            </div>
        </div>
    );
};

export default HeroSection;
