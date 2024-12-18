import Image from "next/image";
import Button from "./Button";

export default function Hero() {
    return (
        <div className="flex flex-col-reverse md:flex-row w-full py-10 md:py-20 bg-gradient-to-r from-red-700 to-red-500">
            <div className="flex-1 p-10 flex flex-col justify-center items-start">
                <h3 className="text-3xl text-white font-semibold md:text-4xl">
                L’excellence des saveurs à <span className="text-yellow-400">votre service</span>
                </h3>
                <p className="text-white leading-relaxed mt-3">
                Commandez en gros et bénéficiez de livraisons rapides et fiables.   
                </p>
                <Button
                            text="Rayons"
                            type="submit"
                            variant="secondary"
                            className="w-auto mt-4"
                        />
            </div>
            <div className=" flex-1 h-full relative flex justify-center items-center">
                <Image
                    src="hero.svg"
                    alt="delivery image svg"
                    className="object-contain w-4/5 h-4/5"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    )
}