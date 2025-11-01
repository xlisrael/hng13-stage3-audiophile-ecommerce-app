import React, { useState } from 'react';
import { ShoppingCart, Minus, Plus } from 'lucide-react';

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const relatedProducts = [
    { name: 'ZX7 SPEAKER', price: '$2,999', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=300&fit=crop' },
    { name: 'XX99 MARK I', price: '$1,750', img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&h=300&fit=crop' },
    { name: 'XX59', price: '$899', img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop' }
  ];

  const categories = [
    { name: 'HEADPHONES', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
    { name: 'SPEAKERS', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop' },
    { name: 'EARPHONES', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold tracking-wider">audiophile</div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#" className="hover:text-orange-500 transition">HOME</a>
            <a href="#" className="hover:text-orange-500 transition">HEADPHONES</a>
            <a href="#" className="hover:text-orange-500 transition">SPEAKERS</a>
            <a href="#" className="hover:text-orange-500 transition">EARPHONES</a>
          </div>
          <button className="hover:text-orange-500 transition">
            <ShoppingCart size={20} />
          </button>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <button className="text-gray-400 hover:text-white text-sm">Go Back</button>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-lg p-12 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=600&fit=crop" 
              alt="ZX9 Speaker"
              className="w-full max-w-sm object-contain"
            />
          </div>
          
          <div>
            <p className="text-orange-500 text-sm tracking-widest mb-4">NEW PRODUCT</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ZX9<br />SPEAKER</h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
            </p>
            <p className="text-2xl font-bold mb-8">$ 4,500</p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-100">
                <button 
                  onClick={decrementQuantity}
                  className="px-4 py-3 hover:text-orange-500 transition"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-3 font-bold">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-4 py-3 hover:text-orange-500 transition"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold transition">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features & In The Box Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">FEATURES</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally homogeneous polyurethane diaphragm for the woofer pairs perfectly with the dome-shaped cap that generates a uniformly wide dispersion field.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">IN THE BOX</h2>
            <ul className="space-y-2">
              <li className="flex text-gray-600">
                <span className="text-orange-500 font-bold mr-6 min-w-[2rem]">2x</span>
                <span>Speaker Unit</span>
              </li>
              <li className="flex text-gray-600">
                <span className="text-orange-500 font-bold mr-6 min-w-[2rem]">2x</span>
                <span>Speaker Cable</span>
              </li>
              <li className="flex text-gray-600">
                <span className="text-orange-500 font-bold mr-6 min-w-[2rem]">1x</span>
                <span>User Manual</span>
              </li>
              <li className="flex text-gray-600">
                <span className="text-orange-500 font-bold mr-6 min-w-[2rem]">1x</span>
                <span>3.5mm 5m Audio Cable</span>
              </li>
              <li className="flex text-gray-600">
                <span className="text-orange-500 font-bold mr-6 min-w-[2rem]">1x</span>
                <span>10m Optical Cable</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop" 
                alt="Speaker detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=400&fit=crop" 
                alt="Speaker in room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
            <img 
              src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600&fit=crop" 
              alt="Speakers pair"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* You May Also Like Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">YOU MAY ALSO LIKE</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((product, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gray-100 rounded-lg p-8 mb-6">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-64 object-contain mx-auto"
                  />
                </div>
                <h3 className="font-bold text-xl mb-4">{product.name}</h3>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold transition">
                  SEE PRODUCT
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition group">
              <img 
                src={category.img} 
                alt={category.name}
                className="w-32 h-32 object-cover mx-auto mb-6 rounded-full"
              />
              <h3 className="font-bold text-lg mb-3">{category.name}</h3>
              <button className="text-sm text-gray-600 group-hover:text-orange-500 transition">
                SHOP →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              BRINGING YOU THE<br />
              <span className="text-orange-500">BEST AUDIO GEAR</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration room available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=700&fit=crop" 
              alt="Person with headphones"
              className="w-full max-w-lg rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold tracking-wider mb-6">audiophile</div>
              <p className="text-gray-400 text-sm max-w-md">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
              </p>
            </div>
            <div className="flex flex-col md:items-end">
              <div className="flex space-x-8 text-sm mb-8">
                <a href="#" className="hover:text-orange-500 transition">HOME</a>
                <a href="#" className="hover:text-orange-500 transition">HEADPHONES</a>
                <a href="#" className="hover:text-orange-500 transition">SPEAKERS</a>
                <a href="#" className="hover:text-orange-500 transition">EARPHONES</a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-orange-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-orange-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-gray-400 text-sm pt-8 border-t border-gray-800">
            Copyright 2021. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}