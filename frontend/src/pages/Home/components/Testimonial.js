import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Step 1: Import Link

export const Testimonial = () => {
  const testimonials = [
    {
      name: "Bonnie Green",
      title: "Developer at Random AI",
      image: "assets/Image/Bonnie.jpg",
      headline: "Very easy to integrate",
      feedback: "If you care for your time, I hands down would go with this.",
    },
    {
      name: "Joseph Mcfall",
      title: "CTO at Random",
      image: "assets/Image/Joseph.jpg",
      headline: "Efficient Collaboration",
      feedback: "If you care for your time, I hands down would go with this.",
    },
    {
      name: "Roberta Casas",
      title: "Lead Designer at Random",
      image: "assets/Image/Roberta.jpg",
      headline: "Solid Foundation for Any Project",
      feedback: "If you care for your time, I hands down would go with this.",
    },
    {
      name: "Jese Leos",
      title: "Software Engineer at Random",
      image: "assets/Image/Jese.jpg",
      headline: "Mind-blowing Experience",
      feedback: "If you care for your time, I hands down would go with this.",
    },
  ];

  return (
    <section className="my-10 px-4">
      <h2 className="text-3xl underline font-bold text-center mb-10 text-gray-800">
        Testimonial
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white border border-gray-300 rounded-lg shadow p-6"
          >
            <h3 className="text-lg font-semibold mb-2 text-blue-700">
              {testimonial.headline}
            </h3>
            <p className="text-gray-600 mb-4">{testimonial.feedback}</p>

            <div className="flex items-center space-x-4">
              
              <Link to="/">
                <img
                  className="w-14 h-14 rounded-full object-cover border hover:scale-105 transition-transform duration-200"
                  src={`/${testimonial.image}`}
                  alt={testimonial.name}
                />
              </Link>

              <div>
                <p className="font-medium text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
