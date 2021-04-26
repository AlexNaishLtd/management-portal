import Copyright from './Copyright';
import FooterLink from './FooterLink';

const Footer = () => {
    return (
        <footer className="text-center sm:mt-10 h-auto bg-blue-500">
            <span className="m-8">A project developed by Sam and Alex Naish</span>
            <div className="flex flex-wrap flex-row justify-center">
                <div className="mx-8">
                    <h4 className="pt-3">Community Links</h4>
                    <div className="flex flex-row justify-center flex-col">
                        <FooterLink href="https://github.com/alexnaish" label="Alex's Github" />
                        <FooterLink href="https://github.com/samnaish" label="Sam's Github" />
                    </div>
                </div>
                <div className="mx-8">
                    <h4 className="pt-3">Terms</h4>
                    <div className="flex flex-row justify-center flex-col">
                        <FooterLink href="#" label="Terms of Service" />
                        <FooterLink href="#" label="Terms of conditions" />
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;
