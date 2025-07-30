import React from 'react';
import { ArrowRight, BookOpen, Clock, Calendar, Tag, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function Blog() {
  const blogPosts = [
    {
      title: 'Tecnologia e Inovação',
      description: 'As últimas tendências no mundo da tecnologia e como estão a moldar o nosso futuro.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500',
      category: 'Tecnologia',
      date: '15 de Março de 2024',
      tags: ['Inovação', 'Tecnologia', 'Futuro'],
      author: {
        name: 'Fernando Puna'
      }
    },
    {
      title: 'O Futuro do Trabalho',
      description: 'Como a inteligência artificial está a transformar o mercado de emprego.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=500',
      category: 'Negócios',
      date: '14 de Março de 2024',
      tags: ['IA', 'Mercado de Emprego', 'Transformação Digital'],
      author: {
        name: 'Andrade Mendonça'
      }
    }
  ];
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mt-2 leading-tight">
              <span className="text-blue-800 font-semibold">Descubra os </span>
              <span className="bg-gradient-to-r from-blue-900 font-light to-blue-700 bg-clip-text text-transparent">
              nossos conteúdos
              </span>
            </h2>
          </motion.div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Artigos, análises e reflexões sobre tecnologia, negócios e inovação.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center space-x-2 text-white">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white bg-white/20">
                      <User className="w-6 h-6 text-white" />
                    </span>
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center group">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
          >
            Ver todos os conteudos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
