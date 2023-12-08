

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const HeroBlock = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="w-7/12">
                <img className="rounded-8xl" src="/travelagency_demo/unsplash_tQpypKA92k8.png" />
            </div>

            <div className="w-5/12 text-start">
                <h3 className="text-4xl my-10 font-bold text-start">
                    Travel Any Corner of The World With Us
                </h3>

                <p className="text-start my-10">
                    Would you explore nature paradise in the world, let’s find the best destination in world with us, Would you explore nature paradise in the world, let’s find the best destination in world with us. Would you explore nature paradise in the world, let’s find the best destination in world with us.
                    <br/><br/>
                    Would you explore nature paradise in the world, let’s find the best destination in world with us.
                </p>

                <button
                    className={classNames(
                        'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 rounded px-3 py-2 text-md font-semibold cursor-pointer')}
                >
                    Contact Us
                </button>
            </div>
        </div>
    )
}