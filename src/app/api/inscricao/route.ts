import { NextResponse } from "next/server";
// Mudamos a importação para caminho relativo para não ter erro de leitura
import { supabase } from "../../../lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, sobrenome, email, telefone, mensagem } = body;

    // Validação rápida
    if (!nome || !sobrenome || !email || !telefone) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    // Se o cliente supabase não iniciar, este bloco vai nos dizer no console
    if (!supabase) {
      console.error("ERRO: O cliente do Supabase não foi iniciado corretamente.");
      return NextResponse.json({ error: "Erro de configuração do banco." }, { status: 500 });
    }

    // Insere na tabela
    const { data, error } = await supabase
      .from("inscricoes")
      .insert([
        { nome, sobrenome, email, telefone, mensagem }
      ])
      .select();

    if (error) {
      console.error("Erro interno do Supabase:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("Erro crítico na API Route:", err.message || err);
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}