import DefaultLayout from '@/layouts/default';

const Register = () => {
    return (
        <DefaultLayout title="Register Page">
            <div className="flex flex-col container mx-auto mx-4 my-6 border-solid border-4 border-light-blue-500">
                <input className="border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-4 my-6" />
                <input className="border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-4 my-6" />
                <div className="">
                    <button className="bg-red-500 hover:bg-red-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                        Register
                    </button>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Register;
