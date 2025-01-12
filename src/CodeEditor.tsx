import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "./theme-provider"
import { Divide, Loader2 } from 'lucide-react'


export default function CodeEditor() {
  const [code, setCode] = useState(`# Escreva seu código Python aqui
print("Olá, mundo!")`)
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { theme } = useTheme()
  const [apiResponse, setApiResponse] = useState<any>(null)

  const handleRunCode = async () => {
    setIsLoading(true)
    setOutput('') // Limpa a saída anterior
    setApiResponse(null)
    try {
      console.log('Enviando código para execução:', code) // Debug log
      const response = await fetch('http://localhost:5000/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
      console.log('Status da resposta:', response.status) // Debug log


      const data = await response.json()
      console.log('Dados recebidos:', data) // Debug log

      if (data.error) {
        setOutput(`Erro: ${data.error}`)
      } else {
        setOutput(data.output || 'Nenhuma saída gerada')
      }
    } catch (error) {
      console.error('Erro ao executar o código:', error)
      setOutput('Erro ao executar o código. Por favor, tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="font-mono h-64 w-full p-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        placeholder="Escreva seu código Python aqui"
      />
      <Button onClick={handleRunCode} disabled={isLoading} className='w-full'> {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Executando...
          </>
        ) : (
          'Executar Código'
        )}
      </Button>
      {output && (
        <div className={`mt-4 p-2 rounded ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
          <h3 className="font-bold mb-2">Saída:</h3>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      )}
      {apiResponse && (
        <div className={`mt-4 p-4 rounded-md font-mono ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
        }`}>
          <h3 className="font-bold mb-2">Resposta da API:</h3>
          <pre className="whitespace-pre-wrap">{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

