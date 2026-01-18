import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogs';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black px-8 md:px-40 font-sans overflow-hidden">
      
      <div className="animate-fade-in-up">
        <Navbar />
      </div>

      <header className="mt-24 mb-12 animate-fade-in-up [animation-delay:200ms] opacity-0">
        <h1 className="text-7xl md:text-9xl font-light tracking-tighter mb-8">
          spaghetti thoughts
        </h1>
        
        <div className="w-96 h-px bg-black mb-12"></div>

        <div className="flex flex-col items-end">
          <div className="max-w-xl text-left"> 
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
                Trying to make sense of the entropy. I write to debug my own thoughts—sometimes profound, sometimes just noise, but always honest. This is a repository of fleeting moments, hard lessons, and the occasional good idea that survived the chaos. Welcome to the inside of my head.
            </p>
          </div>
        </div>
      </header>

      <section>
        {/* CHANGED HERE: We use [...blogs].reverse() to show the newest added blog first */}
        {[...blogs].reverse().map((blog, index) => (
          <div 
            key={blog.id} 
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: `${index * 150 + 500}ms` }} 
          >
            <BlogCard blog={blog} />
          </div>
        ))}
        <div className="w-full h-px bg-gray-300 animate-fade-in opacity-0 [animation-delay:1000ms]"></div>
      </section>

      <section className="py-32 text-center animate-fade-in-up opacity-0 [animation-delay:1200ms]">
        <h2 className="text-4xl md:text-5xl font-light mb-6">
            Have a thought?
        </h2>
        <a 
          href="mailto:khaitankhushal28@gmail.com" 
          className="text-sm uppercase underline underline-offset-4 hover:text-gray-600 inline-flex items-center gap-1 group"
        >
            <span>Contact Us</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </a>
      </section>

      <div className="animate-fade-in opacity-0 [animation-delay:1400ms]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;