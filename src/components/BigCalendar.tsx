'use client';

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'; //  Views 요소 추출
import moment from 'moment';
import { calendarEvents } from '@/lib/data'; //  calendarEvents 데이터 받아오기
import 'react-big-calendar/lib/css/react-big-calendar.css'; // react-big-calendar 스타일 가져오기
import { useState } from 'react'; //  useState 모듈

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    //  현재 보기 메뉴 선택시 설정 함수
    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView); // 선택한 보기 메뉴로 변경
    };

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            date={new Date(2024, 7, 12, 8, 0, 0)} // 특정 날짜로 초기화
            startAccessor='start'
            endAccessor='end'
            views={['work_week', 'day']} //  보기 메뉴 설정
            view={view} //  현재 보기 메뉴 설정
            onView={handleOnChangeView} //  현재 보기 메뉴 설정 함수 호출
            style={{ height: '98%' }} //  높이 변경
            min={new Date(2024, 1, 1, 8, 0, 0)} //  최소 시간 설정, 2025년 2월 1일 8시 부터 (월은 0부터 시작)
            max={new Date(2025, 1, 1, 17, 0, 0)} //  최대 시간 설정, 2025년 2월 1일 17시 까지
        />
    );
};
export default BigCalendar;
