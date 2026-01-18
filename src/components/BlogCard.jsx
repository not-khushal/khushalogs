import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t border-gray-300">
      
      {/* Section 1: Title & Date (Spans 3 cols) */}
      <div className="md:col-span-3 flex flex-col gap-2">
        <h2 className="text-lg font-normal text-gray-400">{blog.title}</h2>
        {/* ADDED DATE HERE */}
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
          {blog.date}
        </span>
      </div>

      {/* Section 2: Content & Button (Spans 5 cols) */}
      <div className="md:col-span-5 flex flex-col justify-between pr-8">
        <p className="text-sm leading-relaxed text-gray-800 mb-6">
          {blog.excerpt}
        </p>
        <div>
          <Link 
            to={`/blog/${blog.id}`} 
            className="text-xs uppercase underline underline-offset-4 hover:text-gray-600 inline-flex items-center gap-1 group"
          >
            <span>Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Section 3: Image (Spans 4 cols) */}
      <div className="md:col-span-4">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default BlogCard;