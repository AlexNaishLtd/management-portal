import Link from 'next/link';

const Nav = () => {
    return (
        <div className="flex justify-between bg-blue-700 p-4">
            <Link href="/">
                <a className="px-8 text-grey-100 hover:text-gray-50 transition delay-150 duration-300 ease-in-out">
                    Home
                </a>
            </Link>
            <div>
                <Link href="/login">
                    <a className="px-8 text-grey-100 hover:text-gray-50 transition delay-150 duration-300 ease-in-out">
                        Login
                    </a>
                </Link>
                <Link href="/register">
                    <a className="px-8 text-grey-100 hover:text-gray-50 transition delay-150 duration-300 ease-in-out">
                        Register
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Nav;
