import React from 'react';

const SocialMedia = ({ socialMedia, onChange }) => {
  return (
    <div className="space-y-4">
      {Object.entries({
        twitter: 'Twitter Username',
        facebook: 'Facebook Username',
        instagram: 'Instagram Username',
        discord: 'Discord Server ID',
        linkedin: 'LinkedIn Username',
        whatsapp: 'WhatsApp Number',
        telegram: 'Telegram Username'
      }).map(([platform, label]) => (
        <div key={platform}>
          <label className="block text-sm font-medium text-gray-700">{label}</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={socialMedia[platform]}
            onChange={(e) => onChange({ ...socialMedia, [platform]: e.target.value })}
            placeholder={`Enter your ${platform} ${platform === 'whatsapp' ? 'number' : 'username'}`}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;