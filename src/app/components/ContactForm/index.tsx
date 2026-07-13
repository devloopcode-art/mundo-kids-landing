"use client";
import { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // Faz a chamada real para a rota que criamos no Next.js
      const response = await fetch("/api/inscricao/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocorreu um erro ao enviar.");
      }

      // Define a mensagem de sucesso igual à do seu layout
      setStatus({
        type: "success",
        message: "Obrigado pelo contato! Nossa equipe retornará o mais breve possível.",
      });
      
      // Limpa o formulário após gravar no banco
      setFormData({ nome: "", sobrenome: "", email: "", telefone: "", mensagem: "" });
    } catch (error: any) {
      setStatus({
        type: "error",
        message: error.message || "Erro de conexão com o servidor.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0B0813]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12 uppercase tracking-wide">
          Entre em Contato
        </h2>

        <form onSubmit={handleSubmit} className="bg-[#120E24] p-8 md:p-10 rounded-2xl border border-purple-500/10 shadow-2xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Nome</label>
              <input
                type="text"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: Maria"
                className="w-full bg-[#0B0813] text-white placeholder-gray-600 px-4 py-3 rounded-xl border border-gray-800 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                required
                value={formData.sobrenome}
                onChange={handleChange}
                placeholder="Ex: Silva"
                className="w-full bg-[#0B0813] text-white placeholder-gray-600 px-4 py-3 rounded-xl border border-gray-800 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="seu-email@exemplo.com"
                className="w-full bg-[#0B0813] text-white placeholder-gray-600 px-4 py-3 rounded-xl border border-gray-800 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Telefone / WhatsApp</label>
              <input
                type="tel"
                name="telefone"
                required
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="w-full bg-[#0B0813] text-white placeholder-gray-600 px-4 py-3 rounded-xl border border-gray-800 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Mensagem / Dúvida</label>
            <textarea
              name="mensagem"
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Conte-nos sobre sua loja ou modelo interessado..."
              className="w-full bg-[#0B0813] text-white placeholder-gray-600 px-4 py-3 rounded-xl border border-gray-800 focus:border-purple-500 focus:outline-none transition-colors resize-none"
            ></textarea>
          </div>

          {status && (
            <div className={`p-4 rounded-xl font-semibold text-sm text-center text-white ${
              status.type === "success" 
                ? "bg-gradient-to-r from-purple-600 to-pink-600" 
                : "bg-red-600"
            }`}>
              {status.message}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold rounded-xl shadow-lg transition-all disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;