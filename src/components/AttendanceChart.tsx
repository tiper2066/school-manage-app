'use client';

import Image from 'next/image';
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tue',
        present: 70,
        absent: 60,
    },
    {
        name: 'Wec',
        present: 90,
        absent: 75,
    },
    {
        name: 'Thu',
        present: 90,
        absent: 75,
    },
    {
        name: 'Fri',
        present: 65,
        absent: 55,
    },
];

const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-xl h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width='100%' height='90%'>
                <BarChart width={500} height={300} data={data} barSize={20}>
                    {/* ************************ 그리드 라인 */}
                    <CartesianGrid
                        strokeDasharray='3 3'
                        vertical={false} // 수직 그리드 라인 제거
                        stroke='#ddd' // 그리드 라인 색상
                    />
                    {/* ************************ axisLine={false}: 수평/수직 축 라인 제거 */}
                    <XAxis
                        dataKey='name'
                        axisLine={false}
                        tick={{ fill: '#d1d5db' }} // X 축 텍스트 색상
                        tickLine={false} // tick 라인 제거 (tickLine: 레이블 가리키는 짧은 지시선)
                    />
                    <YAxis
                        axisLine={false}
                        tick={{ fill: '#d1d5db' }} // X 축 텍스트 색상
                        tickLine={false} // tick 라인 제거 (tickLine: 레이블 가리키는 짧은 지시선)
                    />
                    <Tooltip
                        contentStyle={{
                            // backgroundColor: 'transparent',
                            borderRadius: '10px',
                            borderColor: 'lightgray',
                        }}
                    />
                    <Legend
                        align='left'
                        verticalAlign='top'
                        // ************************ 범례 영역의 패딩
                        wrapperStyle={{
                            paddingTop: '20px',
                            paddingBottom: '40px',
                        }}
                    />
                    <Bar
                        dataKey='present'
                        fill='#fae27c'
                        // activeBar={<Rectangle fill='pink' stroke='blue' />} ** 마우스 오버시 스타일 변경
                        legendType='circle' // 범례 머리돗 모양
                        radius={[10, 10, 0, 0]} // 바의 모서리 둥글기 설정 (위쪽만 둥글게)
                    />
                    <Bar
                        dataKey='absent'
                        fill='#c3ebfa'
                        // activeBar={<Rectangle fill='gold' stroke='purple' />} ** 마우스 오버시 스타일 변경
                        legendType='circle' // 범례 머리돗 모양
                        radius={[10, 10, 0, 0]} // 바의 모서리 둥글기 설정 (위쪽만 둥글게)
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
export default AttendanceChart;
