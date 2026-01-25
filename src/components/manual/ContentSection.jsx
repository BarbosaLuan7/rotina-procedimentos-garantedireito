
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, ChevronDown, ChevronRight, AlertCircle, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function ContentSection({ section, index }) {
  const isFormattingSection = section.category === 'formatacao' && !section.is_alert;
  const [expanded, setExpanded] = useState(isFormattingSection);
  const [copiedContent, setCopiedContent] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const handleCopyContent = () => {
    navigator.clipboard.writeText(section.content);
    setCopiedContent(true);
    toast.success("Conteúdo copiado!");
    setTimeout(() => setCopiedContent(false), 2000);
  };

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(section.template_text);
    setCopiedTemplate(true);
    toast.success("Template copiado!");
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  if (section.is_alert) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card className="border-l-4 border-indigo-500 bg-white shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-5 py-3 border-b border-indigo-200">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-indigo-600" />
              <h3 className="text-base font-bold text-indigo-900">{section.title}</h3>
            </div>
          </div>
          <CardContent className="p-5">
            <ReactMarkdown 
              className="prose prose-sm max-w-none
                prose-headings:font-bold
                prose-h2:text-lg prose-h2:font-bold prose-h2:text-gray-900 prose-h2:mb-3 prose-h2:mt-5 prose-h2:pb-2 prose-h2:border-b prose-h2:border-indigo-200 prose-h2:first:mt-0
                prose-h3:text-base prose-h3:font-semibold prose-h3:text-indigo-700 prose-h3:mb-2 prose-h3:mt-4
                prose-p:text-sm prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-2
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-ul:my-2 prose-ul:space-y-1.5 prose-ul:bg-gray-50 prose-ul:p-3 prose-ul:rounded-lg prose-ul:border prose-ul:border-gray-200
                prose-li:text-sm prose-li:text-gray-800 prose-li:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-indigo-400 prose-blockquote:bg-indigo-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:my-3 prose-blockquote:text-gray-700
                prose-hr:border-t prose-hr:border-gray-200 prose-hr:my-4"
              components={{
                h2: ({ children }) => (
                  <h2 className="text-lg font-bold text-gray-900 mb-3 mt-5 pb-2 border-b border-indigo-200 first:mt-0 flex items-center gap-2">
                    <span className="text-base">📋</span>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => {
                  const text = String(children);
                  if (text.includes('⚖️')) {
                    return (
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200 my-3">
                        <h3 className="text-base font-semibold text-blue-900 mb-0 flex items-center gap-2">
                          {children}
                        </h3>
                      </div>
                    );
                  }
                  return (
                    <h3 className="text-base font-semibold text-indigo-700 mb-2 mt-4 flex items-center gap-2">
                      {children}
                    </h3>
                  );
                },
                p: ({ children }) => {
                  const text = String(children);
                  if (text.includes('💡')) {
                    return (
                      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400 rounded-r-lg p-3 my-3">
                        <p className="text-sm text-amber-900 font-medium mb-0">{children}</p>
                      </div>
                    );
                  }
                  return <p className="text-sm text-gray-700 leading-relaxed mb-2">{children}</p>;
                },
                strong: ({ children }) => {
                  const text = String(children);
                  if (text.includes('VEM') || text.includes('VÊM') || text.includes('VXM')) {
                    return <strong className="text-lg font-bold text-indigo-700 px-1.5 py-0.5 bg-indigo-100 rounded">{children}</strong>;
                  }
                  if (text.includes('OPOSTOS') || text.includes('INTERPOSTO') || text.includes('APRESENTADA')) {
                    return <strong className="text-base font-bold text-blue-700 px-1.5 py-0.5 bg-blue-100 rounded">{children}</strong>;
                  }
                  if (text.includes('Embargante') || text.includes('Embargada') || text.includes('Recorrente') || text.includes('Recorrida')) {
                    return <strong className="font-bold text-purple-700 px-1.5 py-0.5 bg-purple-100 rounded">{children}</strong>;
                  }
                  return <strong className="text-gray-900 font-bold">{children}</strong>;
                },
                ul: ({ children }) => (
                  <ul className="space-y-1.5 bg-gray-50 p-3 rounded-lg border border-gray-200 my-2">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="flex items-start gap-2 text-gray-800">
                    <span className="text-indigo-600 font-bold mt-0.5">•</span>
                    <span className="flex-1 text-sm leading-relaxed">{children}</span>
                  </li>
                ),
                blockquote: ({ children }) => {
                  const text = String(children);
                  const isCorrect = text.includes('✅');
                  const isIncorrect = text.includes('❌');
                  
                  if (isCorrect) {
                    return (
                      <blockquote className="border-l-4 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 py-2 px-4 rounded-r-lg my-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-base">✅</span>
                          <span className="font-semibold text-green-800 text-sm">Correto</span>
                        </div>
                        <div className="text-gray-800 text-sm">{children}</div>
                      </blockquote>
                    );
                  }
                  
                  if (isIncorrect) {
                    return (
                      <blockquote className="border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-rose-50 py-2 px-4 rounded-r-lg my-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-base">❌</span>
                          <span className="font-semibold text-red-800 text-sm">Incorreto</span>
                        </div>
                        <div className="text-gray-800 text-sm">{children}</div>
                      </blockquote>
                    );
                  }
                  
                  return (
                    <blockquote className="border-l-4 border-indigo-400 bg-indigo-50 py-2 px-4 rounded-r-lg my-3 text-gray-700 italic text-sm">
                      {children}
                    </blockquote>
                  );
                },
                hr: () => <hr className="border-t border-gray-200 my-4" />,
              }}
            >
              {section.content}
            </ReactMarkdown>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (isFormattingSection) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card className="border-2 border-blue-200 shadow-xl bg-white overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pb-6">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <FileText className="w-7 h-7" />
              {section.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-10 pb-10 px-10">
            <ReactMarkdown 
              className="prose prose-lg max-w-none
                prose-headings:font-bold
                prose-h2:text-3xl prose-h2:font-extrabold prose-h2:text-gray-900 prose-h2:mb-6 prose-h2:mt-12 prose-h2:pb-4 prose-h2:border-b-4 prose-h2:border-blue-500 prose-h2:first:mt-0
                prose-h3:text-2xl prose-h3:font-bold prose-h3:text-blue-700 prose-h3:mb-5 prose-h3:mt-8
                prose-h4:text-lg prose-h4:font-semibold prose-h4:text-gray-700 prose-h4:mb-3 prose-h4:mt-5
                prose-p:text-base prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-blue-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-a:text-lg
                prose-strong:text-gray-900 prose-strong:font-bold prose-strong:text-lg
                prose-ul:my-4 prose-ul:space-y-2
                prose-li:text-sm prose-li:text-gray-700 prose-li:leading-relaxed
                prose-hr:border-t-2 prose-hr:border-gray-300 prose-hr:my-10"
              components={{
                h2: ({ children }) => (
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-6 mt-12 pb-4 border-b-4 border-blue-500 first:mt-0">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-blue-700 mb-5 mt-8">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-lg font-semibold text-gray-700 mb-3 mt-5 uppercase tracking-wide">
                    {children}
                  </h4>
                ),
                a: ({ children, href }) => (
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg no-underline font-semibold text-base"
                  >
                    <span>{children}</span>
                    <span className="text-xl">→</span>
                  </a>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2 bg-gradient-to-br from-slate-50 to-blue-50 p-5 rounded-lg border-l-4 border-blue-500 shadow-sm my-4">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-blue-600 font-bold text-base mt-0.5">▸</span>
                    <span className="flex-1 text-sm leading-relaxed">{children}</span>
                  </li>
                ),
                p: ({ children }) => {
                  const text = String(children);
                  if (text.includes('Aplicam-se') || text.includes('Para') || text.includes('Quando usar') || text.includes(':')) {
                    return <p className="text-base text-gray-600 font-medium mb-3 leading-relaxed">{children}</p>;
                  }
                  return <p className="text-base text-gray-600 leading-relaxed mb-4">{children}</p>;
                },
              }}
            >
              {section.content}
            </ReactMarkdown>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
        <CardHeader 
          className="cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 rounded-t-lg"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-3">
              <motion.div
                animate={{ rotate: expanded ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </motion.div>
              <FileText className="w-5 h-5 text-blue-600" />
              {section.title}
            </CardTitle>
            <div className="flex items-center gap-2">
              {section.template_text && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyTemplate();
                  }}
                  className="gap-2 border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  {copiedTemplate ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  Template
                </Button>
              )}
              {expanded && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyContent();
                  }}
                  className="gap-2 border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  {copiedContent ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  Conteúdo
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="pt-6 pb-4">
                <ReactMarkdown className="prose prose-sm max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-600 prose-strong:text-gray-900">
                  {section.content}
                </ReactMarkdown>
                {section.template_text && (
                  <div className="mt-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide">
                        📋 Template Pronto
                      </p>
                    </div>
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono bg-white p-3 rounded border border-purple-200">
                      {section.template_text}
                    </pre>
                  </div>
                )}
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
