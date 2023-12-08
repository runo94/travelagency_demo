import { useState, useEffect } from "react";

import plane from '../../images/plane_grey.png'
import calendar from '../../images/calendar.png'
import searchIco from '../../images/search_ico.svg'

import './booking-search.component.css';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const BookingSearch = () => {

    const [from, SetFrom] = useState('Zaporizhzhia')
    const [to, SetTo] = useState('Milan')
    const [startDate, SetStartDate] = useState(new Date().toLocaleDateString())
    const [endDate, SetEndDate] = useState(new Date().toLocaleDateString())

    return (
        <div className="mx-auto max-w-full flex justify-between bg-white px-8 py-10 rounded-b-3xl rounded-tr-3xl">
            <div className={'from-to flex justify-between items-center border-2 rounded-2xl p-10 border-gray-300 bg-white'}>
                <div className="from text-left w-28">
                    <label className="text-sm text-gray-400">
                        Living from
                    </label>
                    <p className="text-md font-semibold text-gray-900">{from}</p>
                </div>

                <div className="plane mx-4">
                    <img src={plane} alt="plane" />
                </div>

                <div className="to text-right w-28">
                    <label className="text-sm text-gray-400">
                        Going to
                    </label>
                    <p className="text-md font-semibold text-gray-900">{to}</p>
                </div>
            </div>
            <div className={'leave-return flex items-center justify-between border-2  rounded-2xl p-10 border-gray-300 bg-white'}>
                <div className="leave text-left w-28">
                    <label className="text-sm  text-gray-400">
                        Leave
                    </label>
                    <p className="text-md font-semibold text-gray-900">{startDate}</p>
                </div>

                <div className="calendar mx-4">
                    <img src={calendar} alt="calendar" />
                </div>

                <div className="return text-right w-28">
                    <label className="text-sm text-gray-400">
                        Return
                    </label>
                    <p className="text-md font-semibold text-gray-900">{endDate}</p>
                </div>
            </div>
            <button className="big-search bg-blue-500 hover:bg-blue-400 rounded-8xl p-10">
                <img src={searchIco} alt="search" />
            </button>
        </div>
    )
}