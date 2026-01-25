import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Welcome2026Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Verifica se já foi mostrado
    const hasShown = localStorage.getItem("welcome2026Shown");
    
    // Data atual
    const now = new Date();
    
    // Define os limites de exibição
    const startDate = new Date("2026-01-04T00:00:00");
    const endDate = new Date("2026-01-06T12:00:00");
    
    // Verifica se está no período correto e se ainda não foi mostrado
    if (now >= startDate && now < endDate && !hasShown) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("welcome2026Shown", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-purple-200">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            Bem-vindo, 2026!
            <Sparkles className="w-8 h-8 text-purple-600" />
          </DialogTitle>
          <DialogDescription asChild>
            <div className="text-gray-800 text-base leading-relaxed space-y-4 mt-6">
              <p>
                Iniciamos este novo ano com o coração cheio de gratidão e expectativa. Desejamos que 2026 seja um ano próspero, repleto de saúde, vitórias, conquistas e muitos motivos para comemorar.
              </p>
              
              <p>
                Seguimos firmes no nosso propósito, trabalhando com responsabilidade e excelência, valores que nos trouxeram até aqui e que continuarão guiando cada passo nosso.
              </p>
              
              <p>
                Cada integrante desta equipe foi escolhido a dedo, e temos muito orgulho de caminhar com profissionais tão comprometidos e alinhados com o que acreditamos.
              </p>
              
              <p>
                Que este ano fortaleça ainda mais o sentimento de pertencimento, orgulho e crescimento dentro da Equipe <strong className="font-bold text-purple-900">Luan Barbosa Advocacia</strong>. Que sigamos juntos, confiantes e determinados, construindo resultados cada vez maiores.
              </p>
              
              <p className="font-semibold text-purple-900 text-center text-lg mt-6">
                Sejam bem-vindos a 2026. Vamos com tudo! 🤍✨
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-center mt-4">
          <Button
            onClick={handleClose}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
          >
            Vamos com tudo! 🚀
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}