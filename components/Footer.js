import Links from './Links';

const Footer = () => {
    return (
        <footer className="text-center sm:mt-10 h-auto bg-blue-500">
            <span className="m-8">A project developed by Alex and Sam Naish</span>
            <div className="flex flex-wrap flex-col">
                <h4 className="pt-2">Community Links</h4>
            </div>
            <div className="flex flex-row justify-center">
                <div className="py-2 px-2">
                    <Links linkRef="https://github.com/alexnaish" label="Alex Naish Github" />
                </div>
                <div className="p-2">
                    <Links linkRef="https://github.com/samnaish" label="Sam Naish Github" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
