import React from 'react';
import { Plus, X } from 'lucide-react';

const TestimonialSlider = ({ testimonials, onAdd, onDelete }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Add Testimonial Image URL</label>
        <div className="flex gap-2 mt-1">
          <input
            type="text"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="https://example.com/testimonial.jpg"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value) {
                onAdd(e.target.value);
                e.target.value = '';
              }
            }}
          />
          <button
            onClick={() => {
              const input = document.querySelector('input[placeholder="https://example.com/testimonial.jpg"]');
              if (input.value) {
                onAdd(input.value);
                input.value = '';
              }
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="relative">
            <button
              onClick={() => onDelete(testimonial.id)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={testimonial.image}
              alt="Testimonial"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;