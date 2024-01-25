import { RecommendationItem } from "../recommendation-item/recommendation-item.component"

export const RecommendationList = (recommendations) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {Object.values(recommendations).map((recomendation) => <RecommendationItem  {...recomendation} />)}
        </div>
    )
}