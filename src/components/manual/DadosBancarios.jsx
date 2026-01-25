import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Copy, Check, User, CreditCard, Calendar, Hash, Mail } from "lucide-react";
import { toast } from "sonner";

export default function DadosBancarios() {
  const [copied, setCopied] = useState(false);

  const dadosBancarios = `Banco Cooperativo do Brasil S.A. - Bancoob (756)
Agência: 4343
Conta Corrente: 43197-4
Titular: Luan Felipe Barbosa
CPF: 084.926.189-90
PIX: pix@barbosaluan.com
Data de nascimento: 21/04/1997`;

  const handleCopy = () => {
    navigator.clipboard.writeText(dadosBancarios);
    setCopied(true);
    toast.success("Dados bancários copiados!");
    setTimeout(() => setCopied(false), 2000);
  };

  const dadosInfo = [
    { icon: Building2, label: "Banco", value: "Bancoob (756)" },
    { icon: Hash, label: "Agência", value: "4343" },
    { icon: CreditCard, label: "Conta Corrente", value: "43197-4" },
    { icon: User, label: "Titular", value: "Luan Felipe Barbosa" },
    { icon: User, label: "CPF", value: "084.926.189-90" },
    { icon: Mail, label: "PIX", value: "pix@barbosaluan.com" },
    { icon: Calendar, label: "Data de Nascimento", value: "21/04/1997" },
  ];

  return (
    <Card className="border border-gray-200 bg-white shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Dados Bancários</h2>
            <p className="text-blue-100 text-sm">Informações para pagamento</p>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {dadosInfo.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-1">
                <item.icon className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{item.label}</span>
              </div>
              <p className="text-base font-semibold text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>

        <Button
          onClick={handleCopy}
          size="lg"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg transition-all"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              <span className="font-semibold">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5 mr-2" />
              <span className="font-semibold">Copiar Todos os Dados</span>
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}