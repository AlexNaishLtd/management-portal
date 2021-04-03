import Alink from './Alink';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <footer className="text-center sm:mt-10 h-auto bg-blue-500">
            <span className="m-8">A project developed by Sam and Alex Naish</span>
            <div className="flex flex-wrap flex-row justify-center">
                <div className="mx-8">
                    <h4 className="pt-3">Community Links</h4>
                    <div className="flex flex-row justify-center flex-col">
                        <Alink href="https://github.com/alexnaish" label="Alex's Github" />
                        <Alink href="https://github.com/samnaish" label="Sam's Github" />
                    </div>
                </div>
                <div className="mx-8">
                    <h4 className="pt-3">Terms</h4>
                    <div className="flex flex-row justify-center flex-col">
                        <Alink href="#" label="Terms of Service" />
                        <Alink href="#" label="Terms of conditions" />
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;
