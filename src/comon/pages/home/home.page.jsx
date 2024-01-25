import offers from '../../../mocks/offers.json';
import recommendations from '../../../mocks/recomendations.json';

import React, { useEffect, useState } from 'react';
import { BookingSearch } from '../../components/booking-search/booking-search.component';
import { HeroBlock } from '../../components/hero-block/hero-block.component';
import { OfferList } from '../../components/offers-list/offers-list/offer-list.component';
import { RecommendationList } from '../../components/recommendation-list/recommendation-list/recommendation-list.component';
import { Tab, Tabs } from "../../components/tabs/tabs.component";
import './home.page.css';

const groupByCategory = (arr) => {
    return arr.reduce((acc, curr) => {
        const { category } = curr;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(curr);

        return acc;
    }, {});
};

const renderTabsContent = (groupedData, Component) => {
    return groupedData.length === 0 ? 'Loading...' : (
        <Tabs tabStyle="my-10">
            {groupedData.map(([category, data], index) => (
                <Tab key={`${index}-${category}`} label={category}>
                    <Component key={data.title} {...data} />
                </Tab>
            ))}
        </Tabs>
    );
};

const Home = () => {
    const [groupedOffers, setGroupedOffers] = useState([]);
    const [groupedRecommendations, setGroupedRecommendations] = useState([]);

    useEffect(() => {
        setGroupedOffers(Object.entries(groupByCategory(offers)));
        setGroupedRecommendations(Object.entries(groupByCategory(recommendations)));
    }, []);

    return (
        <>

            <div className="home-page-baner flex align-middle">
                <div className="max-w-5xl px-2 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center">
                    <h1 className='text-7xl font-semibold text-white w-full'>Discover Your Life, Travel Where You Want</h1>
                    <p className='text-3xl mt-20 font-semibold text-white w-full'>Would you explore natur paradise in the world, let’s find the best destination in world with us.</p>
                </div>
            </div>
            <div className="-mt-44">
                <Tabs tabStyle="flex p-4 bg-white w-fit rounded-t-3xl">
                    <Tab label="Flight">
                        <BookingSearch />
                    </Tab>
                    <Tab label="Hotel">
                        <div className="py-4">
                        </div>
                    </Tab>
                </Tabs>
            </div>

            <div>
                <h2 className='text-4xl font-semibold mt-40'>Special Upcoming Offers</h2>
                {renderTabsContent(groupedOffers, OfferList)}
            </div>

            <div className='max-w-5xl m-auto mt-40'>
                <HeroBlock />
            </div>

            <div>
                <h2 className='text-4xl font-semibold mt-40'>Recommended Destination</h2>
                {renderTabsContent(groupedRecommendations, RecommendationList)}
            </div>
        </>
    );
};

export default Home;