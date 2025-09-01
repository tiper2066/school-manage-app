import Image from 'next/image';

const UserCard = ({ type }: { type: string }) => {
    return (
        // ***************** User Card: odd-홀수 아이템, even-짝수 아이템, flex-1 (동일한 너비)
        <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]'>
            <div className='flex items-center justify-between'>
                <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>
                    2024/25
                </span>
                <Image src='/more.png' alt='' width={20} height={20} />
            </div>
            <h1 className='text-2xl font-semibold my-4'>1,234</h1>
            <h2 className='capitalize text-sm font-medium text-gray-500'>
                {type}
            </h2>
        </div>
    );
};
export default UserCard;
