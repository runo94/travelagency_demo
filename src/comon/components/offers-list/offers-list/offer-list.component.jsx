import { OfferItem } from "../offer-item/offer-item.component"

export const OfferList = (offers) => {
    
    return (
        <div className="grid grid-cols-3 gap-4">
            {Object.values(offers).map(({ ...offer }) => {
                return <OfferItem {...offer} />
            })}
        </div>
    )
}