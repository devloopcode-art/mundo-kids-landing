import { FaqType } from "@/app/types/faq";
import { FeatureType } from "@/app/types/features";
import { FooterType } from "@/app/types/footerlink";
import { HeaderItem } from "@/app/types/menu";
import { SocialType } from "@/app/types/sociallink";
import { WorkType } from "@/app/types/work";

// Menu de navegação adaptado para o Mundo Kids
export const Headerdata: HeaderItem[] = [
  { label: "Início", href: "/" },
  { label: "Pilares", href: "/#features-section" },
  { label: "Como Funciona", href: "/#work-section" },
  { label: "Dúvidas", href: "/#faq-section" },
  { label: "Contato", href: "/#contact" },
];

// Corrigido: Em produção no domínio próprio da Vercel, o caminho deve iniciar direto da raiz "/"
const basePath = "";

export const Companiesdata: { imgSrc: string }[] = [
  {
    imgSrc: `${basePath}/images/companies/birdseye.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/break.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/keddar.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/shield.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/tandov.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/tree.svg`,
  },
];

// Passos adaptados e traduzidos para o Mundo Kids Fashion Experience
export const workdata: WorkType[] = [
  {
    imgSrc: `${basePath}/images/work/icon-one.svg`,
    heading: "Inscrição Online",
    subheading:
      "Preencha o formulário de cadastro com os dados do pequeno talento. É rápido, seguro e o primeiro passo para essa grande jornada.",
  },
  {
    imgSrc: `${basePath}/images/work/icon-two.svg`,
    heading: "Preparação & Workshop",
    subheading:
      "Nossa equipe de profissionais dará todo o suporte, dicas de postura, passarela e desinibição para as crianças brilharem com naturalidade.",
  },
  {
    imgSrc: `${basePath}/images/work/icon-three.svg`,
    heading: "O Grande Desfile",
    subheading:
      "O momento de brilhar na passarela! Uma estrutura incrível com marcas parceiras, fotos profissionais e muita diversão para a família.",
  },
];

// Pilares adaptados para o Mundo Kids
export const Featuresdata: FeatureType[] = [
  {
    imgSrc: `${basePath}/images/features/featureOne.svg`,
    heading: "Ambiente Seguro",
    subheading:
      "Toda a nossa estrutura e equipe são preparadas para acolher as crianças e as famílias com total segurança e respeito.",
  },
  {
    imgSrc: `${basePath}/images/features/featureTwo.svg`,
    heading: "Participação Gratuita",
    subheading:
      "A inscrição e a participação no workshop inicial do projeto são totalmente gratuitas para os novos talentos selecionados.",
  },
  {
    imgSrc: `${basePath}/images/features/featureThree.svg`,
    heading: "Mídia & Divulgação",
    subheading:
      "Tenha fotos e vídeos profissionais do desfile do seu filho para guardar de lembrança ou iniciar um portfólio de sucesso.",
  },
];

// Dúvidas Frequentes (FAQ) adaptadas para o Mundo Kids
export const Faqdata: FaqType[] = [
  {
    heading: "1. Como meu filho pode participar?",
    subheading:
      "Basta preencher o formulário de inscrição em nossa página com as informações de contato do responsável e os dados básicos da criança. Nossa equipe entrará em contato para agendar as próximas etapas.",
  },
  {
    heading: "2. Crianças sem experiência podem participar?",
    subheading:
      "Com certeza! O Mundo Kids foi feito justamente para revelar novos talentos. Oferecemos preparação básica para que todas as crianças se sintam seguras, confiantes e se divirtam na passarela.",
  },
  {
    heading: "3. O evento é seguro para as famílias?",
    subheading:
      "Sim, segurança é a nossa prioridade número um. O evento ocorre em ambientes controlados, com acesso monitorado, equipe de apoio dedicada e total acompanhamento dos pais ou responsáveis em todas as fases.",
  },
];

export const Sociallinkdata: SocialType[] = [
  {
    imgsrc: `${basePath}/images/footer/insta.svg`,
    href: "https://instagram.com/",
  },
  {
    imgsrc: `${basePath}/images/footer/dribble.svg`,
    href: "https://dribble.com/",
  },
  {
    imgsrc: `${basePath}/images/footer/twitter.svg`,
    href: "https://twitter.com/",
  },
  {
    imgsrc: `${basePath}/images/footer/youtube.svg`,
    href: "https://youtube.com/",
  },
];

export const Footerlinkdata: FooterType[] = [
  { label: "Início", href: "/" },
  { label: "Pilares", href: "/#features-section" },
  { label: "Como Funciona", href: "/#work-section" },
  { label: "Dúvidas", href: "/#faq-section" },
  { label: "Contato", href: "/#contact" },
];