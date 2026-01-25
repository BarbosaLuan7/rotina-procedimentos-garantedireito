import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function MessageTemplate({ message, index }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    toast.success("Mensagem copiada!");
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryColor = (category) => {
    if (category.includes("Financeiro")) {
      return {
        gradient: "from-emerald-600 to-teal-700",
        bg: "from-emerald-50 to-teal-50",
        border: "border-emerald-300",
        icon: "💰"
      };
    }
    return {
      gradient: "from-purple-600 to-pink-700",
      bg: "from-purple-50 to-pink-50",
      border: "border-purple-300",
      icon: "📝"
    };
  };

  const colors = getCategoryColor(message.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all overflow-hidden">
        <div className={`bg-gradient-to-r ${colors.gradient} px-5 py-3`}>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <span>{colors.icon}</span>
              {message.title}
            </h3>
            <span className="text-xs text-white/80 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
              {message.category}
            </span>
          </div>
        </div>
        
        <CardContent className="p-5">
          <div className={`bg-gradient-to-br ${colors.bg} rounded-xl p-4 border ${colors.border} mb-4`}>
            <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">
              {message.content}
            </pre>
          </div>

          <Button
            onClick={handleCopy}
            size="sm"
            className={`w-full bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white shadow-md transition-all`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copiar Mensagem
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}