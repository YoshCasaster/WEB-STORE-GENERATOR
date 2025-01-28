import React, { useState } from 'react';
import { Image, Type, Palette, SlidersHorizontal, Plus, X, Share2, Code } from 'lucide-react';
import Preview from './components/Preview';
import StyleOptions from './components/StyleOptions';
import AdPopup from './components/AdPopup';
import ProductCard from './components/ProductCard';
import TestimonialSlider from './components/TestimonialSlider';
import SocialMedia from './components/SocialMedia';
import HtmlCode from './components/HtmlCode';

function App() {
  const [style, setStyle] = useState({
    backgroundColor: '#5865F2',
    fontFamily: 'Inter, sans-serif',
    backgroundImage: ''
  });
  
  const [section1, setSection1] = useState({
    logo: '',
    title: '',
    subtitle: ''
  });

  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [footer, setFooter] = useState('');
  const [adPopup, setAdPopup] = useState({ imageUrl: '' });
  const [showPreview, setShowPreview] = useState(true);
  const [socialMedia, setSocialMedia] = useState({
    twitter: '',
    facebook: '',
    instagram: '',
    discord: '',
    linkedin: '',
    whatsapp: '',
    telegram: ''
  });

  const addProduct = () => {
    setProducts([...products, {
      image: '',
      title: '',
      price: '',
      description: '',
      whatsappNumber: '',
      id: Date.now()
    }]);
  };

  const addTestimonial = (imageUrl) => {
    setTestimonials([...testimonials, { image: imageUrl, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: style.fontFamily }}>
      {/* Main Title */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6 px-4 shadow-lg">
        <h1 className="text-3xl font-bold text-center">NGAPAIN NGODING JIRR</h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Editor Panel */}
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Palette className="w-6 h-6" />
                Style Options
              </h2>
              <StyleOptions style={style} onChange={setStyle} />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Image className="w-6 h-6" />
                Ad Popup
              </h2>
              <AdPopup adPopup={adPopup} onChange={setAdPopup} />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Type className="w-6 h-6" />
                Section 1 - Header
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Logo URL</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={section1.logo}
                    onChange={(e) => setSection1({ ...section1, logo: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={section1.title}
                    onChange={(e) => setSection1({ ...section1, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subtitle</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={section1.subtitle}
                    onChange={(e) => setSection1({ ...section1, subtitle: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Share2 className="w-6 h-6" />
                Social Media Links
              </h2>
              <SocialMedia socialMedia={socialMedia} onChange={setSocialMedia} />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <SlidersHorizontal className="w-6 h-6" />
                  Section 2 - Products
                </h2>
                <button
                  onClick={addProduct}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  <Plus className="w-4 h-4" />
                  Add Product
                </button>
              </div>
              <div className="space-y-4">
                {products.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onChange={(updatedProduct) => {
                      const newProducts = [...products];
                      newProducts[index] = updatedProduct;
                      setProducts(newProducts);
                    }}
                    onDelete={() => {
                      setProducts(products.filter(p => p.id !== product.id));
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Section 3 - Testimonials</h2>
              <TestimonialSlider
                testimonials={testimonials}
                onAdd={addTestimonial}
                onDelete={(id) => setTestimonials(testimonials.filter(t => t.id !== id))}
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Footer</h2>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                value={footer}
                onChange={(e) => setFooter(e.target.value)}
              />
            </div>
          </div>

          {/* Preview Panel */}
          <div className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-8 space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPreview(true)}
                  className={`flex-1 px-4 py-2 rounded-md ${
                    showPreview
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className={`flex-1 px-4 py-2 rounded-md ${
                    !showPreview
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Code className="w-4 h-4 inline-block mr-2" />
                  HTML Code
                </button>
              </div>
              
              {showPreview ? (
                <Preview
                  style={style}
                  section1={section1}
                  products={products}
                  testimonials={testimonials}
                  footer={footer}
                  adPopup={adPopup}
                  socialMedia={socialMedia}
                />
              ) : (
                <HtmlCode
                  style={style}
                  section1={section1}
                  products={products}
                  testimonials={testimonials}
                  footer={footer}
                  adPopup={adPopup}
                  socialMedia={socialMedia}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6 px-4 mt-8">
        <div className="container mx-auto text-center">
          <a
            href="https://github.com/YoshCasaster"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 transition-colors inline-flex items-center gap-2"
          >
            Made with ❤️ by YoshCasaster
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;