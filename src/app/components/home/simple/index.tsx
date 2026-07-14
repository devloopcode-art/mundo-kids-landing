import Link from 'next/link'

const Simple = () => {
  return (
    <section className='bg-simple-bg relative py-20 before:absolute before:w-full before:h-full before:bg-arrow-bg before:bg-no-repeat before:top-10'>
      <div className=''>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-2xl mx-auto'>
            {/* Título adaptado para o Mundo Kids com destaque em gradiente */}
            <h2 className='text-center font-black mb-6 uppercase text-white tracking-wide text-3xl md:text-4xl leading-tight'>
              Uma oportunidade <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">única e segura</span> para o seu filho brilhar
            </h2>
            
            {/* Descrição focada no valor do evento para as famílias */}
            <p className='text-center text-gray-300 text-lg font-normal mb-8 leading-relaxed'>
              Proporcione uma experiência inesquecível de passarela, aprendizado e visibilidade profissional. Nosso projeto oferece todo o suporte para que crianças e adolescentes iniciem sua jornada na moda com confiança e alegria.
            </p>
          </div>
          
          {/* Botão de ação direta para inscrição */}
          <div className='flex justify-center'>
            <Link
              href={'#inscricao-section'} // Redireciona para a seção do formulário de inscrição
              className='text-xl font-bold text-white py-4 px-8 lg:px-12 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 hover:brightness-110 rounded-xl cursor-pointer shadow-[0_4px_20px_rgba(236,72,153,0.3)] transition-all'
            >
              Garantir Vaga no Desfile
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Simple