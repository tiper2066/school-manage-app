import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar'; //  BigCalendar 컴포넌트

const TeacherPage = () => {
    return (
        //* ********************************************************************************  flex-1 추가
        <div className='p-4 flex-1 flex gap-4 flex-col xl:flex-row'>
            {/* ===================== Left ===================== */}
            <div className='w-full xl:w-2/3'>
                {/* ----- 과목 주간 & 일간 표시 ----- */}
                <div className='h-full bg-white p-4 rounded-md'>
                    {/* **************************************************************** (4A) 제거 */}
                    <h1 className='text-xl font-semibold'>Schedule</h1>

                    <BigCalendar />
                </div>
            </div>

            {/* ===================== Right ===================== */}
            <div className='w-full xl:w-1/3'>
                {/* ----- ************************************************ EventCalendar 컴포넌트 제거  ----- */}
                {/* <EventCalendar /> */}
                <Announcements />
            </div>
        </div>
    );
};
export default TeacherPage;
