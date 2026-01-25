import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function FeedbackForm({ section }) {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const feedbackMutation = useMutation({
    mutationFn: (feedbackData) => base44.entities.Feedback.create(feedbackData),
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Obrigado pelo seu feedback!");
      setTimeout(() => {
        setSubmitted(false);
        setRating(null);
        setComment("");
      }, 3000);
    },
  });

  const handleSubmit = () => {
    if (!rating) return;

    feedbackMutation.mutate({
      section_id: section.id,
      section_title: section.title,
      category: section.category,
      rating: rating,
      comment: comment.trim() || undefined,
    });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          <div>
            <h4 className="font-semibold text-emerald-900">Feedback enviado!</h4>
            <p className="text-sm text-emerald-700">Obrigado por nos ajudar a melhorar o manual.</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <Card className="mt-6 border-2 border-dashed border-gray-200 bg-gradient-to-br from-gray-50 to-white">
      <CardContent className="p-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          💭 Esta seção foi útil?
        </h4>
        
        <div className="flex gap-3 mb-4">
          <Button
            variant={rating === "helpful" ? "default" : "outline"}
            onClick={() => setRating("helpful")}
            className={`flex-1 gap-2 transition-all ${
              rating === "helpful"
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                : "hover:border-emerald-500 hover:text-emerald-600"
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
            Útil
          </Button>
          <Button
            variant={rating === "not_helpful" ? "default" : "outline"}
            onClick={() => setRating("not_helpful")}
            className={`flex-1 gap-2 transition-all ${
              rating === "not_helpful"
                ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                : "hover:border-orange-500 hover:text-orange-600"
            }`}
          >
            <ThumbsDown className="w-4 h-4" />
            Não útil
          </Button>
        </div>

        <AnimatePresence>
          {rating && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3"
            >
              <Textarea
                placeholder="Comentários ou sugestões (opcional)..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="resize-none"
                rows={3}
              />
              <Button
                onClick={handleSubmit}
                disabled={feedbackMutation.isPending}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 gap-2"
              >
                {feedbackMutation.isPending ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Feedback
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}