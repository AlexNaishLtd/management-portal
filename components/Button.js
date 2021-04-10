import Link from 'next/link';

const Button = ({btnLabel, href, style}) => {
    <button className={style}>
        <Link href={href}>
            <a>{btnLabel}</a>
        </Link>
    </button>
}

export default Button;