export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Política de Privacidade</h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold mb-4">1. Coleta de Informações</h2>
            <p className="mb-6">
              Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone quando se inscreve no
              workshop ou entra em contato conosco.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Uso das Informações</h2>
            <p className="mb-6">Utilizamos suas informações para:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Processar sua inscrição no workshop</li>
              <li>Enviar materiais e comunicações relacionadas ao curso</li>
              <li>Fornecer suporte ao cliente</li>
              <li>Melhorar nossos serviços</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de Informações</h2>
            <p className="mb-6">
              Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto quando necessário
              para processar pagamentos ou cumprir obrigações legais.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Segurança</h2>
            <p className="mb-6">
              Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso,
              alteração, divulgação ou destruição não autorizados.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p className="mb-6">
              Utilizamos cookies para melhorar sua experiência em nosso site. Você pode configurar seu navegador para
              recusar cookies, mas isso pode afetar a funcionalidade do site.
            </p>

            <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
            <p className="mb-6">
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos,
              entre em contato conosco através do WhatsApp: (41) 9844-4682
            </p>

            <h2 className="text-2xl font-semibold mb-4">7. Alterações na Política</h2>
            <p className="mb-6">
              Podemos atualizar esta política de privacidade periodicamente. Recomendamos que você revise esta página
              regularmente para se manter informado sobre nossas práticas de privacidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
