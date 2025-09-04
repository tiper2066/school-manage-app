import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import Image from 'next/image'; //  추가
import Link from 'next/link'; // 추가
import { role, eventsData } from '@/lib/data'; // **************** eventsData 데이터 가져오기

// ************************ 테이블의 row 테이터값에 대한 타입 선언
type Event = {
    id: number;
    title: string;
    class: string;
    date: string;
    startTime: string;
    endTime: string;
};

// ******************************************** 테이블 컬럼 설정
const columns = [
    {
        header: 'Title',
        accessor: 'title',
    },
    {
        header: 'Class',
        accessor: 'class',
    },
    {
        header: 'Date',
        accessor: 'date',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Start Time',
        accessor: 'startTime',
        className: 'hidden md:table-cell',
    },
    {
        header: 'End Time',
        accessor: 'endTime',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Actions',
        accessor: 'action',
    },
];

const EventListPage = () => {
    //  *************************************** 테이블 Row UI 구현하기 (Event 타입 적용 )
    const renderRow = (item: Event) => (
        <tr
            key={item.id}
            className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'
        >
            <td className='flex items-center gap-4 p-4'>{item.title}</td>
            <td>{item.class}</td>
            <td className='hidden md:table-cell'>{item.date}</td>
            <td className='hidden md:table-cell'>{item.startTime}</td>
            <td className='hidden md:table-cell'>{item.endTime}</td>
            <td>
                <div className='flex items-center gap-2'>
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
                            <Image
                                src='/edit.png' // ************************ view 이미지 말고 수정 이미지로 변경
                                alt=''
                                width={16}
                                height={16}
                            />
                        </button>
                    </Link>
                    {role === 'admin' && (
                        <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple'>
                            <Image
                                src='/delete.png'
                                alt=''
                                width={16}
                                height={16}
                            />
                        </button>
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className='flex items-center justify-between'>
                {/* **************************************************************** 페이지 타이틀 변경  */}
                <h1 className='hidden md:block text-lg font-semibold'>
                    All Events
                </h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    {/* 검색필드 영역 */}
                    <TableSearch />
                    {/* ---- 옵션 버튼 영역 ---- */}
                    <div className='flex items-center gap-4 self-end'>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image
                                src='/filter.png'
                                alt=''
                                width={14}
                                height={14}
                            />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image
                                src='/sort.png'
                                alt=''
                                width={14}
                                height={14}
                            />
                        </button>
                        {/* ******************************* 관리자일 경우만 추가 버튼을 보여줌  */}
                        {role === 'admin' && (
                            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                                <Image
                                    src='/plus.png'
                                    alt=''
                                    width={14}
                                    height={14}
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table
                columns={columns}
                renderRow={renderRow}
                data={eventsData} // ********************** eventsData 데이터 전달하기
            />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};
export default EventListPage;
