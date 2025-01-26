import React from 'react';

const AdPopup = ({ adPopup, onChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Advertisement Image URL</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={adPopup.imageUrl}
          onChange={(e) => onChange({ ...adPopup, imageUrl: e.target.value })}
          placeholder="https://example.com/image.jpg"
        />
      </div>
    </div>
  );
};

export default AdPopup;