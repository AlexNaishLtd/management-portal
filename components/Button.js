const variants = {
    default: 'bg-indigo-600 hover:bg-indigo-800 ring-indigo-300 hover:shadow-lg',
    default_disabled: 'cursor-not-allowed bg-indigo-200 hover:shadow',
    success: 'bg-green-500 hover:bg-green-600 ring-green-300 hover:shadow-lg',
    success_disabled: 'cursor-not-allowed bg-green-200 hover:shadow',
    warn: 'bg-yellow-500 hover:bg-yellow-600 ring-yellow-300 hover:shadow-lg',
    warn_disabled: 'cursor-not-allowed bg-yellow-200 hover:shadow',
    danger: 'bg-red-500 hover:bg-red-700 ring-red-300 hover:shadow-lg',
    danger_disabled: 'cursor-not-allowed bg-red-200 hover:shadow'
};

const baseClasses = [
    'px-6',
    'py-2',
    'mr-2',
    'mb-1',
    'text-white',
    'font-medium',
    'text-sm',
    'transition-colors',
    'duration-200',
    'rounded',
    'shadow',
    'focus:outline-none',
    'focus:ring'
].join(' ');

const Button = ({ theme = 'default', type = 'button', onClick, disabled = false, children }) => {
    const key = `${theme}${disabled ? '_disabled' : ''}`;
    const themeClasses = variants[key];
    return (
        <button
            type={type}
            className={`${baseClasses} ${themeClasses}`}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
