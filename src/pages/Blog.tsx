import { useState } from 'react';
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight, Share2, Tag, Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  leituraTime: string;
  imageUrl: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "O Futuro da Inovação Digital",
    excerpt: "Explorando as últimas tendências na transformação digital e como estão a moldar o futuro dos negócios.",
    author: "Andrade Mendonça",
    date: "15/03/2025",
    leituraTime: "5 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    category: "Tecnologia"
  },
  {
    id: 2,
    title: "Práticas Empresariais Sustentáveis",
    excerpt: "Como as empresas estão a incorporar a sustentabilidade nas suas estratégias centrais de negócio.",
    author: "Odélia Moniz",
    date: "15/03/2025",
    leituraTime: "4 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    category: "Sustentabilidade"
  },
  {
    id: 3,
    title: "Liderança na Era Moderna",
    excerpt: "Compreender o papel em evolução da liderança no ambiente empresarial dinâmico de hoje.",
    author: "Odélia Moniz",
    date: "15/03/2025",
    leituraTime: "6 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    category: "Liderança"
  },
  {
    id: 4,
    title: "IA nas Operações Empresariais",
    excerpt: "Como a inteligência artificial está a revolucionar as operações e a tomada de decisões nas empresas.",
    author: "Fernando Mabiala",
    date: "15/03/2025",
    leituraTime: "7 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    category: "Tecnologia"
  },
  {
    id: 5,
    title: "A Revolução do Trabalho Remoto",
    excerpt: "Análise dos impactos a longo prazo do trabalho remoto na cultura e produtividade das empresas.",
    author: "Odélia Moniz",
    date: "15/03/2025",
    leituraTime: "5 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?auto=format&fit=crop&q=80&w=800",
    category: "Ambiente de Trabalho"
  },
  {
    id: 6,
    title: "Perspectivas dos Mercados Financeiros",
    excerpt: "Análise especializada sobre tendências emergentes e oportunidades nos mercados financeiros globais.",
    author: "Andrade Mendonça",
    date: "15/03/2025",
    leituraTime: "8 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    category: "Finanças"
  }
];

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change with loading spinner
  const handlePageChange = (pageNum: number) => {
    if (pageNum !== currentPage) {
      setLoading(true);
      setTimeout(() => {
        setCurrentPage(pageNum);
        setLoading(false);
      }, 400); // Simula carregamento
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      <Helmet>
        <title>Blog | Multitel</title>
      </Helmet>
      {/* Dark mode toggle (básico) */}
      <div className="fixed top-4 right-4 z-50">
        <button
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-2 shadow hover:scale-105 transition"
          aria-label="Alternar modo escuro"
          title="Alternar modo escuro"
          onClick={() => {
            document.documentElement.classList.toggle('dark');
          }}
        >
          <span role="img" aria-label="Tema">🌓</span>
        </button>
      </div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Blog
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Artigos, análises e reflexões sobre tecnologia, negócios e inovação para manter-te sempre actualizado.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
        ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              tabIndex={0}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-2xl focus:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:-translate-y-1 outline-none ring-0 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-700"
              aria-label={`Artigo: ${post.title}`}
            >
              <div className="relative">
                <img
                  src={post.imageUrl}
                  alt={`Imagem ilustrativa para ${post.title}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1 shadow">
                  <Tag className="h-4 w-4" aria-hidden="true" />
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 group-focus:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.leituraTime}</span>
                  <div className="flex space-x-4">
                    <button
                      className="text-gray-400 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      title="Partilhar"
                      aria-label="Partilhar este artigo"
                    >
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors focus:scale-105 hover:scale-105 outline-none"
                      title="Ler artigo completo"
                      aria-label="Ler artigo completo"
                    >
                      <span className="mr-1">Ler</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        )}

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            className={`flex items-center px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700 transition-colors duration-200 font-medium gap-1 ${
              currentPage === 1 || loading
                ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
            aria-label="Página anterior"
            title="Página anterior"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Anterior
          </button>
          
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                disabled={loading}
                className={`w-10 h-10 rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700 transition-colors duration-200 font-semibold ${
                  currentPage === pageNum
                    ? 'bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-900 shadow-lg scale-110'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
                aria-label={`Ir para página ${pageNum}`}
                title={`Ir para página ${pageNum}`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || loading}
            className={`flex items-center px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700 transition-colors duration-200 font-medium gap-1 ${
              currentPage === totalPages || loading
                ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
            aria-label="Próxima página"
            title="Próxima página"
          >
            Seguinte
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default Blog;