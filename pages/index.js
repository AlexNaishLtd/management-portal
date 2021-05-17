import Nav from '../components/Nav';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Form from '../components/Form';

function HomePage() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Nav/>
            <Header text="Management Portal"/>
            <Content>
                <Form/>
                <span>Some placeholder text.</span>
            </Content>
            <Footer/>
        </div>
    )
};
 
export default HomePage;
  