import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { BLOG_POSTS, FAQS } from '../data/hospitalData';
import { BlogPost } from '../types';
import { AdBanner } from '../components/layout/AdBanner';
import { Link } from 'react-router-dom';

export const BlogFaqPage: React.FC = () => {
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [faqSearch, setFaqSearch] = useState('');

  const faqCategories = ['All', 'Appointments', 'Insurance', 'Hospital Stay', 'Emergency', 'Diagnostics'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = activeFaqCategory === 'All' || faq.category === activeFaqCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-orange-900/40 border border-amber-400/30 px-2.5 py-1 rounded-full mb-2">
            Knowledge & Patient Answers
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Health Insights & Frequently Asked Questions
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Evidence-based medical advice written by our senior consultants and comprehensive answers for your hospital visit.
          </p>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Medical Editorial
              </span>
              <h2 className="text-2xl font-black text-stone-900 mt-1">
                Latest Health Articles
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                      <span className="font-bold text-orange-800 bg-amber-100 border border-amber-200 px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-extrabold text-base text-stone-900 mb-2 leading-snug hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="text-[11px] text-stone-500 pt-3 border-t border-orange-50 flex items-center justify-between">
                      <span className="font-semibold text-stone-800">{post.authorName}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveArticle(post)}
                    className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-sm shadow-orange-600/20"
                  >
                    Read Full Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-orange-100 overflow-hidden max-h-[85vh] flex flex-col">
            <div className="p-5 bg-gradient-to-r from-stone-900 to-orange-950 text-white flex items-center justify-between shrink-0">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                {activeArticle.category} • {activeArticle.readTime}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-white hover:text-amber-300 p-1 cursor-pointer font-bold"
              >
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-stone-900">
                {activeArticle.title}
              </h2>
              <div className="text-xs text-stone-500 pb-2 border-b border-orange-50 flex items-center justify-between">
                <div>
                  By <strong className="text-stone-800">{activeArticle.authorName}</strong> ({activeArticle.authorRole})
                </div>
                <span>{activeArticle.date}</span>
              </div>
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-56 object-cover rounded-2xl"
              />
              <p className="text-sm text-stone-700 leading-relaxed font-serif">
                {activeArticle.content}
              </p>
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950">
                💡 <strong>HospitalSee Health Advisory:</strong> For personalized medical evaluations, schedule an appointment with {activeArticle.authorName} via our online portal.
              </div>
              <div className="pt-2">
                <Link
                  to="/appointments"
                  onClick={() => setActiveArticle(null)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs text-center block shadow-md shadow-orange-600/20"
                >
                  Book Doctor Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Frequently Asked Questions Section */}
      <section className="py-16 bg-[#fffaf5] border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Answers & Help
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Everything you need to know about OPD booking, billing, TPA cashless claims, and visiting hours.
            </p>
          </div>

          {/* Search FAQs */}
          <div className="mb-6 relative">
            <Search className="w-4 h-4 text-orange-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQs by question or keyword..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeFaqCategory === cat
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-white hover:bg-amber-50 text-stone-700 border border-orange-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-amber-50/50 transition-colors"
                  >
                    <span className="font-extrabold text-sm text-stone-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-orange-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-orange-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-stone-600 leading-relaxed border-t border-orange-50 pt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <AdBanner />
    </div>
  );
};
