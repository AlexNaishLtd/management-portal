import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <h1>HomePage component</h1>
            <span>Some placeholder text.</span>
        </div>
    );
}

export default HomePage;
