'use client';

import Image from 'next/image';
import React from 'react';
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Totals',
        count: 106,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 53,
        fill: '#fae27c',
    },
    {
        name: 'Boys',
        count: 53,
        fill: '#c3ebfa',
    },
];

// const style = {
//     top: '50%',
//     right: 0,
//     transform: 'translate(0, -50%)',
//     lineHeight: '24px',
// };

const CountChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* ----- 차트 타이틀 ----- */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>
            {/* ----- 차트 ----- */}
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer>
                    <RadialBarChart
                        cx='50%'
                        cy='50%'
                        innerRadius='40%'
                        outerRadius='100%'
                        barSize={32}
                        data={data}
                    >
                        <RadialBar
                            // minAngle={15}
                            // label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            // clockWise
                            dataKey='count'
                        />
                        {/* <Legend
                            iconSize={10}
                            layout='vertical'
                            verticalAlign='middle'
                            wrapperStyle={style}
                        /> */}
                    </RadialBarChart>
                </ResponsiveContainer>
                {/* ----- 차트 중앙 사람 이미지 */}
                <Image
                    src='/maleFemale.png'
                    alt=''
                    width={50}
                    height={50}
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' // 정중앙 배치
                />
            </div>
            {/* ----- 범례 ----- */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaSky rounded-full'></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaYellow rounded-full'></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
                </div>
            </div>
        </div>
    );
};
export default CountChart;
