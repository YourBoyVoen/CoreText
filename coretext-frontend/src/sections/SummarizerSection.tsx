import React, { useState } from 'react';
import { Copy } from 'lucide-react';

const TextSummarizer = () => {
    const [selectedModel, setSelectedModel] = useState('Paragraph');
    const [inputText, setInputText] = useState('');
    const [summary, setSummary] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const models = ['Paragraph', 'Points', 'Short', 'Medium', 'Long'];

    const generateSummary = () => {
        if (!inputText.trim()) return;

        setIsProcessing(true);

        setTimeout(() => {
            let result = '';
            const sentences = inputText.split(/[.!?]+/).filter(s => s.trim().length > 10);

            switch (selectedModel) {
                case 'Points':
                    const keyPoints = sentences.slice(0, Math.min(4, sentences.length));
                    result = keyPoints.map((point, index) => `• ${point.trim()}`).join('\n');
                    break;
                case 'Short':
                    result = sentences.slice(0, 1).join('. ').trim() + '.';
                    break;
                case 'Medium':
                    result = sentences.slice(0, Math.min(2, sentences.length)).join('. ').trim() + '.';
                    break;
                case 'Long':
                    result = sentences.slice(0, Math.min(4, sentences.length)).join('. ').trim() + '.';
                    break;
                default: // Paragraph
                    const selectedSentences = sentences.slice(0, Math.min(3, sentences.length));
                    result = selectedSentences.join('. ').trim() + '.';
            }

            setSummary(result || 'Unable to generate summary. Please provide more content.');
            setIsProcessing(false);
        }, 1500);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(summary);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Model Selection */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Model:</h2>
                    <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
                        {models.map((model) => (
                            <button
                                key={model}
                                onClick={() => setSelectedModel(model)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${selectedModel === model
                                        ? 'bg-teal-500 text-white shadow-md'
                                        : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                {model}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    {/* Input Box */}
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
                        <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Type your text here..."
                            className="w-full h-80 resize-none border-none outline-none text-gray-700 placeholder-gray-400 text-lg leading-relaxed"
                        />
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <span className="text-gray-500 font-medium">Your Word</span>
                        </div>
                    </div>

                    {/* Output Box */}
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 relative">
                        <div className="h-80 overflow-y-auto">
                            {isProcessing ? (
                                <div className="flex items-center justify-center h-full">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
                                </div>
                            ) : summary ? (
                                <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                                    {summary}
                                </div>
                            ) : (
                                <div className="text-gray-400 text-lg">
                                    Your results will be here...
                                </div>
                            )}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-gray-500 font-medium">Your Word</span>
                            {summary && (
                                <button
                                    onClick={copyToClipboard}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                >
                                    <Copy className="w-5 h-5 text-gray-400" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Summarize Button */}
                <div className="text-center">
                    <button
                        onClick={generateSummary}
                        disabled={!inputText.trim() || isProcessing}
                        className="bg-teal-500 hover:bg-teal-600 disabled:bg-gray-300 text-white px-16 py-4 rounded-full text-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                    >
                        {isProcessing ? 'Processing...' : 'Summarize'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TextSummarizer;