// src/components/Reviews.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { User, Flag } from 'lucide-react';

interface Reviewer {
  name: string;
  country: string;
}

interface Review {
  feedback: string;
  reviewer: Reviewer;
}

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      feedback: "He did a great job! Thank you for your excellent work!!!",
      reviewer: {
        name: "Tom G.",
        country: "Germany",
      },
    },
    {
      feedback: "Very fast and knowledgeable!",
      reviewer: {
        name: "Joseph T.",
        country: "United States",
      },
    },
    {
      feedback: "Very good man and we will collaborate a lot in the future for sure!",
      reviewer: {
        name: "Mohammad B.",
        country: "Kuwait",
      },
    },
    // Add more reviews as needed
  ];

  return (
    <section
      id="reviews"
      className="min-h-screen flex items-center justify-center relative bg-gray-900 overflow-hidden py-20"
    >
      {/* Animated background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Client Reviews
            </span>
          </h2>
          <p className="text-gray-400 mb-4">
            These reviews are from my{' '}
            <a
              href="https://www.freelancer.com/u/Osamaislam077"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300 transition-colors duration-300"
            >
              Freelancer.com profile
            </a>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{review.reviewer.name}</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">"{review.feedback}"</p>
              <div className="flex items-center">
                <Flag className="w-4 h-4 text-gray-400 mr-1" />
                <p className="text-sm text-gray-500">{review.reviewer.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
