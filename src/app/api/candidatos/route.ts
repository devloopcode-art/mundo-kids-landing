import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, idade, responsavel, email, telefone } = body;

    // Validação dos campos obrigatórios
    if (!nome || !idade || !responsavel || !email || !telefone) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    // Insere na nova tabela de candidatos
    const { data, error } = await supabase
      .from("candidatos")
      .insert([
        { nome, idade, responsavel, email, telefone }
      ])
      .select();

    if (error) {
      console.error("Erro no Supabase (Candidatos):", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("Erro crítico na API de Candidatos:", err.message || err);
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}