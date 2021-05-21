import Content from '@/components/Content';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/components/Nav';

function HomePage() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Nav />
            <Header text="Management Portal" />
            <Content>
                <span>Some placeholder text.</span>
            </Content>
            <Footer />
        </div>
    );
}

export default HomePage;
