import { RecommendationItem } from "../recommendation-item/recommendation-item.component"

export const RecommendationList = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <RecommendationItem />
            <RecommendationItem />
            <RecommendationItem />
            <RecommendationItem />
        </div>
    )
}