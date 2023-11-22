import { BookingSearch } from '../../components/booking-search/booking-search.component';
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
                <Tabs>
                    <Tab label="Flight">
                        <BookingSearch />
                    </Tab>
                    <Tab label="Hotel">
                        <div className="py-4">

                        </div>
                    </Tab>

                </Tabs>
            </div>
        </>
    )
}

export default Home;