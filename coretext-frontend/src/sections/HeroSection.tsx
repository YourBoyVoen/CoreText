import React from 'react';

const HeroSection = () => {
    return (
        <section className="overscroll-none w-full min-h-screen flex flex-col justify-center items-center text-center bg-white text-black px-4 py-16">
            <h1 className="text-4xl md:text-8xl font-bold mb-4 text-[#160647]">
                Welcome to the <br />
                CoreText<span className="text-[#4BD2D2]">.</span>
                <span className="text-[#160647]">ai</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
                Turn long texts into clear, concise summaries in seconds.
            </p>
            <div className="flex items-center gap-4">
                <button className="bg-[#4BD2D2] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
                    Get Started
                </button>
            </div>
        </section>
    );
}

export default HeroSection;