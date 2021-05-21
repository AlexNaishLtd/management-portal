import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default function Layout({ title, children }) {
    return (
        <div className="flex flex-col min-h-screen antialiased bg-gray-50 text-gray-800">
            <Nav />
            {title && <Header text={title} />}
            <Content>
                <div className="container">{children}</div>
            </Content>
            <Footer />
        </div>
    );
}
