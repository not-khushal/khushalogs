import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="p-10">Blog not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      
      {/* LEFT COLUMN: Content */}
      <div className="w-full md:w-1/2 flex flex-col min-h-screen border-r border-gray-200 bg-white z-10">
        
        <nav className="px-8 md:px-16 py-8 mb-12 flex justify-between items-center animate-fade-in-up">
           <Link to="/" className="text-xl font-medium tracking-tight">khushalogs</Link>
        </nav>

        <div className="px-8 md:px-16 mb-16 animate-fade-in-up [animation-delay:200ms] opacity-0">
          {/* ADDED DATE HERE */}
          <div className="text-xs font-mono text-gray-400 mb-4 uppercase tracking-widest">
            {blog.date}
          </div>
          <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tighter">
            {blog.title}
          </h1>
        </div>

        <div className="px-8 md:px-16 pb-20 flex-grow flex flex-col md:flex-row gap-12 animate-fade-in-up [animation-delay:400ms] opacity-0">
          
          <div className="md:w-1/3">
             <div className="text-xs font-bold text-gray-400 mb-4 tracking-widest uppercase">
                Thought
             </div>
             <p className="text-sm font-medium leading-relaxed text-gray-800 italic">
                "{blog.thought}"
             </p>
          </div>

          <div className="md:w-2/3">
            <p className="text-base leading-loose text-gray-600 whitespace-pre-line">
              {blog.content}
            </p>
            
            <div className="mt-12">
               <Link to="/" className="text-xs uppercase underline underline-offset-4 hover:text-black">
                 &larr; Back to Home
               </Link>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT COLUMN: Image */}
      <div className="w-full md:w-1/2 h-64 md:h-screen sticky top-0 animate-fade-in opacity-0 [animation-delay:600ms]">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover" 
        />
      </div>

    </div>
  );
};

export default BlogPost;