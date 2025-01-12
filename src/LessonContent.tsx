import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VideoPlayer from "@/VideoPlayer"
import CodeEditor from "@/CodeEditor"
import { CodeSnippet } from "./CodeSnippets"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LessonContent() {
  const [activeTab, setActiveTab] = useState("video")
  const examples = [
    {
      title: "Variáveis",
      code: `nome = "Maria"
idade = 25`
    },
    {
      title: "Entrada e Saída",
      code: `nome = input("Qual é o seu nome? ")
print("Olá, " + nome + "!")`
    },
    {
      title: "Condicionais",
      code: `idade = int(input("Qual é a sua idade? "))
if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")`
    },
    {
      title: "Laços (Loops)",
      code: `for i in range(5):
    print("Número:", i)`
    },
    {
      title: "Funções",
      code: `def saudacao(nome):
    print("Olá, " + nome + "!")
saudacao("Ana")`
    }
  ]

  const exercises = [
    {
      title: "1. Exiba uma mensagem na tela",
      description: "Escreva um programa que mostre a mensagem \"Bem-vindo à programação!\" na tela.",
      code: `print("Bem-vindo à programação!")`
    },
    {
      title: "2. Soma de dois números",
      description: "Peça ao usuário para digitar dois números e exiba a soma deles.",
      code: `num1 = int(input("Digite o primeiro número: "))
num2 = int(input("Digite o segundo número: "))
soma = num1 + num2
print("Resultado:", soma)`
    },
    {
      title: "3. Verifique se o número é par ou ímpar",
      description: "Peça ao usuário um número inteiro e diga se ele é par ou ímpar.",
      code: `numero = int(input("Digite um número: "))
if numero % 2 == 0:
    print("Resultado: Par")
else:
    print("Resultado: Ímpar")`
    },
    {
      title: "4. Tabuada de multiplicação",
      description: "Peça ao usuário um número e exiba a tabuada desse número (do 1 ao 10).",
      code: `numero = int(input("Digite um número: "))
for i in range(1, 11):
    print(f"{numero} x {i} = {numero * i}")`
    },
    {
      title: "5. Contagem regressiva",
      description: "Escreva um programa que mostre uma contagem regressiva de 10 até 1 e, ao final, exiba \"Feliz Ano Novo!\".",
      code: `for i in range(10, 0, -1):
    print(i)
print("Feliz Ano Novo!")`
    }
  ]


  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        
        <h2 className="text-3xl font-bold mb-4">Introdução à Programação </h2>
       
        <h4 className="text-3xl font-bold mb-4">O que é programação?</h4>
        <p className="mb-4">
        Programação é o processo de criar instruções para que o computador execute tarefas. Usamos linguagens de programação, que são como idiomas que os computadores entendem, para criar programas.</p>
        <h4 className="text-3xl font-bold mb-4">O que é Python? </h4>
        <p className="mb-4">  O Python é uma linguagem de programação amplamente usada em aplicações da Web, desenvolvimento de software, ciência de dados e machine learning (ML). Os desenvolvedores usam o Python porque é eficiente e fácil de aprender e pode ser executada em muitas plataformas diferentes.
<br /><br />
          Nesta lição, você aprenderá os conceitos básicos de programação e usaremos Python para a nossa primeira linguagem, incluindo variáveis, 
          tipos de dados e estruturas de controle. Assista ao vídeo e experimente o código ao lado.
        </p>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="teoria">Teoria</TabsTrigger>
            <TabsTrigger value="exercicios">Exercicios</TabsTrigger>
          </TabsList>
          <TabsContent value="teoria">
          <div className="space-y-6">
            <section>
              <VideoPlayer></VideoPlayer>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Elementos básicos da programação:</h3>
              <Accordion type="single" collapsible className="w-full">
                {examples.map((example, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{example.title}</AccordionTrigger>
                    <AccordionContent>
                      <CodeSnippet code={example.code} language="python" />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
          </TabsContent>   


                   
        <TabsContent value="exercicios">
          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              {exercises.map((exercise, index) => (
                <AccordionItem value={`exercise-${index}`} key={index}>
                  <AccordionTrigger>{exercise.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">{exercise.description}</p>
                    <CodeSnippet code={exercise.code} language="python" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </TabsContent>
      </Tabs>

      
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Experimente o Código:</h3>
        <CodeEditor />
      </div>
    </div>
  )
}
