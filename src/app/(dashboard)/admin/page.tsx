import CountChart from '@/components/CountChart';
import UserCard from '@/components/UserCard';

const AdminPage = () => {
    // 모바일 너비 수직, 데스크탑 너비 수평 정렬
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>
            {/* ===================== Left ===================== */}
            <div className='w-full lg:w-2/3 flex flex-col gap-8'>
                {/* ----- User Cards 4종: 줄바끔 가능 ----- */}
                <div className='flex gap-4 justify-between flex-wrap'>
                    <UserCard type='student' />
                    <UserCard type='teacher' />
                    <UserCard type='parent' />
                    <UserCard type='staff' />
                </div>
                {/* ----- 중간 차트 영역: Count & Attendance  ----- */}
                <div className='flex gap-4 flex-col lg:flex-row'>
                    {/* Count 차트  */}
                    <div className='w-full lg:w-1/3 h-[450px]'>
                        <CountChart />
                    </div>
                    {/* Attendance 차트  */}
                    <div className='w-full lg:w-2/3 h-[450px]'></div>
                </div>
                {/* ----- Bottom 차트 영역  ----- */}
                <div className=''></div>
            </div>
            {/* ===================== Right ===================== */}
            <div className='w-full lg:w-1/3'>Right</div>
        </div>
    );
};
export default AdminPage;
