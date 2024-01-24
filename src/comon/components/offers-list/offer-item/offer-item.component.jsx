export const OfferItem = ({image, badge, date, booking_info, title, price}) => {
    return (
        <div className="shadow-card py-4 pl-4 pr-1 rounded-4xl max-w-xs">
            <div className="flex justify-between">
                <img src={process.env.PUBLIC_URL + image} className="rounded-8xl" />
                <p className="vertical-rl">{date}</p>
            </div>
            <div className="flex justify-start my-3 mx-5">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    {badge}
                </span>

                <span className="mx-3">{booking_info}</span>
            </div>
            <h3 className="text-lg font-bold text-start ml-3">{title}</h3>
            <div className="ml-3 mr-6 flex justify-between">
                <p className="font-semibold text-start text-base text-slate-400">
                    <span className="text-lg text-start text-slate-600">{price}$</span>/Person 
                </p>

                <a href="#" className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 hover:bg-indigo-100">Book Now</a>
            </div>
        </div>
    )
}