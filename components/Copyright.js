const Copyright = () => {
    const thisYear = new Date();
    return (
        <div className="pt-2">
            <div className="flex pb-2 px-3 m-auto pt-3 border-t border-gray-500 text-black-400 text-sm flex-col md:flex-row max-w-6xl">
                <div className="mt-2">
                    © Copyright {thisYear.getFullYear()}. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Copyright;
