import offers from '../../../../mocks/offers.json'
import { OfferItem } from "../offer-item/offer-item.component"

export const OfferList = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {offers.map(({ ...offer }) => {
                return <OfferItem {...offer} />
            })}
        </div>
    )
}