import Content from '@/components/Content';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/components/Nav';

const Login = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Nav />
            <Content>
                <Header text="Login Page" />
                <div className="flex flex-col container mx-auto mx-4 my-6 border-solid border-4 border-light-blue-500">
                    <input className="border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-4 my-6" />
                    <input className="border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-4 my-6" />
                    <div>
                        <button className="bg-red-500 hover:bg-red-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                            Login
                        </button>
                    </div>
                </div>
            </Content>
            <Footer />
        </div>
    );
};

export default Login;
