import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Preview = ({ style, section1, products, testimonials, footer, adPopup, socialMedia }) => {
  const [showAd, setShowAd] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  const getSocialIcon = (platform) => {
    const icons = {
      twitter: 'https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white',
      facebook: 'https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white',
      instagram: 'https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white',
      discord: 'https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white',
      linkedin: 'https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white',
      whatsapp: 'https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white',
      telegram: 'https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white'
    };
    return icons[platform];
  };

  const backgroundStyle = style.gradient
    ? { background: style.gradient }
    : style.pattern
    ? { 
        backgroundColor: style.backgroundColor || '#5865F2',
        backgroundImage: style.pattern,
        backgroundRepeat: 'repeat'
      }
    : style.backgroundImage
    ? {
        backgroundImage: `url(${style.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : { backgroundColor: style.backgroundColor };

  const calculateDiscountedPrice = (price, discount) => {
    if (!discount) return price;
    const discountAmount = (price * discount) / 100;
    return (price - discountAmount).toFixed(2);
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div style={backgroundStyle} className={`min-h-screen relative ${style.particles ? 'particles-bg' : ''}`}>
        {style.particles && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="particles">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    '--x': `${Math.random() * 100}%`,
                    '--y': `${Math.random() * 100}%`,
                    '--duration': `${10 + Math.random() * 20}s`,
                    '--delay': `${-Math.random() * 20}s`,
                    '--size': `${2 + Math.random() * 3}px`,
                    '--opacity': Math.random() * 0.5 + 0.2
                  } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
        )}

        {/* Ad Popup */}
        {showAd && adPopup.imageUrl && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="relative animate-pulse">
              <div className="absolute inset-0 bg-white opacity-25 animate-ping rounded-lg"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-xl">
                <button
                  onClick={() => setShowAd(false)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                >
                  <X className="w-4 h-4" />
                </button>
                <img src={adPopup.imageUrl} alt="Advertisement" className="max-w-full sm:max-w-sm rounded-lg" />
              </div>
            </div>
          </div>
        )}

        {/* Section 1 */}
        <div className="text-center pt-16 pb-8 px-4">
          {section1.logo && (
            <img
              src={section1.logo}
              alt="Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
            />
          )}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{section1.title}</h1>
          <p className="text-lg sm:text-xl text-white opacity-90 mb-8">{section1.subtitle}</p>

          {/* Social Media Badges */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {Object.entries(socialMedia).map(([platform, username]) => {
              if (!username) return null;
              const href = {
                twitter: `https://twitter.com/${username}`,
                facebook: `https://fb.com/${username}`,
                instagram: `https://instagram.com/${username}`,
                discord: `https://discord.gg/${username}`,
                linkedin: `https://linkedin.com/in/${username}`,
                whatsapp: `https://wa.me/${username}`,
                telegram: `https://t.me/${username}`
              }[platform];

              return (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform"
                >
                  <img src={getSocialIcon(platform)} alt={platform} className="h-6 sm:h-8" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Section 2 - Products */}
        <div className="px-4 py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">PRODUK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                  product.type === 'bestseller' ? 'border-2 border-yellow-400 transform hover:scale-105 transition-transform' : ''
                }`}
              >
                {product.type === 'bestseller' && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full font-semibold text-sm z-10">
                    Best Seller
                  </div>
                )}
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold text-sm z-10">
                    -{product.discount}%
                  </div>
                )}
                {product.image && (
                  <div className="relative">
                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                    {product.type === 'bestseller' && (
                      <div className="absolute inset-0 bg-yellow-400 opacity-10"></div>
                    )}
                  </div>
                )}
                <div className={`p-4 ${product.type === 'bestseller' ? 'bg-gradient-to-br from-white to-yellow-50' : ''}`}>
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <div className="mb-2">
                    {product.discount > 0 ? (
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 line-through">${product.price}</p>
                        <p className="text-2xl font-bold text-red-600">
                          ${calculateDiscountedPrice(product.price, product.discount)}
                        </p>
                      </div>
                    ) : (
                      <p className="text-2xl font-bold text-green-600">Rp{product.price}</p>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button
                    onClick={() => {
                      const text = encodeURIComponent(`Saya ingin membeli ${product.title} berikut`);
                      const number = product.whatsappNumber || '1234567890';
                      window.open(`https://wa.me/${number}?text=${text}`, '_blank');
                    }}
                    className={`w-full py-2 rounded-md text-white transition-colors ${
                      product.type === 'bestseller'
                        ? 'bg-yellow-500 hover:bg-yellow-600'
                        : 'bg-green-500 hover:bg-green-600'
                    }`}
                  >
                    Beli Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 - Testimonials */}
        <div className="px-4 py-8 bg-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">TESTIMONIAL</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-48 sm:h-64 overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <img
                    key={testimonial.id}
                    src={testimonial.image}
                    alt="Testimonial"
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm sm:text-base">{footer}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Preview;
