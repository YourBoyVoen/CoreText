import React from 'react';

const HowToUseSection = () => {
    return (
        <section className="py-16 px-4 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                    <span className="text-indigo-900">How To</span> <span className="text-teal-500">Use</span>
                </h2>
                <p className="text-gray-600 text-lg">This are steps on how to use CoreText.ai</p>
            </div>

            <div className="max-w-7xl mx-auto space-y-32">

                {/* Step 1 - Image Left, Text Right */}
                <div className="flex items-center justify-between gap-16">
                    <div className="flex-1">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative">
                            {/* Mock interface for step 1 */}
                            <div className="space-y-6">
                                <div className="flex space-x-2">
                                    <div className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Paragraph
                                    </div>
                                    <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                                        Points
                                    </div>
                                    <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                                        Short
                                    </div>
                                    <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                                        Medium
                                    </div>
                                    <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                                        Long
                                    </div>
                                </div>
                                <div className="h-48 bg-gray-50 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-gray-900">
                                <span className="text-teal-500">1</span> Choose what you want for output
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                You cant choose 4 options; paragraph, points, short, medium, long.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 2 - Text Left, Image Right */}
                <div className="flex items-center justify-between gap-16">
                    <div className="flex-1">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-gray-900">
                                <span className="text-teal-500">2</span> Type your text you want to summarize
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Enter your text you want to summarize.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            {/* Mock interface for step 2 */}
                            <div className="space-y-4">
                                <div className="bg-gray-100 rounded-lg p-6 h-48">
                                    <p className="text-gray-500 text-sm">Type your text here...</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 text-sm">Your Word</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3 - Image Left, Text Right */}
                <div className="flex items-center justify-between gap-16">
                    <div className="flex-1">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            {/* Mock interface for step 3 */}
                            <div className="space-y-4">
                                <div className="bg-gray-100 rounded-lg p-6 h-48">
                                    <p className="text-gray-500 text-sm">Your results will be here...</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 text-sm">Your Word</span>
                                    <button className="p-2 hover:bg-gray-100 rounded">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-gray-900">
                                <span className="text-teal-500">3</span> See your summarize result
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                See your summarize result and you can copy your result.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 4 - Text Left, Image Right (Final Step) */}
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-gray-900">
                            <span className="text-teal-500">4</span> Copy and Use it!
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                            Use CoreText.ai to summarize your paragraph and make your assignment done faster.
                        </p>
                    </div>
                </div>

            </div>

            {/* Connecting lines/arrows - decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* You can add decorative curved lines here if needed */}
            </div>
        </section>
    );
};

export default HowToUseSection;