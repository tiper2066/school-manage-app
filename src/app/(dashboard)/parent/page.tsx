import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';

const ParentPage = () => {
    return (
        <div className='p-4 flex-1 flex gap-4 flex-col xl:flex-row'>
            {/* ===================== Left ===================== */}
            <div className='w-full xl:w-2/3'>
                {/* ----- 과목 주간 & 일간 표시 ----- */}
                <div className='h-full bg-white p-4 rounded-md'>
                    {/* **************************************************************** (John Doe)) 추가 */}
                    <h1 className='text-xl font-semibold'>
                        Schedule (John Doe)
                    </h1>
                    <BigCalendar />
                </div>
            </div>

            {/* ===================== Right ===================== */}
            <div className='w-full xl:w-1/3'>
                <Announcements />
            </div>
        </div>
    );
};
export default ParentPage;
