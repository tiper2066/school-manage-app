import Announcements from '@/components/Announcements';
import EventCalendar from '@/components/EventCalendar';
import BigCalendar from '@/components/BigCalendar'; // ******************** BigCalendar 컴포넌트

const StudentPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col xl:flex-row'>
            {/* ===================== Left ===================== */}
            <div className='w-full xl:w-2/3'>
                {/* ----- 과목 주간 & 일간 표시 ----- */}
                <div className='h-full bg-white p-4 rounded-md'>
                    <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
                    {/* **************************************** BigCalendar 컴포넌트 */}
                    <BigCalendar />
                </div>
            </div>

            {/* ===================== Right ===================== */}
            <div className='w-full xl:w-1/3'>
                {/* -----  Event Calendar 와 Announcements 컴포넌트  ----- */}
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
};
export default StudentPage;
