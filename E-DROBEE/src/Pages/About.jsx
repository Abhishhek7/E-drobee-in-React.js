import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio9 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const categories = [
    { label: 'New Arrivals', isActive: true },
    { label: 'Best Sellers', isActive: false },
    { label: 'On Sale', isActive: false },
  ];

  const portfolioList = [
    {
      image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio32.jpg",
      title: 'Product 1',
      categories: ['Oats', 'Caloyx'],
    },
    {
      image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio31.jpg",
      title: 'Product 2',
      categories: ['Watches'],
    },
    {
      image:"https://cdn.easyfrontend.com/pictures/portfolio/portfolio29.jpg",
      title: 'Product 3',
      categories: ['Perfumes'],
    },
    {
      image:"https://cdn.easyfrontend.com/pictures/portfolio/portfolio28.jpg",
      title: 'Product 4',
      categories: ['Dye'],
    },
    {
      image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio27.jpg",
      title: 'Product 5',
      categories: ['Lotion'],
    },
    {
      image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio26.jpg",
      title: 'Product 6',
      categories: ['Cable'],
    },
    {
      image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio25.jpg",
      title: 'Product 7',
      categories: ['Perfumes'],
    },
  ];

  return (
    <section className="ezy__portfolio9 light py-14 md:py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div
          data-aos="fade-down"
          className="relative h-80 bg-cover bg-center rounded-xl overflow-hidden"
          style={{ backgroundImage: "url('/Images/about.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
            <p className="mt-4 text-lg text-gray-200 text-center max-w-2xl">
              We are dedicated to bringing you the finest selection of products and services
              tailored to meet your needs. Discover the story behind our brand.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 mt-12">
          {/* About Content */}
          <div className="col-span-1 md:col-span-4 md:mt-6 lg:mt-12">
            <div>
              <h2 className="text-3xl leading-none md:text-4xl font-semibold mb-6">
                Our Trending Products
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Discover the latest and most popular items in our collection. Curated with care,
                our trending products are designed to inspire and enhance your lifestyle.
              </p>
              <div className="flex flex-wrap mt-4">
                {categories.map((category, i) => (
                  <button
                    className={`m-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      category.isActive
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 hover:bg-blue-600 hover:text-white'
                    }`}
                    key={i}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          {portfolioList.map((portfolio, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden bg-white shadow-lg dark:bg-gray-800">
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 text-white">
                  <h5 className="text-xl font-semibold mb-2">{portfolio.title}</h5>
                  <p className="text-sm">{portfolio.categories.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio9;
