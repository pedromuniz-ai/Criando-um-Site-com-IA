import { motion } from "motion/react";
import { Github, Globe, Rocket, Shield, Zap, Code, Sparkles, Brain, Cpu, Workflow, Layers, Terminal, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AI_TOOLS = [
  {
    id: "ai-studio",
    name: "Google AI Studio",
    icon: Brain,
    url: "https://aistudio.google.com/",
    purpose: "É o ambiente oficial de prototipagem para desenvolvedores e criadores. Ele serve para você testar, ajustar e experimentar os modelos da família Gemini de forma direta, sem precisar montar um ambiente de programação complexo logo de cara.",
    usage: "Você acessa a ferramenta pelo navegador usando sua conta Google. Na interface, você cria um \"prompt\" (de texto ou chat) e pode configurar parâmetros técnicos do modelo, como a \"temperatura\" (que controla a criatividade das respostas). Quando o modelo estiver se comportando do jeito que você precisa, basta clicar em \"Get Code\" para exportar o código ou gerar uma chave de API (API Key) para integrar a IA ao seu próprio software ou aplicativo.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: "labs-flow",
    name: "Google Labs Flow",
    icon: Workflow,
    url: "https://labs.google/fx/pt/tools/flow",
    purpose: "É a plataforma criativa de ponta do Google voltada para geração e edição de vídeos e imagens. Ela é ideal para criadores de conteúdo, utilizando modelos de última geração como o Veo 3 (para vídeos altamente realistas) e o Nano Banana Pro (para imagens com controle profissional).",
    usage: "O acesso é feito pela plataforma do Flow, que funciona por meio de um sistema de créditos diários. Você pode converter texto em vídeo, animar imagens estáticas ou gerar storyboards. O grande diferencial é o controle de edição: por meio de marcações e desenhos na tela, você pode inserir ou remover objetos, alterar o movimento da câmera, ou mudar a iluminação e a roupa de um personagem em uma cena específica sem precisar gerar o vídeo todo novamente.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    id: "stitch",
    name: "Google Stitch",
    icon: Layers,
    url: "https://stitch.withgoogle.com/",
    purpose: "O Stitch é uma ferramenta de design de interface de usuário (UI) focada em prototipagem rápida. Alimentado pelo modelo Gemini 2.5 Pro, ele não apenas desenha telas isoladas, mas gera sistemas de design completos e interativos.",
    usage: "Disponível por meio do Google Labs, você fornece um prompt de texto simples (ex: \"crie o layout de um aplicativo de delivery com tema escuro\") ou sobe uma imagem de referência. O Stitch gera a interface inteira, paleta de cores e tipografia. É uma ferramenta excelente para tirar a ideia do papel rapidamente, permitindo que você exporte o resultado diretamente para o Figma (para refinamento da equipe de design) ou para o Google AI Studio (para a equipe de desenvolvimento).",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    id: "pomelli",
    name: "Google Pomelli",
    icon: Sparkles,
    url: "https://labs.google.com/pomelli/about/",
    purpose: "É uma IA construída especificamente para marketing e gerentes de redes sociais. Ela resolve o problema de criar volume de conteúdo de forma rápida, sem perder a identidade visual da marca.",
    usage: "A ferramenta funciona em três etapas. Primeiro, você insere a URL do seu site e o Pomelli extrai o seu \"Business DNA\" (mapeando suas cores, fontes, estilo de imagens e tom de voz). Depois, você digita o objetivo da sua campanha (ex: \"promoção de fim de ano\"). Em questão de segundos, a IA gera dezenas de variações de posts (artes e textos) totalmente alinhados com a sua marca. Você pode fazer edições rápidas na própria ferramenta e baixar o pacote pronto para publicação.",
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    id: "antigravity",
    name: "Google Antigravity",
    icon: Cpu,
    url: "https://antigravity.google/",
    purpose: "É um Ambiente de Desenvolvimento Integrado (IDE) voltado para a \"era dos agentes\". Sendo um fork altamente modificado do VS Code, ele permite que você delegue tarefas complexas de engenharia de software para agentes autônomos de IA (alimentados pelo Gemini 3.1 Pro e Gemini 3 Flash), em vez de apenas sugerir trechos de código.",
    usage: "Após instalar o software no seu computador (Windows, Mac ou Linux), você notará duas visões principais: o Editor tradicional e o Manager (Painel de Controle). No Manager, você pode pedir que um agente resolva um problema longo (ex: \"reproduza o bug X relatado pelos usuários, crie um teste e implemente a correção\"). O agente trabalha em segundo plano — com acesso ao terminal e a um navegador integrado — e entrega \"Artefatos\" (como relatórios, prints de tela e a alteração do código) para você apenas revisar e aprovar o trabalho final.",
    color: "text-red-500",
    bg: "bg-red-500/10"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Terminal className="w-6 h-6 text-primary" />
            <span>AI Pro<span className="text-primary">Builder</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#tools" className="hover:text-foreground transition-colors">Ecossistema IA</a>
            <a href="#github" className="hover:text-foreground transition-colors">GitHub Hosting</a>
            <a href="#atividades" className="hover:text-foreground transition-colors">Atividades</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Domine a Próxima Geração de Desenvolvimento
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
                Como a IA pode deixar meus <br className="hidden sm:block" />
                processos mais <span className="text-primary">profissionais</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
                Aprenda a utilizar as ferramentas mais avançadas do Google para construir, 
                otimizar e escalar aplicações web com um workflow de nível sênior.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-12 px-8 rounded-full text-base font-semibold group" onClick={() => window.open('https://labs.google/', '_blank')}>
                  Explorar google labs
                  <Zap className="ml-2 w-4 h-4 group-hover:fill-current transition-all" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base font-semibold" onClick={() => document.getElementById('atividades')?.scrollIntoView({ behavior: 'smooth' })}>
                  Atividades Práticas
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section id="tools" className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">O Ecossistema de IA</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Cinco pilares fundamentais para o desenvolvimento moderno, do protótipo à infraestrutura.
              </p>
            </div>

            <Tabs defaultValue="ai-studio" className="w-full">
              <div className="flex justify-center mb-8 md:mb-12">
                <TabsList className="bg-background border p-1 h-auto flex-wrap justify-center gap-1 rounded-2xl md:rounded-full">
                  {AI_TOOLS.map((tool) => (
                    <TabsTrigger 
                      key={tool.id} 
                      value={tool.id}
                      className="rounded-full px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {tool.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {AI_TOOLS.map((tool) => (
                <TabsContent key={tool.id} value={tool.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-none shadow-xl overflow-hidden bg-background">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${tool.bg} ${tool.color} flex items-center justify-center mb-4 md:mb-6`}>
                            <tool.icon className="w-6 h-6 md:w-8 md:h-8" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{tool.name}</h3>
                          
                          <div className="space-y-4 md:space-y-6">
                            <div>
                              <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary mb-1 md:mb-2">Para que serve:</h4>
                              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {tool.purpose}
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary mb-1 md:mb-2">Como usar:</h4>
                              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {tool.usage}
                              </p>
                            </div>
                          </div>

                          <Button 
                            className="w-full sm:w-fit rounded-full mt-6 md:mt-8"
                            onClick={() => window.open(tool.url, '_blank')}
                          >
                            Acessar {tool.name}
                          </Button>
                        </div>
                        <div className={`hidden md:block ${tool.bg} relative overflow-hidden`}>
                          <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <tool.icon className="w-64 h-64" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/20" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* GitHub Guide Section */}
        <section id="github" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-6">Hospedagem Profissional no GitHub</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Não basta criar, é preciso publicar com excelência. O GitHub Pages é a escolha dos 
                  desenvolvedores para sites estáticos de alta performance.
                </p>
                <div className="space-y-4">
                  {[
                    "Versionamento via Git para segurança total",
                    "Integração contínua (CI/CD) simplificada",
                    "Domínios customizados com HTTPS grátis",
                    "Performance global via CDN do GitHub"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Shield className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-10 rounded-full h-12 px-8 font-bold" onClick={() => window.open('https://github.com/', '_blank')}>
                  Configurar meu GitHub
                  <Github className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="bg-primary text-primary-foreground rounded-[2rem] p-10 relative overflow-hidden shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 relative z-10">Checklist de Publicação</h3>
                <div className="space-y-6 relative z-10">
                  {[
                    "Repositório: seu-nome.github.io",
                    "Branch: main / docs",
                    "Build: npm run build",
                    "Deploy: GitHub Actions"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 border-b border-primary-foreground/20 pb-4 last:border-0">
                      <div className="text-3xl font-black opacity-30">{i + 1}</div>
                      <div className="font-mono text-sm">{step}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <Github className="w-64 h-64" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Activities Section */}
        <section id="atividades" className="py-24 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Atividades Práticas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Coloque seu conhecimento em teste com desafios reais utilizando o ecossistema Google IA.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "Tais: Página Biográfica",
                  description: "Tais, no AI Studio, peça para a IA atuar como uma biógrafa. Descreva os marcos da sua vida, seus valores e conquistas. Peça para ela estruturar o site em uma linha do tempo envolvente, sugerindo seções como 'Origens', 'Grandes Desafios' e 'Galeria de Momentos'. Foque em um tom inspirador e pessoal."
                },
                {
                  title: "Rebeka: Portfólio Profissional",
                  description: "Rebeka, instrua a IA a ser uma curadora de talentos. Liste seus principais projetos, habilidades técnicas e depoimentos. Peça para ela organizar o conteúdo de forma 'clean', priorizando uma seção de 'Projetos em Destaque' e uma área de contato direta. O texto deve ser direto e profissional."
                },
                {
                  title: "Karine: Página de Contabilidade",
                  description: "Karine, instrua a IA a ser um consultor de marketing jurídico/contábil. Peça para ela criar seções sobre 'Serviços (PF/PJ)', 'Consultoria Fiscal' e um blog para 'Dicas de Impostos'. O texto precisa transmitir segurança, seriedade e usar termos técnicos de forma clara para o cliente."
                },
                {
                  title: "Luiza: Site sobre a Personagem Kurumi",
                  description: "Luiza, no AI Studio, peça para a IA atuar como uma especialista em cultura Otaku e roteirista. Peça para ela estruturar o site como uma 'Enciclopédia Digital' (estilo Wiki)."
                }
              ].map((activity, i) => (
                <Card key={i} className="border-2 border-dashed border-muted-foreground/20 bg-background/50">
                  <CardHeader className="text-center py-8 md:py-12">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 text-muted-foreground">
                      {i + 1}
                    </div>
                    <CardTitle className="text-lg md:text-xl mb-2">{activity.title}</CardTitle>
                    <CardDescription className="text-sm md:text-base text-foreground/80">
                      "{activity.description}"
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-16 px-4 bg-muted/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-6">
              <Terminal className="w-6 h-6 text-primary" />
              <span>AI Pro<span className="text-primary">Builder</span></span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Capacitando profissionais a construir o futuro da web com inteligência artificial 
              e as melhores práticas de engenharia do Google.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => window.open('https://github.com/', '_blank')}>
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => window.open('https://labs.google/', '_blank')}>
                <Globe className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Ferramentas</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {AI_TOOLS.map(tool => (
                <li key={tool.id} className="hover:text-primary cursor-pointer transition-colors">
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2026 AI Pro Builder. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
