const variants = {
    default: 'bg-indigo-600 text-white hover:bg-indigo-800 hover:text-white ring-indigo-300',
    success: 'bg-green-500 text-white hover:bg-green-600 hover:text-white ring-green-300',
    warn: 'bg-yellow-500 text-white hover:bg-yellow-600 ring-yellow-300',
    danger: 'bg-red-500 text-white hover:bg-red-700 hover:text-white ring-red-300'
};

const baseClasses = [
    'px-6',
    'py-2',
    'mr-2',
    'mb-1',
    'font-medium',
    'text-sm',
    'transition-colors',
    'duration-200',
    'rounded',
    'shadow',
    'hover:shadow-lg',
    'focus:outline-none',
    'focus:ring'
].join(' ');

const Button = ({ theme = 'default', type = 'button', onClick, disabled = false, children }) => {
    const classes = variants[theme];
    return (
        <button
            type={type}
            className={`${baseClasses} ${classes}`}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
