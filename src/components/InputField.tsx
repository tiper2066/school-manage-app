import { FieldError } from 'react-hook-form';

type InputFieldProps = {
    label: string;
    type?: string; // input tpye 선택(text, email, password 등 중에)
    register: any; // react-hook-form 의 register 함수
    name: string; // react-hook-form 에 등록할 이름
    defaultValue?: string; // 기본값
    error?: FieldError; // 에러 메시지
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>; // input의 기타 속성값
};

const InputField = ({
    label,
    type = 'text', // input type 없으면 기본값 text로 설정
    register,
    name,
    defaultValue,
    error,
    inputProps,
}: InputFieldProps) => {
    return (
        // TeacherForm 컴포넌트에서 사용된 label 과 input 요소를 가져와 사용함
        <div className='flex flex-col gap-2 w-full md:w-1/4'>
            <label className='text-xs text-gray-500'>{label}</label>
            <input
                type={type}
                {...register(name)}
                className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
                {...inputProps}
                defaultValue={defaultValue}
            />
            {error?.message && (
                <p className='text-xs text-red-400'>
                    {error.message.toString()}
                </p>
            )}
        </div>
    );
};
export default InputField;
