export default function About() {
    const stats = [
        {
            data: "500+",
            title: "Clients",
        },
        {
            data: "200+",
            title: "Fournisseurs",
        },
        {
            data: "1 500+",
            title: "Produits distribués",
        },
        {
            data: "100M+",
            title: "Chiffre d'affaires annuel",
        },
    ]
    return (
        <div className="flex flex-col items-start md:items-center gap-12 max-w-screen-xl mx-auto p-2 py-4 md:p-8 pb-12 text-gray-600 text-md md:text-sm">
            <div className="max-w-screen-xl px-4  md:px-8">
                <h1 className="text-3xl font-semibold text-red-500">
                    Qui sommes-nous?
                </h1>
                <p className="mt-6 text-gray-800 text-2xl font-semibold sm:text-xl">
                    Let us know how we can help
                </p>
                <p className="mt-3">
                    We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
                </p>
            </div>
            <div className="max-w-screen-xl p-4 gap-x-12 items-start justify-between lg:flex md:px-8 bg-white rounded-xl">
                <div className="sm:hidden lg:block lg:max-w-xl rounded-lg h-96 w-full sm:w-1/2 overflow-hidden object-center ">
                    <img
                        src="/warehouse.jpg"
                        className="w-full h-full object-cover object-center"
                        alt="warehouse image"
                    />                </div>
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                    <div className="max-w-2xl">
                        <h3 className="text-gray-800 text-2xl font-semibold sm:text-xl">
                            We do our best to make customers always happy
                        </h3>
                        <p className="mt-3 max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                        </p>
                    </div>
                    <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                        <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                            {
                                stats.map((item, idx) => (
                                    <li key={idx} className="">
                                        <h4 className="text-4xl text-red-500 font-semibold">{item.data}</h4>
                                        <p className="mt-3 font-medium">{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}