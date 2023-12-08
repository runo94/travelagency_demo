
export const OfferItem = () => {
    return (
        <div className="shadow-card py-4 pl-4 pr-1 rounded-4xl">
            <div className="flex justify-between">
                <img src="/travelagency_demo/unsplash_7uXn7nudorc.png" className="rounded-8xl" />
                <p className="vertical-rl">14 FEB 2022</p>
            </div>
            <div className="flex justify-start my-3 mx-5">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    Badge
                </span>

                <span className="mx-3">4 Days, 3 Nights</span>
            </div>
            <h3 className="text-lg font-bold text-start ml-3">Ansgar Scheffold</h3>
            <div className="ml-3 mr-6 flex justify-between">
                <p className="font-semibold text-start text-base text-slate-400">
                    <span className="text-lg text-start text-slate-600">400$</span>/Person 
                </p>

                <a href="#" className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 hover:bg-indigo-100">Book Now</a>
            </div>
        </div>
    )
}