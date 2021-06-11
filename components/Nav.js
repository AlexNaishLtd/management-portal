import Link from 'next/link';

const Nav = () => {
    return (
        <div className="flex items-center justify-between bg-indigo-900 text-gray-100 p-4">
            <Link href="/">
                <a className="px-8 text-xl text-gray-100 hover:text-white transition duration-200">
                    Home
                </a>
            </Link>
            <div>
                <Link href="/users">
                    <a className="inline-block px-4 py-2 mr-2 rounded text-gray-100 hover:bg-white hover:text-black transition duration-300">
                        Users
                    </a>
                </Link>
                <Link href="/login">
                    <a className="inline-block px-4 py-2 mr-2 rounded text-gray-100 hover:bg-white hover:text-black transition duration-300">
                        Login
                    </a>
                </Link>
                <Link href="/register">
                    <a className="inline-block px-4 py-2 rounded text-gray-100 hover:bg-white hover:text-black transition duration-300">
                        Register
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Nav;
