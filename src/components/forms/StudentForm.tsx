'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField'; //  개별 폼 요소 컴포넌트 가져오기
import Image from 'next/image'; //   추가

// 폼 요소에 대한 검증 스키마 만들기
const schema = z.object({
    username: z
        .string()
        .min(3, { message: 'Username must be at least 3 characters long!' }) // 최소길이 및 에러메시지
        .max(20, { message: 'Username must be at most 20 characters long!' }), // 최대길이 및 에러메시지
    email: z.string().email({ message: 'Invalid email address!' }), // 이메일 유형이 검사 및 에러메시지
    password: z // 비밀번호 최소길이 및 에러메시지
        .string()
        .min(8, { message: 'Password must be at least 8 characters long!' }),
    firstName: z.string().min(1, { message: 'First name is required!' }), // 이름 최소길이 및 에러메시지
    lastName: z.string().min(1, { message: 'Last name is required!' }), // 성 최소길이 및 에러메시지
    phone: z.string().min(1, { message: 'Phone is required!' }), // 전화번호 최소길이 및 에러메시지
    address: z.string().min(1, { message: 'Address is required!' }), // 주소 최소길이 및 에러메시지
    bloodType: z.string().min(1, { message: 'Blood Type is required!' }), // 혈액형 최소길이 및 에러메시지
    birthday: z.date({ message: 'Birthday is required!' }), // 생일 검증 및 에러메시지
    sex: z.enum(['male', 'female'], { message: 'Sex is required!' }), // 성별 종류 및 필수요소 메시지
    img: z.instanceof(File, { message: 'Image is required' }), // 아바타 이미지 및 필수요소 메시지
});

type Inputs = z.infer<typeof schema>; //  InputField 컴포넌트 타입

// ******************************************************************* 함수명 수정
const StudentForm = ({
    type,
    data,
}: {
    type: 'create' | 'update';
    data?: any;
}) => {
    // React Hook Form의 useForm 훅이용한 변수 설정
    const {
        register,
        handleSubmit,
        formState: { errors },
    } =
        //  Inputs 타입 추가
        useForm<Inputs>({
            resolver: zodResolver(schema),
        });

    // React Hook Form의 handleSubmit 훅이용한 함수
    const onSubmit = handleSubmit((data) => {
        console.log(data); // 사용자가 입력한 데이터 값들을 출력함
    });

    return (
        <form className='flex flex-col gap-8' onSubmit={onSubmit}>
            {/* ************************************************************** 폼이름 수정 */}
            <h1 className='text-xl font-semibold'>Create a new student</h1>
            <span className='text-xs text-gray-400 font-medium'>
                Authentication Information
            </span>
            <div className='flex justify-between flex-wrap gap-4'>
                {/*  필드요소 컴포넌트로 수정 및 추가 : username, email, password */}
                <InputField
                    label='Username'
                    name='username'
                    defaultValue={data?.username}
                    register={register}
                    error={errors?.username}
                />
                <InputField
                    label='Email'
                    name='email'
                    defaultValue={data?.email}
                    register={register}
                    error={errors?.email}
                />
                <InputField
                    label='Password'
                    name='password'
                    type='password'
                    defaultValue={data?.password}
                    register={register}
                    error={errors?.password}
                />
            </div>
            <span className='text-xs text-gray-400 font-medium'>
                Personal Information
            </span>
            {/*  기타 필드요소 추가 : firstName, lastName, phone, address, bloodType, birthday */}
            <div className='flex justify-between flex-wrap gap-4'>
                <InputField
                    label='First Name'
                    name='firstName'
                    defaultValue={data?.firstName}
                    register={register}
                    error={errors.firstName}
                />
                <InputField
                    label='Last Name'
                    name='lastName'
                    defaultValue={data?.lastName}
                    register={register}
                    error={errors.lastName}
                />
                <InputField
                    label='Phone'
                    name='phone'
                    defaultValue={data?.phone}
                    register={register}
                    error={errors.phone}
                />
                <InputField
                    label='Address'
                    name='address'
                    defaultValue={data?.address}
                    register={register}
                    error={errors.address}
                />
                <InputField
                    label='Blood Type'
                    name='bloodType'
                    defaultValue={data?.bloodType}
                    register={register}
                    error={errors.bloodType}
                />
                <InputField
                    label='Birthday'
                    name='birthday'
                    defaultValue={data?.birthday}
                    register={register}
                    error={errors.birthday}
                    type='date'
                />
                {/*  선택 메뉴 추가 :sex(성별), img(아바타이미지)  */}
                <div className='flex flex-col gap-2 w-full md:w-1/4'>
                    <label className='text-xs text-gray-500'>Sex</label>
                    <select
                        className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
                        {...register('sex')}
                        defaultValue={data?.sex}
                    >
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                    {errors.sex?.message && (
                        <p className='text-xs text-red-400'>
                            {errors.sex.message.toString()}
                        </p>
                    )}
                </div>
                <div className='flex flex-col gap-2 w-full md:w-1/4 justify-center'>
                    <label
                        className='text-xs text-gray-500 flex items-center gap-2 cursor-pointer'
                        htmlFor='img'
                    >
                        <Image
                            src='/upload.png'
                            alt=''
                            width={28}
                            height={28}
                        />
                        <span>Upload a photo</span>
                    </label>
                    <input
                        type='file'
                        id='img'
                        {...register('img')}
                        className='hidden'
                    />
                    {errors.img?.message && (
                        <p className='text-xs text-red-400'>
                            {errors.img.message.toString()}
                        </p>
                    )}
                </div>
            </div>
            <button className='bg-blue-400 text-white p-2 rounded-md'>
                {type === 'create' ? 'Create' : 'Update'}
            </button>
        </form>
    );
};
export default StudentForm;
