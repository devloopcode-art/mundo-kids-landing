"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

interface CandidateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CandidateModal({ isOpen, onClose }: CandidateModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    responsavel: "",
    email: "",
    telefone: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/candidatos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Erro ao salvar inscrição.");

      setStatus({ type: "success", message: "Inscrição do candidato mirim realizada com sucesso! ✨" });
      setFormData({ nome: "", idade: "", responsavel: "", email: "", telefone: "" });
      
      // Fecha o modal após 2 segundos em caso de sucesso
      setTimeout(() => { onClose(); setStatus(null); }, 2500);
    } catch (error: any) {
      setStatus({ type: "error", message: error.message || "Erro interno no servidor." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#120E24] border border-purple-500/20 rounded-2xl p-6 md:p-8 shadow-2xl">
        
        {/* Botão de fechar */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <Icon icon="tabler:x" className="text-24" />
        </button>

        <h3 className="text-xl md:text-2xl font-black text-white text-center uppercase tracking-wide mb-2">
          Ficha de Inscrição Mirim
        </h3>
        <p className="text-gray-400 text-sm text-center mb-6">
          Preencha os dados do candidato para participar da Experiência Mundo Kids.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Nome do Candidato (a)</label>
            <input type="text" name="nome" required value={formData.nome} onChange={handleChange} placeholder="Nome completo da criança" className="w-full bg-[#0B0813] text-white placeholder-gray-600 px-4 py-2.5 rounded-xl border border-gray-800 focus:border-purple-500 focus:outline-none text-sm" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Idade</label>
              <input type="number" name="idade" required value={formData.idade} onChange={handleChange} placeholder="Ex: 7" className="w-full bg-[#0B0813] text-white placeholder-gray-600 px-4 py-2.5 rounded-xl border border-gray-800 focus:border-purple-500 focus:outline-none text-sm" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Nome do Responsável</label>
              <input type="text" name="responsavel" required value={formData.responsavel} onChange={handleChange} placeholder="Mãe, pai ou tutor" className="w-full bg-[#0B0813] text-white placeholder-gray-600 px-4 py-2.5 rounded-xl border border-gray-800 focus:border-purple-500 focus:outline-none text-sm" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase mb-1">E-mail do Responsável</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="exemplo@email.com" className="w-full bg-[#0B0813] text-white placeholder-gray-600 px-4 py-2.5 rounded-xl border border-gray-800 focus:border-purple-500 focus:outline-none text-sm" />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Telefone / WhatsApp</label>
            <input type="tel" name="telefone" required value={formData.telefone} onChange={handleChange} placeholder="(11) 99999-9999" className="w-full bg-[#0B0813] text-white placeholder-gray-600 px-4 py-2.5 rounded-xl border border-gray-800 focus:border-purple-500 focus:outline-none text-sm" />
          </div>

          {status && (
            <div className={`p-3 rounded-xl font-semibold text-xs text-center text-white ${status.type === "success" ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-red-600"}`}>
              {status.message}
            </div>
          )}

          <button type="submit" disabled={loading} className="w-full py-3 mt-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold rounded-xl shadow-lg transition-all text-sm uppercase tracking-wider disabled:opacity-50">
            {loading ? "Enviando Inscrição..." : "Finalizar Inscrição"}
          </button>
        </form>
      </div>
    </div>
  );
}