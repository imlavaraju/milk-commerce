import React from 'react';

function About() {
  const owners = [
    {
      id: 1,
      name: 'Nagendra',
      position: 'Founder & CEO',
      imageUrl: 'https://via.placeholder.com/150',
      bio: 'Nagendra is the founder of SRI VIDYA DAIRY LIFE, with over 15 years of experience in the dairy industry. His vision is to provide the purest and freshest milk products to the world.',
    },
    {
      id: 2,
      name: 'Lavaraju (Lattu)',
      position: 'Co-Founder & COO',
      imageUrl: 'https://via.placeholder.com/150',
      bio: 'Lavaraju is the co-founder and operational head. She ensures that all processes are smooth, from production to delivery, and is committed to maintaining the quality of the products.',
    },
    {
      id: 3,
      name: 'Prasad Kalaga',
      position: 'Chief Marketing Officer',
      imageUrl: 'https://via.placeholder.com/150',
      bio: 'Prasad leads the marketing team with his strategic vision, ensuring that the brand is known for quality, authenticity, and commitment to health-conscious consumers.',
    },
  ];

  return (
    <section className="text-gray-600 body-font bg-white dark:bg-slate-900">
      <div className="container mx-auto flex flex-col md:flex-col items-center md:px-24 md:py-10">
        <div className="lg:flex-grow md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal mb-4">
            Meet Our Owners
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-8 px-4 md:px-0">
            We are a dedicated team working to bring you the best milk products with the purest quality.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {owners.map((owner) => (
            <div key={owner.id} className="w-full sm:w-1/2 lg:w-1/3 text-center mb-8">
              <img
                src={owner.imageUrl}
                alt={owner.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{owner.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">{owner.position}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{owner.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
