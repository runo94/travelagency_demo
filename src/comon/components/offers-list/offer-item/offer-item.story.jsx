import { OfferItem } from './offer-item.component';

export default {
  title: 'Offers/Item',
  component: OfferItem,
};

const Template = (args) => <OfferItem {...args} />

export const View = Template.bind({});
View.args = {
  image: "/assets/unsplash_7uXn7nudorc.png",
  badge: "Badge",
  date: "14 FEB 2022",
  booking_info: "4 Days, 3 Nights",
  title: "Ansgar Scheffold",
  price: "400"
}
