"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Clock,
  CheckCircle,
  Gift,
  Shield,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Heart,
  DollarSign,
  Target,
  Award,
  Zap,
  AlertTriangle,
} from "lucide-react"

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depo1.jpg-9y1E6DGV7N2wLexOXRoEPaNCNNSIX0.jpeg",
      alt: "Depoimento Marcelo de Andrade",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depo2.jpg-k1T6WzdjTGZm01bhTT8ZMH1177ewG1.jpeg",
      alt: "Depoimento Lucas Silvestre",
    },
    {
      src: "/images/testimonial-mateus.png",
      alt: "Depoimento Mateus Fogassa",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 10000) // 10 seconds

    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="relative max-w-2xl mx-auto">
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-2 border-blue-200 shadow-xl">
        <CardContent>
          <img
            src={testimonials[currentIndex].src || "/placeholder.svg"}
            alt={testimonials[currentIndex].alt}
            className="rounded-xl shadow-lg w-full transition-opacity duration-500"
          />
        </CardContent>
      </Card>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 bg-gray-200 rounded-full h-1 max-w-md mx-auto">
        <div
          className="bg-blue-600 h-1 rounded-full transition-all duration-[10000ms] ease-linear"
          style={{
            width:
              currentIndex === testimonials.length - 1
                ? "100%"
                : `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  // Timer para o empilhamento de valor (1h15min)
  const [valueStackTimer, setValueStackTimer] = useState({
    hours: 1,
    minutes: 15,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const valueTimer = setInterval(() => {
      setValueStackTimer((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(valueTimer)
  }, [])

  const scrollToOffer = () => {
    document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Urgência no Topo */}
      <div className="bg-red-600 text-white py-3 text-center font-bold text-lg animate-pulse">
        🚨 WORKSHOP EXCLUSIVO: 7 VAGAS RESTANTES 🚨
      </div>

      {/* Hero Section - CENTRALIZADO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 backdrop-blur-3xl"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-5xl mx-auto">
            {/* Headline Atualizada */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Descubra como faturar de{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                R$3.000 a R$5.000 em 30 dias
              </span>{" "}
              vendendo doces{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                sem precisar de receitas
              </span>
            </h1>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-yellow-200 shadow-2xl">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                E nem ligar o fogão, mesmo sendo tímido - com apenas <strong>2h por dia</strong> ou{" "}
                <strong>só aos fins de semana</strong>.
              </p>
              <p className="text-base md:text-lg text-gray-600 italic">
                (Mesmo que hoje você esteja cansado, e achando que já tentou de tudo.)
              </p>
            </div>

            <a href="https://pay.cakto.com.br/36zpr6r_416804" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8"
              >
                QUERO PARTICIPAR AGORA
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Sub Headline/USP */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              Se você é CLT, cristão e sente que tá em um ciclo de esforço vazio vendendo doces...
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed">
              Esse é o <strong>único workshop criado para você</strong> que te ensina o{" "}
              <span className="bg-yellow-400 text-black px-2 py-1 rounded font-bold">Sistema Divino de Vendas</span> —
              pra você parar de se cansar na cozinha e começar a lucrar com doces como provedor que merece, em ruas,
              praças e comércios locais — sem parecer chato, implorar, e sem gastar mais em ingredientes caros.
            </p>
          </div>
        </div>
      </section>

      {/* Identificação do Problema - SEM NÚMEROS */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Você se identifica com essas situações?
            </h2>

            <div className="space-y-6">
              {[
                {
                  question:
                    "Você sente que, mesmo com tanto esforço, continua se afastando cada vez mais do sonho de ser um provedor digno e de conquistar a estabilidade financeira?",
                  icon: <Target className="h-8 w-8 text-red-500" />,
                },
                {
                  question:
                    "Sente que está preso em um ciclo de esforço onde quanto mais você produz doce, menos vê resultados?",
                  icon: <Zap className="h-8 w-8 text-orange-500" />,
                },
                {
                  question:
                    "Já tentou de tudo para aumentar sua renda vendendo doces, mas sempre acaba se sentindo como um 'pedinte' ou alguém que nunca consegue vender de forma eficaz?",
                  icon: <Heart className="h-8 w-8 text-blue-500" />,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 border-red-200 bg-white/80 backdrop-blur-sm hover:border-red-300 transition-colors shadow-lg"
                >
                  <CardContent className="flex items-start space-x-4">
                    <div className="bg-red-100 rounded-full p-3 flex-shrink-0">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <AlertTriangle className="h-6 w-6 text-red-500" />
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed font-medium">{item.question}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* História do Gabriel - Modelo de Produção Maçante */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                A Verdade Por Trás Disso: O Modelo de Produção Maçante™
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  Colocar tempo e energia em comprar materiais, mexer no fogão, produzir, etc... enquanto poderia já
                  lucrar com o que está pronto, trabalhando menos e ganhando mais.
                </p>
                <p className="text-xl leading-relaxed mb-6 font-bold text-red-700">
                  O que não te contaram é que não é sobre trabalhar mais, mas sobre Vender SEM Precisar de receitas.
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                  <p className="text-xl font-bold text-red-800 text-center">🚨 POR ISSO A CULPA NÃO É SUA! 🚨</p>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Me chamo Gabriel, e há uns anos saí vender doces prontos tradicionais para levantar uma grana. Comprei
                  na distribuidora de doce do centro bala de goma e comecei vendendo no semáforo.
                </p>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 my-6">
                  <p className="text-lg leading-relaxed font-semibold text-yellow-800">
                    "Nos primeiros dias até vendi bem, mas conforme passavam os dias, me sentia com o pé doendo, se
                    esforçando à toa."
                  </p>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Mas até que meu pai falou pra mim comprar um tipo de doce. Quando comecei a oferecer, alguns dias
                  depois um carro que já tinha comprado, me chamou e pediu: "tem mais daquele doce?". Tinha pessoas
                  interessadas e pedindo pelo doce, algo que nunca aconteceu antes. Eu tinha encontrado o doce certo,
                  mas ainda se sentia em um esforço à toa, pois ganhava pouco.
                </p>

                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 my-6">
                  <p className="text-lg leading-relaxed font-bold text-red-800 text-center">
                    "SÓ O DOCE NÃO ESTAVA SENDO SUFICIENTE!"
                  </p>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 my-8">
                  <p className="text-lg font-bold text-green-800 mb-4">
                    O meu jogo virou depois de uns meses quando descobri esse Sistema Divino de Vendas, e fiz R$398
                    reais de LUCRO em um único sábado no mês de dezembro vendendo doces sem precisar de receitas.
                  </p>
                  <p className="text-lg text-green-700">
                    Com esse Sistema Divino, saí da casa dos meus pais pra buscar minha liberdade e fui morar sozinho de
                    aluguel, fui pro Beto Carreiro, etc... sem eu precisar produzir 1 mísera receita de doces.
                  </p>
                </div>

                {/* Imagens de Conquistas Pessoais - ATUALIZADAS */}
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="relative">
                    <img
                      src="/images/gabriel-quality-life.webp"
                      alt="Gabriel desfrutando qualidade de vida"
                      className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Tempo para Desfrutar a Vida
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="/images/gabriel-beto-carreiro.webp"
                      alt="Gabriel no Beto Carreiro"
                      className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Realizando Sonhos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEUS RESULTADOS - NOVAS IMAGENS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">📊 MEUS RESULTADOS</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative">
                <img
                  src="/images/sales-results-1.png"
                  alt="Resultados detalhados de vendas"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                  R$ 331,40 em 4h
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/sales-results-2.png"
                  alt="Vendas via PIX em tempo real"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                  R$ 51 em 3min
                </div>
              </div>
            </div>

            {/* Depoimentos de Estabelecimentos Parceiros */}
            <div className="text-center mb-8">
              <p className="text-xl text-gray-700 mb-8 font-bold">
                Fora os ganhos com estabelecimentos parceiros reconhecidos para revenda e revendedores de doces...
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative">
                <img
                  src="/images/restaurant-partnership.png"
                  alt="Parceria com restaurante"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute bottom-4 left-4 bg-yellow-600 text-white px-4 py-2 rounded-full font-bold">
                  Parceiro Oficial
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/restaurant-certificate.png"
                  alt="Certificado de reconhecimento"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                  Reconhecimento
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texto de Proposta Destacado */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                E pensando nisso que decidi criar O Workshop Renda dos Céus com Doces que te ensina a como faturar de
                R$3.000 a R$5.000 por mês, sem precisar de receitas, nem ligar o fogão e sem parecer chato na venda,
                através desse Sistema Divino de Vendas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos de Pessoas que Aplicaram o Método - CAROUSEL */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              ⭐ Depoimentos de Pessoas que Aplicaram o Método
            </h3>

            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Sistema Divino de Vendas - ATUALIZADO SEM NÚMEROS */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Como Funciona o Sistema Divino de Vendas?
            </h2>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mb-12">
              <p className="text-xl text-center text-gray-700 mb-8">
                "Agora você deve estar se perguntando: 'Como vou vender sem precisar de receitas e ainda alcançar esses
                resultados que prometeu? O que é esse Sistema Divino de Vendas?' Veja só isso."
              </p>

              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl p-6 text-center">
                <p className="text-xl font-bold">
                  O segredo pra vender sem receitas e sem ligar o fogão, está no Doce Apple™ e no Fechamento Invisível™,
                  baseado em princípios Bíblicos, o que os tornam ainda mais PODEROSOS nas nossas vendas; Juntos formam
                  o Sistema Divino de Vendas.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Doce Apple - SEM NÚMERO */}
              <Card className="p-8 border-2 border-green-200 bg-green-50/50">
                <CardContent>
                  <div className="flex items-center mb-6">
                    <h3 className="text-2xl font-bold text-green-800">Vender o Doce Apple™</h3>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    O Doce Apple™ é um doce pronto e produzido por terceiros que já possui{" "}
                    <span className="bg-yellow-200 px-2 py-1 rounded font-bold">facilidade em vendas</span> e{" "}
                    <span className="bg-green-200 px-2 py-1 rounded font-bold">margens de lucro elevadas</span>, devido
                    a <span className="bg-blue-200 px-2 py-1 rounded font-bold">6 elementos chave</span>. E assim, você
                    não irá precisar de ter receitas para vendê-lo.
                  </p>

                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-green-700 mb-2">Novidade e Exclusividade:</h4>
                    <p className="text-sm text-gray-600">
                      Um dos 6 elementos de um Doce Apple™ é um produto novo ou pouco conhecido, o que cria curiosidade.
                      As pessoas amam experimentar o que é exclusivo e diferente.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-sm text-blue-800 italic mb-2">
                      "Isaías 43:19 nos lembra que Deus está sempre fazendo coisas novas: 'Eis que faço uma coisa
                      nova...' Mas não há como derramar esse vinho novo em odres velhos, pois os odres se rompem, e o
                      vinho se perde (Mateus 9:17)."
                    </p>
                    <p className="text-sm text-blue-700 font-semibold mb-2">
                      Bem como não terá como vender sem precisar de receitas (algo novo) com doces já conhecidos e
                      tradicionais.
                    </p>
                    <p className="text-sm text-blue-700">
                      Portanto, assim como Deus traz algo novo para abrir novos caminhos, o Doce Apple™ traz algo novo e
                      exclusivo para o mercado, que irá atrair curiosidade e gerar desejo nas pessoas, e irá abrir novos
                      caminhos de lucro pra você que você não imaginava.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-yellow-800 font-semibold">
                      Por isso, a Apple lança iPhones novos todo ano, e mesmo quem já tem um iPhone, vai lá e depois
                      compra um… e até mesmo parcelam pra poderem ter um, não é mesmo? Então imagina com doces que são
                      mais baratos?
                    </p>
                  </div>

                  <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">
                    <p className="text-sm text-green-800 font-bold">
                      E junto comigo, você vai aprender todos os elementos pra identificar e vender um Doce Apple™ —
                      aquele que vende com facilidade e boas margens de lucro. Por isso, os doces que você irá aprender
                      a vender não são brigadeiros comuns, paçoquinhas, balas de goma, pipoca doce, etc., mas algo que
                      você nem conhece.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Fechamento Invisível - SEM NÚMERO */}
              <Card className="p-8 border-2 border-blue-200 bg-blue-50/50">
                <CardContent>
                  <div className="flex items-center mb-6">
                    <h3 className="text-2xl font-bold text-blue-800">Fechamento Invisível™</h3>
                  </div>

                  <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-blue-800 mb-2">Primeira Parte:</h4>
                    <p className="text-blue-700 leading-relaxed">
                      O Fechamento Invisível™ vai te ensinar como abordar com naturalidade, se conectar emocionalmente e
                      fechar com o cliente...
                    </p>
                  </div>

                  <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 mb-6">
                    <h4 className="font-bold text-purple-800 mb-2">Segunda Parte:</h4>
                    <p className="text-purple-700 leading-relaxed">
                      E, no final, ele vai querer comprar porque sentiu que foi a decisão certa, sem pressão.
                    </p>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Ao invés de gritar ou correr atrás, você vai aprender a usar linguagem corporal, frases de abertura,
                    e gatilhos emocionais para "educar" os clientes sobre seu Doce Apple.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="text-sm text-blue-800 italic mb-2">
                      "O coração do sábio ensina a sua boca, e aos seus lábios acrescenta instrução." Provérbios 16:23
                    </p>
                    <p className="text-sm text-blue-700 font-semibold">
                      O versículo sugere que a pessoa sábia aos olhos de Deus usa suas palavras para ensinar e guiar, de
                      forma respeitosa, sem forçar, e isso é exatamente o que o Fechamento Invisível™ representa:
                      ensinar suavemente através de ações e palavras a respeito do seu doce de forma que a pessoa queira
                      mais do que nunca comprar, independente do preço.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sistema Divino - ATUALIZADO */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Sistema Divino de Vendas</h3>
              <p className="text-xl leading-relaxed mb-6">
                O Sistema Divino de Vendas é a única estratégia testada e baseada em princípios bíblicos para vender
                doces sem precisar de receitas que combina esses dois elementos poderosos: Vender Doce Apple™ e o
                Fechamento Invisível™.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Você vai aplicar esse sistema simples e altamente eficaz em apenas 2h por dia, ou somente nos fins de
                semana, e já pode faturar de R$3.000 a R$5.000 no primeiro mês.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <p className="text-xl font-bold">
                  Ele vai fazer você sair da produção na cozinha e, ao mesmo tempo, vai te dar o tempo e a liberdade que
                  você sempre quis. E é isso que você vai descobrir no Workshop Renda dos Céus com Doces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Depois do Workshop Renda dos Céus com Doces, você vai:
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Award className="h-8 w-8 text-green-600" />,
                  title: "Vender com confiança",
                  description: "Mesmo sendo tímido, construindo autoridade e respeito, sem forçar ninguém a comprar.",
                },
                {
                  icon: <Clock className="h-8 w-8 text-blue-600" />,
                  title: "Ter mais tempo livre",
                  description:
                    "Como passar mais tempo com a sua mulher e família, usando apenas 2h por dia, no seu trabalho, ou só aos fins de semana.",
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-purple-600" />,
                  title: "Vender de forma inteligente",
                  description: "Sem precisar de receitas, ingredientes caros, e sujar a cozinha.",
                },
                {
                  icon: <DollarSign className="h-8 w-8 text-yellow-600" />,
                  title: "Maior lucro",
                  description: "Passe a lucrar 2x a 5x a mais sobre o custo do doce. (Tem produtos que eu lucro 500%).",
                },
              ].map((benefit, index) => (
                <Card key={index} className="p-6 border-2 border-gray-200 hover:border-green-300 transition-colors">
                  <CardContent className="flex items-start space-x-4">
                    <div className="bg-gray-100 rounded-full p-3">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do Workshop */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              O Que Você Vai Aprender no Workshop
            </h2>

            <div className="grid gap-6">
              {[
                {
                  module: "Módulo 1",
                  title: "A Verdade Que Ninguém Fala: Por Que Seu Doce Não Vende",
                  topics: [
                    "Identificar os erros mais comuns ao vender doces",
                    "Como escolher doces prontos que têm alta demanda e margens de lucro",
                  ],
                },
                {
                  module: "Sessão 2",
                  title: "O Conceito de Doce Apple™",
                  topics: [
                    "Como identificar Doce Apple™, o doce que é fácil de vender",
                    "Os 6 critérios divinos para escolher doces com potencial de venda",
                    "Estratégias inteligentes e baratas pra conseguir comprar doces perfil Apple investindo 25 a 45 reais, com altas margens de lucros",
                  ],
                },
                {
                  module: "Sessão 3",
                  title: "O Fechamento Invisível™",
                  topics: [
                    "Como vender sem forçar, com técnicas de linguagem corporal e persuasão suave",
                    "Como abordar sem parecer pedinte e vender com dignidade e propósito",
                  ],
                },
                {
                  module: "Sessão 4",
                  title: "Guia Renda dos Céus: 300 a 700 em 72h com 2 a 3hrs no dia",
                  topics: [
                    "Como aplicar os 2 conceitos bíblicos em 72 horas, para começar a gerar lucro rápido",
                    "Como se comportar e vender em qualquer lugar, com segurança e eficácia",
                  ],
                },
              ].map((session, index) => (
                <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-2 border-gray-200">
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mr-4">
                        {session.module}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-800">{session.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {session.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data do Workshop - FONTE REDUZIDA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Data do Workshop Renda dos Céus com Doces</h2>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-3xl md:text-4xl font-bold mb-4">19/06</div>
              <div className="text-xl md:text-2xl font-semibold">às 19:45 hrs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Principal - ATUALIZADA COM CRONÔMETRO E ESCASSEZ - MOVIDA PARA ANTES DA GARANTIA */}
      <section id="offer-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Timer de Urgência */}
            <div className="bg-red-600 text-white rounded-2xl p-6 mb-12 text-center">
              <h3 className="text-2xl font-bold mb-4">⏰ OFERTA LIMITADA - TERMINA EM:</h3>
              <div className="flex justify-center space-x-4 text-3xl font-bold">
                <div className="bg-white text-red-600 rounded-lg p-4">
                  <div>{String(timeLeft.hours).padStart(2, "0")}</div>
                  <div className="text-sm">HORAS</div>
                </div>
                <div className="bg-white text-red-600 rounded-lg p-4">
                  <div>{String(timeLeft.minutes).padStart(2, "0")}</div>
                  <div className="text-sm">MIN</div>
                </div>
                <div className="bg-white text-red-600 rounded-lg p-4">
                  <div>{String(timeLeft.seconds).padStart(2, "0")}</div>
                  <div className="text-sm">SEG</div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <div className="text-gray-500 text-2xl line-through mb-4">De R$ 197,00</div>
              <div className="text-6xl font-bold text-green-600 mb-4">R$ 19,90</div>
              <Badge className="bg-red-600 text-white text-lg px-4 py-2 mb-4">De 30 vagas, 7 vagas restantes</Badge>
              <p className="text-red-600 font-bold">
                ⚠️ As vagas podem se encerrar já pelos próximos dias devido ao número limitado de inscrições!
              </p>
            </div>

            {/* Lotes de Preço Detalhados */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <Card className="p-4 bg-green-50 border-2 border-green-200">
                <CardContent className="text-center">
                  <div className="text-lg font-bold text-green-800">1º Lote</div>
                  <div className="text-2xl font-bold text-green-600">R$ 19,90</div>
                  <Badge className="bg-green-600 text-white mt-2">ATIVO AGORA</Badge>
                  <p className="text-sm text-green-700 mt-2">7 vagas restantes</p>
                </CardContent>
              </Card>
              <Card className="p-4 bg-gray-50 border-2 border-gray-200">
                <CardContent className="text-center">
                  <div className="text-lg font-bold text-gray-600">2º Lote</div>
                  <div className="text-2xl font-bold text-gray-500">R$ 97,00</div>
                  <Badge className="bg-gray-400 text-white mt-2">PRÓXIMO</Badge>
                  <p className="text-sm text-gray-500 mt-2">Após esgotamento</p>
                </CardContent>
              </Card>
              <Card className="p-4 bg-gray-50 border-2 border-gray-200">
                <CardContent className="text-center">
                  <div className="text-lg font-bold text-gray-600">3º Lote</div>
                  <div className="text-2xl font-bold text-gray-500">R$ 147,00</div>
                  <Badge className="bg-gray-400 text-white mt-2">FINAL</Badge>
                  <p className="text-sm text-gray-500 mt-2">Últimas vagas</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <a href="https://pay.cakto.com.br/36zpr6r_416804" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 text-2xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8"
                >
                  GARANTIR MINHA VAGA POR R$ 19,90
                  <ArrowRight className="ml-2 h-8 w-8" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus Exclusivos */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              🎁 Presentes Exclusivos que Você Vai Receber de GRAÇA
            </h2>

            <div className="grid gap-6">
              {[
                {
                  title: "Kit Voz de Provedor™",
                  subtitle: "Metanóia Para Vender com Confiança Mesmo Sendo Tímido",
                  value: "R$ 197,00",
                  description:
                    "Técnicas poderosas de linguagem corporal, frases prontas e exercícios práticos de confiança para você vender com postura e dignidade.",
                },
                {
                  title: "Devocional 'O Provedor é Você'",
                  subtitle: "Sabedoria Bíblica pra Tomar Decisões com Fé",
                  value: "R$ 67,00",
                  description:
                    "Sabedoria divina para tomar decisões dentro do seu trabalho e finanças com fé, clareza e sem medo.",
                },
                {
                  title: "Argumento Psicológico",
                  subtitle: "O que fazer quando a pessoa diz não para seu doce",
                  value: "R$ 97,00",
                  description:
                    "Estratégia secreta que vai transformar esse 'não' em vendas, com técnicas psicológicas poderosas.",
                },
                {
                  title: "Lucro Mínimo",
                  subtitle: "Como lucrar mesmo pra quem não comprou",
                  value: "R$ 147,00",
                  description:
                    "Estratégia Americana que maximiza seus lucros mesmo quando você não fechar uma venda completa.",
                },
                {
                  title: "Mini Lista Doce Apple™",
                  subtitle: "10 Modelos de Doces Apple Pra Vender",
                  value: "R$ 87,00",
                  description:
                    "10 modelos prontos de doces que já atendem aos critérios de sucesso, para você escolher e começar a vender.",
                },
                {
                  title: "Honra em Pé™",
                  subtitle: "Como Lidar com Julgamentos e Críticas",
                  value: "R$ 107,00",
                  description:
                    "A chave para manter a dignidade e confiança em qualquer situação, vendendo com propósito.",
                },
                {
                  title: "Grupo VIP 'Homens Prósperos'",
                  subtitle: "21 dias de suporte no WhatsApp",
                  value: "R$ 297,00",
                  description:
                    "Espaço para se conectar com pessoas na mesma jornada e receber apoio contínuo por 21 dias.",
                },
              ].map((bonus, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/80 backdrop-blur-sm border-2 border-yellow-200 hover:border-yellow-300 transition-colors"
                >
                  <CardContent className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Gift className="h-6 w-6 text-yellow-600 mr-2" />
                        <Badge className="bg-yellow-600 text-white">BÔNUS {index + 1}</Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{bonus.title}</h3>
                      <p className="text-lg text-gray-600 mb-3">{bonus.subtitle}</p>
                      <p className="text-gray-700 leading-relaxed">{bonus.description}</p>
                    </div>
                    <div className="ml-6 text-right">
                      <div className="text-2xl font-bold text-green-600">{bonus.value}</div>
                      <div className="text-sm text-gray-500">GRÁTIS</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garantia - MOVIDA PARA DEPOIS DOS BÔNUS COM TEXTO ATUALIZADO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-green-800 mb-4">Garantia de 14 Dias</h2>
              <p className="text-xl font-bold text-green-700 mb-6 bg-yellow-100 px-4 py-2 rounded-lg inline-block">
                Experimente por 14 DIAS GRÁTIS
              </p>
              <div className="bg-green-100 rounded-xl p-6">
                <p className="text-lg font-bold text-green-800">
                  Se você não perceber resultados, ou não gostar do que viu dentro do período, basta me enviar um e-mail
                  pedindo seu dinheiro de volta. Simples assim!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack de Valor - MOVIDO PARA DEPOIS DA GARANTIA COM TIMER E ESCASSEZ */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Tudo o Que Você Vai Receber</h2>

            {/* Timer de Urgência para o Stack de Valor */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-lg">Workshop Renda dos Céus com Doces</span>
                  <span className="text-xl font-bold">R$ 197,00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-lg">Kit Voz de Provedor™</span>
                  <span className="text-xl font-bold">R$ 197,00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-lg">Devocional "O Provedor é Você"</span>
                  <span className="text-xl font-bold">R$ 67,00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-lg">Argumento Psicológico</span>
                  <span className="text-xl font-bold">R$ 97,00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-lg">Lucro Mínimo</span>
                  <span className="text-xl font-bold">R$ 147,00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-lg">Mini Lista Doce Apple™</span>
                  <span className="text-xl font-bold">R$ 87,00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-lg">Honra em Pé™</span>
                  <span className="text-xl font-bold">R$ 107,00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-lg">Grupo VIP "Homens Prósperos"</span>
                  <span className="text-xl font-bold">R$ 297,00</span>
                </div>
              </div>

              <Separator className="my-6 bg-white/20" />

              <div className="flex justify-between items-center text-2xl font-bold mb-6">
                <span>VALOR TOTAL:</span>
                <span>R$ 1.196,00</span>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">HOJE APENAS:</div>
                <div className="text-6xl font-bold text-yellow-400 mb-6">R$ 19,90</div>
                <p className="text-lg opacity-90 mb-6">Economia de mais de R$ 1.176,00!</p>

                {/* Timer de Urgência para o Stack de Valor - MOVIDO PARA DEPOIS DO PREÇO */}
                <div className="bg-red-600 text-white rounded-2xl p-6 mb-8 mx-auto max-w-md">
                  <h3 className="text-xl font-bold mb-4">⏰ TEMPO RESTANTE PARA ESTA PROMOÇÃO:</h3>
                  <div className="flex justify-center space-x-4 text-2xl font-bold">
                    <div className="bg-white text-red-600 rounded-lg p-3">
                      <div>{String(valueStackTimer.hours).padStart(2, "0")}</div>
                      <div className="text-xs">HORAS</div>
                    </div>
                    <div className="bg-white text-red-600 rounded-lg p-3">
                      <div>{String(valueStackTimer.minutes).padStart(2, "0")}</div>
                      <div className="text-xs">MIN</div>
                    </div>
                    <div className="bg-white text-red-600 rounded-lg p-3">
                      <div>{String(valueStackTimer.seconds).padStart(2, "0")}</div>
                      <div className="text-xs">SEG</div>
                    </div>
                  </div>
                  <p className="text-lg mt-4 font-bold">7 vagas restantes para o valor do 1° lote</p>
                </div>
              </div>

              {/* Três Lotes de Preço - MOVIDO PARA DEPOIS DO TIMER */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-green-500 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold">1º Lote</div>
                  <div className="text-3xl font-bold">R$ 19,90</div>
                  <div className="text-sm">ATIVO AGORA</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold">2º Lote</div>
                  <div className="text-3xl font-bold">R$ 97,00</div>
                  <div className="text-sm">PRÓXIMO</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold">3º Lote</div>
                  <div className="text-3xl font-bold">R$ 147,00</div>
                  <div className="text-sm">FINAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Não Perca Esta Oportunidade Única!</h2>
            <p className="text-xl mb-8 leading-relaxed">
              As vagas podem se encerrar já pelos próximos dias, sem aviso prévio, devido ao número limitado de
              inscrições.
            </p>

            <a href="https://pay.cakto.com.br/36zpr6r_416804" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-12 py-6 text-2xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8"
              >
                GARANTIR MINHA VAGA AGORA
                <ArrowRight className="ml-2 h-8 w-8" />
              </Button>
            </a>

            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Pagamento via PIX</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Cartão de Crédito</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Acesso pelo celular</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Gabriel - REFORMULADO E TÍTULO ATUALIZADO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Sobre Mim: Gabriel</h2>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>
                    Apaixonado por Jesus, empreendedorismo, e de futebol, comecei vendendo balas de goma no semáforo em
                    Junho de 2022, apenas pela vontade de empreender e não ter que trabalhar CLT.
                  </strong>
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  <strong>
                    Quando me aperfeiçoei em estratégias de vendas e encontrei o doce certo, tinha dias que tirava quase
                    R$950 de lucro só em 3 dias (sexta e final de semana) trabalhando 4-7hrs.
                  </strong>
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  <strong>
                    Ajudo meus revendedores a levantar dinheiro para renda extra e casamentos de forma mais fácil com
                    doces sem precisarem de receitas, além de ajudar a gerar lucros para bares e restaurantes
                    reconhecidos que revendem meus doces.
                  </strong>
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <p className="text-lg font-semibold text-blue-800">
                    <strong>
                      Minha missão é facilitar a vida financeira de CLT's cristãos que estão em um ciclo de esforço sem
                      retorno com vendas.
                    </strong>
                  </p>
                  <p className="text-lg text-blue-700 mt-2">
                    <strong>Vamos juntos nessa?</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Perguntas Frequentes</h2>

            <div className="space-y-6">
              {[
                {
                  question: "O que é o workshop e o que irei aprender com ele?",
                  answer:
                    "O Workshop Renda dos Céus com Doces é um treinamento completo que ensina o Sistema Divino de Vendas, combinando o conceito de Doce Apple™ e Fechamento Invisível™ para você faturar de R$3.000 a R$5.000 por mês vendendo doces sem precisar de receitas.",
                },
                {
                  question: "Por quanto tempo as vagas ficarão abertas?",
                  answer:
                    "As vagas são limitadas a apenas 30 pessoas e podem se encerrar a qualquer momento sem aviso prévio. Recomendamos que você garante sua vaga o quanto antes.",
                },
                {
                  question: "Preciso saber cozinhar pra vender?",
                  answer:
                    "Não! Esse é exatamente o diferencial do nosso método. Você vai aprender a vender doces prontos, produzidos por terceiros, sem precisar de receitas ou ligar o fogão.",
                },
                {
                  question: "Eu sou tímido, como vou vender sem me expor?",
                  answer:
                    "O Kit Voz de Provedor™ (bônus exclusivo) foi criado especialmente para pessoas tímidas. Você vai aprender técnicas de linguagem corporal e abordagens que fazem você vender com confiança, sem se sentir exposto.",
                },
                {
                  question: "Eu não tenho muito tempo, como posso aplicar a estratégia?",
                  answer:
                    "O sistema foi desenvolvido para funcionar em apenas 2h por dia ou somente nos fins de semana. É perfeito para quem tem pouco tempo disponível.",
                },
                {
                  question: "Não tenho experiência alguma, esse workshop serve pra mim?",
                  answer:
                    "Se está com disposição para fazer dar certo, sim! Entregamos tudo o que você precisa aprender para começar do zero, mesmo sem nenhuma experiência ou conhecimento prévio sobre vender doces.",
                },
                {
                  question: "Minha situação financeira não é das melhores, o que recomenda?",
                  answer:
                    "A reflexão que orientamos é: se não mudar o que está fazendo hoje, você acha que sua situação vai mudar? Em 10-25 minutos vendendo da forma que ensino, você paga o curso. O restante é lucro.",
                },
                {
                  question: "Quais formas de pagamento?",
                  answer: "À vista no PIX e cartão de crédito.",
                },
                {
                  question: "Poderei assistir pelo meu celular?",
                  answer: "Sim! Você pode assistir ao workshop pelo celular, tablet ou computador.",
                },
                {
                  question: "Se eu não gostar, tem alguma garantia?",
                  answer:
                    "Sim! Oferecemos 14 dias de garantia: 7 dias incondicional + 7 dias condicional pós-workshop. Se não ficar satisfeito, devolvemos seu dinheiro.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6 border-2 border-gray-200">
                  <CardContent>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp - ATUALIZADO COM BOTÃO */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h2>
            <p className="text-xl mb-8">
              Caso tenha dúvidas que não foram respondidas, clique aqui e me chame no WhatsApp!
            </p>
            <a href="https://wa.me/554198444682" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                FALAR NO WHATSAPP AGORA
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - COM TERMOS E CONDIÇÕES */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Workshop Renda dos Céus com Doces. Todos os direitos reservados.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="/termos" className="text-gray-400 hover:text-white transition-colors">
                Termos e Condições
              </a>
              <a href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
