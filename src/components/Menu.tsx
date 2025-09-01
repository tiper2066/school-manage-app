import Image from 'next/image';
import Link from 'next/link';

// *********************************** 사이드 메뉴 및 기타 메뉴 데이터 추가
const menuItems = [
    {
        title: 'MENU',
        items: [
            {
                icon: '/home.png',
                label: 'Home',
                href: '/',
                visible: ['admin', 'teacher', 'student', 'parent'],
            },
            {
                icon: '/teacher.png',
                label: 'Teachers',
                href: '/list/teachers',
                visible: ['admin', 'teacher'],
            },
            {
                icon: '/student.png',
                label: 'Students',
                href: '/list/students',
                visible: ['admin', 'teacher'],
            },
            {
                icon: '/parent.png',
                label: 'Parents',
                href: '/list/parents',
                visible: ['admin', 'teacher'],
            },
            {
                icon: '/subject.png',
                label: 'Subjects',
                href: '/list/subjects',
                visible: ['admin'],
            },
            {
                icon: '/class.png',
                label: 'Classes',
                href: '/list/classes',
                visible: ['admin', 'teacher'],
            },
            {
                icon: '/lesson.png',
                label: 'Lessons',
                href: '/list/lessons',
                visible: ['admin', 'teacher'],
            },
            {
                icon: '/exam.png',
                label: 'Exams',
                href: '/list/exams',
                visible: ['admin', 'teacher', 'student', 'parent'],
            },
            {
                icon: '/assignment.png',
                label: 'Assignments',
                href: '/list/assignments',
                visible: ['admin', 'teacher', 'student', 'parent'],
            },
            {
                icon: '/result.png',
                label: 'Results',
                href: '/list/results',
                visible: ['admin', 'teacher', 'student', 'parent'],
            },
            {
                icon: '/attendance.png',
                label: 'Attendance',
                href: '/list/attendance',
                visible: ['admin', 'teacher', 'student', 'parent'],
            },
            {
                icon: '/calendar.png',
                label: 'Events',
                href: '/list/events',
                visible: ['admin', 'teacher', 'student', 'parent'],
            },
            {
                icon: '/message.png',
                label: 'Messages',
                href: '/list/messages',
                visible: ['admin', 'teacher', 'student', 'parent'],
            },
            {
                icon: '/announcement.png',
                label: 'Announcements',
                href: '/list/announcements',
                visible: ['admin', 'teacher', 'student', 'parent'],
            },
        ],
    },
    {
        title: 'OTHER',
        items: [
            {
                icon: '/profile.png',
                label: 'Profile',
                href: '/profile',
                visible: ['admin', 'teacher', 'student', 'parent'],
            },
            {
                icon: '/setting.png',
                label: 'Settings',
                href: '/settings',
                visible: ['admin', 'teacher', 'student', 'parent'],
            },
            {
                icon: '/logout.png',
                label: 'Logout',
                href: '/logout',
                visible: ['admin', 'teacher', 'student', 'parent'],
            },
        ],
    },
];

const Menu = () => {
    return (
        <div className='mt-4 text-sm'>
            {/* menuitem 은 MENU 와 OTHER 로 되어있음 */}
            {menuItems.map((menuItem, index) => (
                <div className='flex flex-col gap2' key={menuItem.title}>
                    {/* -------------------- 메뉴 타이틀 부분 -------------------- */}
                    <span className='hidden lg:block text-gray-400 font-light my-4'>
                        {menuItem.title}
                    </span>
                    {/* -------------------- 메뉴 항목 부분 -------------------- */}

                    {menuItem.items.map((item, itemIndex) => (
                        <Link
                            href={item.href}
                            key={item.label}
                            className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'
                        >
                            <Image
                                src={item.icon}
                                alt=''
                                width={20}
                                height={20}
                            />
                            <span className='hidden lg:block'>
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default Menu;
