import React from 'react';
import { X } from 'lucide-react';

const ProductCard = ({ product, onChange, onDelete }) => {
  return (
    <div className="border rounded-lg p-4 relative">
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        <X className="w-5 h-5" />
      </button>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={product.image}
            onChange={(e) => onChange({ ...product, image: e.target.value })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={product.title}
            onChange={(e) => onChange({ ...product, title: e.target.value })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={product.price}
            onChange={(e) => onChange({ ...product, price: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Discount (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={product.discount || ''}
            onChange={(e) => onChange({ ...product, discount: e.target.value ? Number(e.target.value) : '' })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Product Type</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={product.type || 'normal'}
            onChange={(e) => onChange({ ...product, type: e.target.value })}
          >
            <option value="normal">Normal</option>
            <option value="bestseller">Best Seller</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={product.whatsappNumber}
            onChange={(e) => onChange({ ...product, whatsappNumber: e.target.value })}
            placeholder="Example: 6281234567890"
          />
          <p className="mt-1 text-sm text-gray-500">Include country code without + or spaces (e.g., 6281234567890)</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            value={product.description}
            onChange={(e) => onChange({ ...product, description: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;