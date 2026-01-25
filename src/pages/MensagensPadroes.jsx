import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Copy, Check, UserPlus, Info, ShoppingCart, XCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function MensagensPadroes() {
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast({
      title: "Copiado!",
      description: "Mensagem copiada para a área de transferência.",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const mensagensAbertura = [
    {
      id: "abertura-1",
      titulo: "Primeiro Contato",
      mensagem: `Bom dia, tudo bem?
Me chamo André e trabalho aqui na Garante Direito.
Vi que respondeu nosso anúncio demonstrando interesse em receber um benefício/aposentadoria do INSS. Me diz uma coisa, está trabalhando de carteira assinada ou pagando INSS?`,
    },
    {
      id: "abertura-2",
      titulo: "Contato via Dr. Luan",
      mensagem: `Bom dia, tudo bem?
O Dr. Luan me passou seu número para darmos continuidade no seu atendimento.
Me conta um pouco sobre a sua condição.`,
    },
  ];

  const mensagensInformativas = [
    {
      id: "info-1",
      titulo: "Requisitos para Aposentadoria",
      mensagem: `Para aposentar precisa seguir os seguintes requisitos:

PADRÃO (URBANO):
• Homens: 15 anos de contribuição + 65 anos de idade, OU 35 anos de contribuição (sem idade mínima)
• Mulheres: 15 anos de contribuição + 62 anos de idade, OU 30 anos de contribuição (sem idade mínima)

HÍBRIDA (RURAL + URBANO):
• Homens: 15 anos de contribuição + 60 anos de idade (período após 1993 deve ser indenizado)
• Mulheres: 15 anos de contribuição + 55 anos de idade (período após 1993 deve ser indenizado)

RURAL (SOMENTE):
• Homens: apenas quando completar 60 anos
• Mulheres: apenas quando completar 55 anos`,
    },
    {
      id: "info-2",
      titulo: "Diferença entre Auxílio-Doença e BPC/LOAS",
      mensagem: `Fiz essas perguntas para filtrar qual tipo de benefício se encaixa no seu caso:

AUXÍLIO-DOENÇA (Auxílio por Incapacidade Temporária):
→ Para quem trabalha de carteira assinada ou pagou INSS recentemente
→ Exige qualidade de segurado (até 2 anos sem contribuir)
→ Valor baseado nas contribuições

BPC/LOAS:
→ Para quem trabalha sem registro
→ Exige doença/deficiência há pelo menos 2 ANOS
→ Exige baixa renda familiar
→ Valor fixo: 1 salário mínimo

Até 2 anos sem assinar carteira ainda é possível o auxílio-doença, que geralmente é melhor que o BPC/LOAS.`,
    },
    {
      id: "info-3",
      titulo: "Importância dos Documentos Médicos",
      mensagem: `Para conseguirmos qualquer tipo de auxílio do INSS, é INDISPENSÁVEL os laudos e documentos que comprovam a situação da sua saúde!

Caso consiga esses documentos, nós conseguimos entrar com pedido de benefício.

Sem a documentação, infelizmente não conseguimos ajudar!`,
    },
    {
      id: "info-4",
      titulo: "Conversão Auxílio-Doença → Aposentadoria por Invalidez",
      mensagem: `É possível fazer a conversão de auxílio-doença para aposentadoria por invalidez, caso na perícia seja negada a continuação do pagamento do auxílio.

⚠️ IMPORTANTE: Na aposentadoria por invalidez, o senhor pode receber até 60% MENOS que no auxílio-doença.

Quando já recebe 1 salário mínimo, na conversão receberá o mesmo valor.`,
    },
  ];

  const mensagensVendas = [
    {
      id: "vendas-1",
      titulo: "Planejamento Previdenciário - Apresentação",
      mensagem: `Inicialmente, realizaremos um planejamento previdenciário completo, analisando sua situação atual, tempo de contribuição e possibilidades de aposentadoria.

Também analisamos se o INSS não sumiu com alguns anos do seu CNIS e, caso haja, ajudamos a corrigir o erro.

Caso, durante o planejamento, identifiquemos que já tem direito à aposentadoria, entraremos IMEDIATAMENTE com o pedido do benefício.

O planejamento previdenciário indicará a melhor estratégia para alcançar o benefício no futuro com o maior valor possível, se ainda não puder.`,
    },
    {
      id: "vendas-2",
      titulo: "Planejamento Previdenciário - Fechamento",
      mensagem: `Para realizar esse planejamento temos um custo de R$ 1.500,00.

E agora o senhor vai me falar que é caro, mas vou explicar como podemos facilitar esse pagamento:

✓ Parcelamos em até 5x
✓ Pode ser feito por boleto (não precisa de cartão)
✓ Esse planejamento é tão completo que o senhor sozinho consegue dar entrada no pedido de aposentadoria

O que acha de fecharmos e eu poder ajudá-lo?`,
    },
    {
      id: "vendas-3",
      titulo: "Documentos para Pasta",
      mensagem: `Vou precisar que o senhor me envie:

1. Senha do gov.br
2. Documentos médicos que tiver (caso ainda não tenha enviado)
3. Um nome e número de telefone de alguém para falarmos caso não responda nesse número (emergência)

Fico aguardando o envio do solicitado. Qualquer dúvida, fico à disposição.`,
    },
  ];

  const mensagensObjecoes = [
    {
      id: "objecao-1",
      titulo: "Desconfiança do Atendimento Online",
      mensagem: `Nosso escritório tem sede em Foz do Iguaçu/PR, porém todo o atendimento é online, por ligação, chamada de vídeo ou mensagem.

Nós fizemos o escritório dessa forma para que pudéssemos alcançar o maior número de pessoas possível e poder ajudar aquelas que não teriam acesso a advogados especialistas ou pessoas que não conseguem ir até um advogado por alguma dificuldade.

Eu entendo o seu receio, hoje existem muitos golpes. Caso queira, podemos fornecer os dados do dono do escritório para que pesquise e fique mais tranquilo para que possamos te ajudar.`,
    },
    {
      id: "objecao-2",
      titulo: "Mãe de Autista",
      mensagem: `Ser mãe de uma criança com autismo é um desafio diário, mas, infelizmente, isso por si só não é suficiente para garantir o direito a um benefício assistencial.

É necessário comprovar os critérios exigidos por lei (renda e laudos médicos).`,
    },
  ];

  const casosNaoAtendidos = [
    {
      id: "nao-1",
      titulo: "Revisão de Benefício/Aposentadoria",
      mensagem: `Bom dia, tudo bem?

Infelizmente, no momento não fazemos revisão de aposentadoria!

Para qualquer outra dúvida ou questão, estamos disponíveis para ajudar!`,
    },
    {
      id: "nao-2",
      titulo: "Servidor Público",
      mensagem: `Bom dia! Tudo bem?

No momento, não realizamos aposentadorias especiais que envolvem tempo em concurso público no escritório, mas recomendamos que o senhor consulte um especialista na área.

Estamos à disposição para ajudar com outros benefícios, caso precise!`,
    },
  ];

  const MessageCard = ({ mensagem, color = "primary" }) => (
    <Card className="group hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{mensagem.titulo}</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(mensagem.mensagem, mensagem.id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copiedId === mensagem.id ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-sans bg-muted p-4 rounded-lg">
          {mensagem.mensagem}
        </pre>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <MessageSquare className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Banco de Mensagens</h1>
          <p className="text-muted-foreground">Scripts prontos para atendimento</p>
        </div>
      </div>

      <Tabs defaultValue="abertura" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="abertura" className="flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            <span className="hidden sm:inline">Abertura</span>
          </TabsTrigger>
          <TabsTrigger value="informativo" className="flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span className="hidden sm:inline">Informativo</span>
          </TabsTrigger>
          <TabsTrigger value="vendas" className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Vendas</span>
          </TabsTrigger>
          <TabsTrigger value="objecoes" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Objeções</span>
          </TabsTrigger>
          <TabsTrigger value="nao-atendemos" className="flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Não Atendemos</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="abertura" className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-green-500">Abertura</Badge>
            <span className="text-sm text-muted-foreground">Mensagens para iniciar conversa com o cliente</span>
          </div>
          {mensagensAbertura.map((msg) => (
            <MessageCard key={msg.id} mensagem={msg} />
          ))}
        </TabsContent>

        <TabsContent value="informativo" className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-blue-500">Informativo</Badge>
            <span className="text-sm text-muted-foreground">Mensagens com explicações sobre benefícios</span>
          </div>
          {mensagensInformativas.map((msg) => (
            <MessageCard key={msg.id} mensagem={msg} />
          ))}
        </TabsContent>

        <TabsContent value="vendas" className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-purple-500">Vendas</Badge>
            <span className="text-sm text-muted-foreground">Mensagens para fechamento de contrato</span>
          </div>
          {mensagensVendas.map((msg) => (
            <MessageCard key={msg.id} mensagem={msg} />
          ))}
        </TabsContent>

        <TabsContent value="objecoes" className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-amber-500">Objeções</Badge>
            <span className="text-sm text-muted-foreground">Respostas para objeções comuns</span>
          </div>
          {mensagensObjecoes.map((msg) => (
            <MessageCard key={msg.id} mensagem={msg} />
          ))}
        </TabsContent>

        <TabsContent value="nao-atendemos" className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-red-500">Não Atendemos</Badge>
            <span className="text-sm text-muted-foreground">Casos que o escritório não atende</span>
          </div>
          {casosNaoAtendidos.map((msg) => (
            <MessageCard key={msg.id} mensagem={msg} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
