export const RecommendationItem = ({ image, title}) => {
    return (
        <div className="shadow-card py-4 px-4 rounded-4xl">
            <div className="flex justify-between">
                <img src={process.env.PUBLIC_URL + image } className="rounded-4xl" />
            </div>
            <h3 className="text-lg font-bold text-start ml-3">{title}</h3>
        </div>
    )
}