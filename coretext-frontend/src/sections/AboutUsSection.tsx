const AboutUsSection = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-sm mb-2">
                <span className="text-[#1A1444]">About</span>
                <span className="text-[#5FD2C7]"> Us</span>
            </h1>

            <p className="text-sm md:text-base font-semibold text-gray-800 mb-12">
                Something behind you can saw about us
            </p>

            <div className="flex flex-col gap-12 max-w-md">
                <div>
                    <div className="text-xl mb-2">☷ <span className="font-semibold">Customizable</span></div>
                    <p className="text-gray-600 text-sm">Choose your format to match your needs.</p>
                </div>

                <div>
                    <div className="text-xl mb-2">☷ <span className="font-semibold">Summarize AI</span></div>
                    <p className="text-gray-600 text-sm">
                        Transforms long texts into concise and informative summaries in seconds.
                    </p>
                </div>

                <div>
                    <div className="text-xl mb-2">☷ <span className="font-semibold">Instant processing</span></div>
                    <p className="text-gray-600 text-sm">
                        Get summaries in real time with no waiting.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
