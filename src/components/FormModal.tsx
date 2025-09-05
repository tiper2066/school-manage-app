'use client';

import dynamic from 'next/dynamic'; // ******************************** 동적 컴포넌트 모듈
import Image from 'next/image';
import { JSX, useState } from 'react'; // ************************************* JSX 추출

// import TeacherForm from './forms/TeacherForm'; // 정적 컴포넌트 가져오기 비활성
// import StudentForm from './forms/StudentForm';

// ******************************************************************** 최적화를 위한 동적 컴포넌트 가져오기 (로딩 중 표시 포함 )
const TeacherForm = dynamic(() => import('./forms/TeacherForm'), {
    loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import('./forms/StudentForm'), {
    loading: () => <h1>Loading...</h1>,
});
// ****************** 그 외에 또 다른 폼들을 만들었다면.. (예, ParentForm.tsx, SubjectForm.tsx, 등) 여기에 계속 선언해주면됨

// **************************************************************** 가져온 폼 컴포넌트를 변수로 선언한다.
const forms: {
    [key: string]: (type: 'create' | 'update', data?: any) => JSX.Element; // type 값을 key로 저장함, 이 key 값이 table 값이 됨
} = {
    teacher: (type, data) => <TeacherForm type={type} data={data} />,
    student: (type, data) => <StudentForm type={type} data={data} />,
    // ************************** 만일 기타로 가져온  다른 폼들이 있다면 여기에 계속 추가해주면됨
};

const FormModal = ({
    table,
    type,
    data,
    id,
}: {
    table: // 어떤 테이블을 사용하는지 선택
    | 'teacher'
        | 'student'
        | 'parent'
        | 'subject'
        | 'class'
        | 'lesson'
        | 'exam'
        | 'assignment'
        | 'result'
        | 'attendance' //  아직 만들지 않음
        | 'event'
        | 'announcement';
    type: 'create' | 'update' | 'delete'; // 액션 타입 선택
    data?: any; // 테이블에서 사용하는 데이터 선택
    id?: number; // 업데이트, 삭제 시에만 필요
}) => {
    const size = type === 'create' ? 'w-8 h-8' : 'w-7 h-7'; // 액션 버튼의 크기 선택, create 와 update or delete
    const bgColor = // 액션 버튼의 배경색 선택, create: yellow, update: skyblue, delete: purple
        type === 'create'
            ? 'bg-lamaYellow'
            : type === 'update'
            ? 'bg-lamaSky'
            : 'bg-lamaPurple';

    const [open, setOpen] = useState(false); //  모달 오픈 여부

    //  Delete 타입일 때만 다른 폼 구현하기
    const Form = () => {
        // delete 타입이면서 id가 있으면....
        return type === 'delete' && id ? (
            <form action='' className='p-4 flex flex-col gap-4'>
                <span className='text-center font-medium'>
                    All data will be lost. Are you sure you want to delete this{' '}
                    {table}?
                </span>
                {/* 삭제 컨펌 버튼  */}
                <button className='bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center'>
                    Delete
                </button>
            </form>
        ) : // 타입이 create 또는 update 일 경우,
        // *************************************************************** 조건에 맞는 개별 폼 추가
        // <StudentForm type='create' />
        type === 'create' || type === 'update' ? (
            forms[table](type, data)
        ) : (
            'Form not found!'
        );
    };

    return (
        <>
            {/* --- 액션 버튼 :  Create 과 edit, delete 버튼이 서로 크기, 색상, 아이콘, 이벤트가 다름 --- */}
            <button
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
                onClick={() => setOpen(true)} //  모달 오픈상태로 변경
            >
                {/* ----- 이미지 이름과 type 명을 동일하게 사용함  */}
                <Image src={`/${type}.png`} alt='' width={16} height={16} />
            </button>
            {/*  모달이 열리면 보여주는 폼 UI  */}
            {open && (
                // 전체 영역 어두운 오버레이 컨테이너
                <div className='w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center'>
                    {/* --- 모달 창 컨테이너 : 브라우저 너비에 따라 창너비를 90%, 70%, 60%, 40% 로 설정 --- */}
                    <div className='bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
                        {/* -- Delete 타입일 경우 Form 표시 --- */}
                        <Form />
                        {/* -- 닫기 버튼 --- */}
                        <div
                            className='absolute top-4 right-4 cursor-pointer'
                            onClick={() => setOpen(false)}
                        >
                            <Image
                                src='/close.png'
                                alt=''
                                width={14}
                                height={14}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FormModal;
