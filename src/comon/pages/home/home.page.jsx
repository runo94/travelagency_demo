import { BookingSearch } from '../../components/booking-search/booking-search.component';
import { HeroBlock } from '../../components/hero-block/hero-block.component';
import { OfferList } from '../../components/offers-list/offers-list/offer-list.component';
import { RecommendationList } from '../../components/recommendation-list/recommendation-list/recommendation-list.component';
import { Tab, Tabs } from "../../components/tabs/tabs.component";
import './home.page.css';

const Home = () => {
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
                <Tabs tabStyle="my-10">
                    <Tab label="Team">
                        <OfferList />
                    </Tab>
                    <Tab label="Couple">

                    </Tab>
                    <Tab label="Family">

                    </Tab>
                </Tabs>
            </div>

            <div className='max-w-5xl m-auto mt-40'>
                <HeroBlock />
            </div>

            <div>
                <h2 className='text-4xl font-semibold mt-40'>Recommended Destination</h2>
                <Tabs tabStyle="my-10">
                    <Tab label="Populor">
                        <RecommendationList />
                    </Tab>
                    <Tab label="Adventure">

                    </Tab>
                    <Tab label="Beath">

                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default Home;