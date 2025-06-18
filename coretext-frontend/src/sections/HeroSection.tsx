import React from 'react';

const HeroSection = () => {
    return (
        <section className="overscroll-none w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white px-4 py-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Selamat Datang di CoreText</h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
                Platform AI Text Assistant yang membantu Anda memahami, menganalisis, dan menghasilkan teks secara cerdas dan efisien.
            </p>
            <div className="flex gap-4">
                <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
                    Mulai Sekarang
                </button>
                <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition">
                    Pelajari Lebih Lanjut
                </button>
            </div>
        </section>
    );
}

export default HeroSection;