import Content from '@/components/Content';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/components/Nav';

const Register = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Nav />
            <Header text="Register Page" />
            <Content>
                <div className="flex flex-col container mx-auto mx-4 my-6 border-solid border-4 border-light-blue-500">
                    <input className="border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-4 my-6" />
                    <input className="border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-4 my-6" />
                    <div className="">
                        <button className="bg-red-500 hover:bg-red-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                            Register
                        </button>
                    </div>
                </div>
            </Content>
            <Footer />
        </div>
    );
};

export default Register;
