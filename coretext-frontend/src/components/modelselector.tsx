import React from 'react';

interface ModelSelectorProps {
  selectedModel: string;
  onSelectModel: (model: string) => void;
}

const models = ['Paragraph', 'Points', 'Short', 'Medium', 'Long'];

const ModelSelector: React.FC<ModelSelectorProps> = ({
  selectedModel,
  onSelectModel,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 my-6">
      <span className="font-semibold text-gray-700">Model :</span>

      {/* Wrapper Rectangle */}
      <div className="flex flex-wrap gap-2 bg-gray-100 px-4 py-2 rounded-2xl shadow-md">
        {models.map((model) => (
          <button
            key={model}
            onClick={() => onSelectModel(model)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200
              ${
                selectedModel === model
                  ? 'bg-[#2CAAA2] text-white shadow'
                  : 'text-[#1A1A2E] hover:bg-gray-200'
              }`}
          >
            {model}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModelSelector;
