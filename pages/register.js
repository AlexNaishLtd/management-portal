import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

const Register = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Nav/>
            <Header text="Register Page"/>
            <Content>
                <div className="flex flex-col container mx-auto mx-4 my-6 border-solid border-4 border-light-blue-500">
                    <input class="border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-4 my-6"/>
                    <input class="border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-4 my-6"/>
                    <div className="">
                        <button class="bg-red-500 hover:bg-red-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">Register</button>
                    </div>
                </div>
            </Content>
            <Footer/>
        </div>
    )
}

export default Register;
