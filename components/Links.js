import Link from 'next/link';

const Links = ({ linkRef, label }) => {
    return (
        <div>
            <Link href={linkRef}>
                <a>{label}</a>
            </Link>
        </div>
    );
};

export default Links;
