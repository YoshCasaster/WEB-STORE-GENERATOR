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

  const gradients = [
    { name: 'Sunset', value: 'linear-gradient(to right, #FF512F, #DD2476)' },
    { name: 'Ocean', value: 'linear-gradient(to right, #2193b0, #6dd5ed)' },
    { name: 'Purple Love', value: 'linear-gradient(to right, #cc2b5e, #753a88)' },
    { name: 'Fresh Grass', value: 'linear-gradient(to right, #00b09b, #96c93d)' },
    { name: 'Dark Skies', value: 'linear-gradient(to right, #283E51, #4B79A1)' },
    { name: 'Deep Space', value: 'linear-gradient(to right, #000000, #434343)' },
    { name: 'Cotton Candy', value: 'linear-gradient(to right, #D4145A, #FBB03B)' },
    { name: 'Northern Lights', value: 'linear-gradient(to right, #4ECDC4, #556270)' }
  ];

  const patterns = [
    { name: 'Circuit Board', value: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' },
    { name: 'Diagonal Lines', value: 'url("https://www.transparenttextures.com/patterns/diagonal-lines.png")' },
    { name: 'Dots', value: 'url("https://www.transparenttextures.com/patterns/dots.png")' },
    { name: 'Hexagons', value: 'url("https://www.transparenttextures.com/patterns/hexellence.png")' },
    { name: 'Grid', value: 'url("https://www.transparenttextures.com/patterns/grid-me.png")' }
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
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-md ${
              !style.backgroundImage && !style.gradient && !style.pattern && !style.particles
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => onChange({ ...style, backgroundImage: '', gradient: '', pattern: '', particles: false })}
          >
            Solid Color
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              style.gradient ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => onChange({ ...style, backgroundImage: '', gradient: gradients[0].value, pattern: '', particles: false })}
          >
            Gradient
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              style.pattern ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => onChange({ ...style, backgroundImage: '', gradient: '', pattern: patterns[0].value, particles: false })}
          >
            Pattern
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              style.backgroundImage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => onChange({ ...style, backgroundImage: 'https://source.unsplash.com/random/1920x1080', gradient: '', pattern: '', particles: false })}
          >
            Image
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              style.particles ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => onChange({ ...style, backgroundImage: '', gradient: '', pattern: '', particles: true })}
          >
            Particles
          </button>
        </div>
      </div>

      {style.gradient ? (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gradient Background</label>
          <div className="grid grid-cols-2 gap-2">
            {gradients.map((gradient) => (
              <button
                key={gradient.name}
                className={`h-20 rounded-md border-2 ${
                  style.gradient === gradient.value ? 'border-blue-500' : 'border-transparent'
                } hover:scale-105 transition-transform`}
                style={{ background: gradient.value }}
                onClick={() => onChange({ ...style, gradient: gradient.value })}
                title={gradient.name}
              />
            ))}
          </div>
        </div>
      ) : style.pattern ? (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pattern Background</label>
          <div className="grid grid-cols-2 gap-2">
            {patterns.map((pattern) => (
              <button
                key={pattern.name}
                className={`h-20 rounded-md border-2 ${
                  style.pattern === pattern.value ? 'border-blue-500' : 'border-transparent'
                } hover:scale-105 transition-transform bg-gray-100`}
                style={{ backgroundImage: pattern.value }}
                onClick={() => onChange({ ...style, pattern: pattern.value })}
                title={pattern.name}
              />
            ))}
          </div>
        </div>
      ) : style.backgroundImage ? (
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