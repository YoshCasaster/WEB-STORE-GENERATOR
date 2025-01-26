import React from 'react';

const StyleOptions = ({ style, onChange }) => {
  const colors = [
    { name: 'Discord', value: '#5865F2' },
    { name: 'Emerald', value: '#10B981' },
    { name: 'Rose', value: '#F43F5E' },
    { name: 'Amber', value: '#F59E0B' },
    { name: 'Indigo', value: '#6366F1' },
    { name: 'Sky', value: '#0EA5E9' },
    { name: 'Purple', value: '#9333EA' },
    { name: 'Pink', value: '#EC4899' },
    { name: 'Orange', value: '#F97316' },
    { name: 'Teal', value: '#14B8A6' },
    { name: 'Red', value: '#EF4444' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Green', value: '#22C55E' },
    { name: 'Yellow', value: '#EAB308' },
    { name: 'Violet', value: '#8B5CF6' }
  ];

  const fonts = [
    'Inter, sans-serif',
    'Poppins, sans-serif',
    'Roboto, sans-serif',
    'Open Sans, sans-serif',
    'Montserrat, sans-serif'
  ];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Background Type</label>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-md ${
              !style.backgroundImage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => onChange({ ...style, backgroundImage: '' })}
          >
            Solid Color
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              style.backgroundImage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => onChange({ ...style, backgroundColor: '#5865F2', backgroundImage: 'https://source.unsplash.com/random/1920x1080' })}
          >
            Image
          </button>
        </div>
      </div>

      {style.backgroundImage ? (
        <div>
          <label className="block text-sm font-medium text-gray-700">Background Image URL</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={style.backgroundImage}
            onChange={(e) => onChange({ ...style, backgroundImage: e.target.value })}
            placeholder="https://example.com/image.jpg"
          />
        </div>
      ) : (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
          <div className="grid grid-cols-5 gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                className={`w-full h-10 rounded-md border-2 ${
                  style.backgroundColor === color.value ? 'border-blue-500' : 'border-transparent'
                } hover:scale-105 transition-transform`}
                style={{ backgroundColor: color.value }}
                onClick={() => onChange({ ...style, backgroundColor: color.value })}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={style.fontFamily}
          onChange={(e) => onChange({ ...style, fontFamily: e.target.value })}
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font.split(',')[0]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StyleOptions;