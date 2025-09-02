'use client';

import Image from 'next/image'; // **************************** Image 모듈
import { useState } from 'react';
import Calendar from 'react-calendar'; // react-calendar 모듈
import 'react-calendar/dist/Calendar.css'; // 캘린더 스타일

// 캘린더에서 사용할 변수 타입 선언
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// ******************************** 이벤트 데이터 (더미)
const events = [
    {
        id: 1,
        title: 'Lorem Ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: 2,
        title: 'Lorem Ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: 3,
        title: 'Lorem Ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />
            {/* ************************************ 이벤트 카드 ************************************ */}
            {/* ----- 헤더 ----- */}
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Events</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>
            {/* ----- 이벤트 아이템 목록 ----- */}
            <div className='flex flex-col gap-4'>
                {events.map((event) => (
                    <div
                        // 개별 이벤트 카드 스타일
                        className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple'
                        key={event.id}
                    >
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold text-gray-600'>
                                {event.title}
                            </h1>
                            <span className='text-gray-300 text-xs'>
                                {event.time}
                            </span>
                        </div>
                        <p className='mt-2 text-gray-400'>
                            {event.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default EventCalendar;
