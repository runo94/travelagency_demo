import { RecommendationItem } from './recommendation-item.component';

export default {
  title: 'Recomendation/Item',
  component: RecommendationItem,
};

const Template = (args) => <RecommendationItem {...args} />

export const View = Template.bind({});
View.args = {
    image: "/assets/unsplash_DlkF4-dbCOU.png",
    title: 'Ansgar Scheffold'
}