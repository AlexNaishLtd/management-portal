import Link from 'next/link';

const FooterLink = ({ href, label }) => {
    return (
        <Link href={href}>
            <a className="my-3 block text-black-300 hover:text-gray-100 text-sm font-medium duration-700">
                {label}
            </a>
        </Link>
    );
};

export default FooterLink;
