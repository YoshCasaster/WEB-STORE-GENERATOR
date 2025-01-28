import React, { useRef } from 'react';
import { Check, Copy } from 'lucide-react';

const HtmlCode = ({ style, section1, products, testimonials, footer, adPopup, socialMedia }) => {
  const [copied, setCopied] = React.useState(false);
  const codeRef = useRef(null);

  const calculateDiscountedPrice = (price, discount) => {
    if (!discount) return price;
    const discountAmount = (price * discount) / 100;
    return (price - discountAmount).toFixed(2);
  };

  const generateHtml = () => {
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

    const backgroundStyle = style.backgroundImage
      ? `background-image: url('${style.backgroundImage}'); background-size: cover; background-position: center; background-repeat: no-repeat;`
      : `background-color: ${style.backgroundColor};`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${section1.title || 'My Landing Page'}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: ${style.fontFamily};
        }
        .testimonial-slider {
            transition: transform 0.5s ease-in-out;
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
    </style>
</head>
<body>
    <div style="${backgroundStyle}" class="min-h-screen relative">
        ${adPopup.imageUrl ? `
        <!-- Ad Popup -->
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div class="relative animate-pulse">
                <div class="absolute inset-0 bg-white opacity-25 animate-ping rounded-lg"></div>
                <div class="relative bg-white p-4 rounded-lg shadow-xl">
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                    <img src="${adPopup.imageUrl}" alt="Advertisement" class="max-w-full sm:max-w-sm rounded-lg">
                </div>
            </div>
        </div>
        ` : ''}

        <!-- Section 1 -->
        <div class="text-center pt-16 pb-8 px-4">
            ${section1.logo ? `
            <img src="${section1.logo}" alt="Logo" class="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg">
            ` : ''}
            <h1 class="text-3xl sm:text-4xl font-bold text-white mb-2">${section1.title}</h1>
            <p class="text-lg sm:text-xl text-white opacity-90 mb-8">${section1.subtitle}</p>

            <!-- Social Media Badges -->
            <div class="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                ${Object.entries(socialMedia)
                  .filter(([_, username]) => username)
                  .map(([platform, username]) => {
                    const href = {
                      twitter: `https://twitter.com/${username}`,
                      facebook: `https://fb.com/${username}`,
                      instagram: `https://instagram.com/${username}`,
                      discord: `https://discord.gg/${username}`,
                      linkedin: `https://linkedin.com/in/${username}`,
                      whatsapp: `https://wa.me/${username}`,
                      telegram: `https://t.me/${username}`
                    }[platform];
                    return `
                    <a href="${href}" target="_blank" rel="noopener noreferrer" class="transform hover:scale-105 transition-transform">
                        <img src="${getSocialIcon(platform)}" alt="${platform}" class="h-6 sm:h-8">
                    </a>
                    `;
                  }).join('')}
            </div>
        </div>

        <!-- Section 2 - Products -->
        <div class="px-4 py-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-white text-center mb-8">PRODUK</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                ${products.map(product => `
                <div class="relative bg-white rounded-lg shadow-lg overflow-hidden ${
                  product.type === 'bestseller' ? 'border-2 border-yellow-400 transform hover:scale-105 transition-transform' : ''
                }">
                    ${product.type === 'bestseller' ? `
                    <div class="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full font-semibold text-sm z-10">
                        Best Seller
                    </div>
                    ` : ''}
                    ${product.discount > 0 ? `
                    <div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold text-sm z-10">
                        -${product.discount}%
                    </div>
                    ` : ''}
                    ${product.image ? `
                    <div class="relative">
                        <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover">
                        ${product.type === 'bestseller' ? `
                        <div class="absolute inset-0 bg-yellow-400 opacity-10"></div>
                        ` : ''}
                    </div>
                    ` : ''}
                    <div class="${product.type === 'bestseller' ? 'p-4 bg-gradient-to-br from-white to-yellow-50' : 'p-4'}">
                        <h3 class="text-xl font-bold mb-2">${product.title}</h3>
                        <div class="mb-2">
                            ${product.discount > 0 ? `
                            <div class="space-y-1">
                                <p class="text-sm text-gray-500 line-through">Rp${product.price}</p>
                                <p class="text-2xl font-bold text-red-600">
                                    Rp${calculateDiscountedPrice(product.price, product.discount)}
                                </p>
                            </div>
                            ` : `
                            <p class="text-2xl font-bold text-green-600">$${product.price}</p>
                            `}
                        </div>
                        <p class="text-gray-600 mb-4">${product.description}</p>
                        <button onclick="window.open('https://wa.me/${product.whatsappNumber || '1234567890'}?text=${encodeURIComponent(`Saya ingin membeli ${product.title} berikut`)}', '_blank')" 
                            class="w-full py-2 rounded-md text-white transition-colors ${
                              product.type === 'bestseller'
                                ? 'bg-yellow-500 hover:bg-yellow-600'
                                : 'bg-green-500 hover:bg-green-600'
                            }">
                            Beli Sekarang
                        </button>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>

        <!-- Section 3 - Testimonials -->
        <div class="px-4 py-8 bg-white">
            <h2 class="text-2xl sm:text-3xl font-bold text-center mb-8">TESTIMONIAL</h2>
            <div class="max-w-4xl mx-auto">
                <div class="relative h-48 sm:h-64 overflow-hidden rounded-lg">
                    <div class="flex testimonial-slider h-full" id="testimonialSlider">
                        ${testimonials.map(testimonial => `
                        <img src="${testimonial.image}" alt="Testimonial" class="w-full h-full object-cover flex-shrink-0">
                        `).join('')}
                    </div>
                </div>
                <div class="flex justify-center mt-4 gap-2">
                    ${testimonials.map((_, index) => `
                    <button onclick="showTestimonial(${index})" class="w-3 h-3 rounded-full transition-colors bg-gray-300 testimonial-dot"></button>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-8 text-center">
            <div class="max-w-4xl mx-auto px-4">
                <p class="text-sm sm:text-base">${footer}</p>
            </div>
        </footer>
    </div>

    <script>
        let currentTestimonial = 0;
        const testimonialCount = ${testimonials.length};
        
        function showTestimonial(index) {
            const slider = document.getElementById('testimonialSlider');
            const dots = document.querySelectorAll('.testimonial-dot');
            
            currentTestimonial = index;
            slider.style.transform = \`translateX(-\${index * 100}%)\`;
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('bg-blue-500', i === index);
                dot.classList.toggle('bg-gray-300', i !== index);
            });
        }

        setInterval(() => {
            if (testimonialCount > 1) {
                showTestimonial((currentTestimonial + 1) % testimonialCount);
            }
        }, 3000);
    </script>
</body>
</html>`;
  };

  const copyToClipboard = () => {
    const code = generateHtml();
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-semibold">Generated HTML Code</h3>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy Code
            </>
          )}
        </button>
      </div>
      <div className="p-4 max-h-[calc(100vh-200px)] overflow-auto">
        <pre className="text-sm whitespace-pre-wrap break-words" ref={codeRef}>
          {generateHtml()}
        </pre>
      </div>
    </div>
  );
};

export default HtmlCode;
