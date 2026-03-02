import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Configuração da fonte oficial da Meta
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  // Título otimizado para 50-60 caracteres
  title: "Meta Consultoria | Engenharia e Gestão de Negócios em Niterói - UFF",
  // Descrição entre 150-200 caracteres
  description: "Soluções estratégicas em consultoria empresarial com foco em Engenharia e Gestão de Negócios na UFF. Impulsione o crescimento da sua empresa com a excelência dos alunos da UFF e consultoria especializada em Niterói.",
  // Tag Canônica
  alternates: {
    canonical: "https://metaconsultoria.com.br",  //URL Fake
  },
  // Open Graph (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    title: "Meta Consultoria | Estratégia e Propósito",
    description: "Empresa júnior líder em Niterói e região.",
    url: "https://metaconsultoria.com.br",
    siteName: "Meta Consultoria",
    locale: "pt_BR",
    type: "website",
    images: ["/assets/og-image.png"], 
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Meta Consultoria | Estratégia e Propósito",
    description: "Empresa júnior líder em Niterói.",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        {/* JSON-LD: Dados Estruturados para Organização */}
        <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Meta Consultoria",
                "url": "https://metaconsultoria.com.br",
                "logo": "https://metaconsultoria.com.br/assets/Logo-Meta-Consultoria.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+55-21-99122-7278",
                  "contactType": "customer service"
                },
                "address": {
                  "@type": "PostalAddress",
                          "addressLocality": "Niterói",
                  "addressRegion": "RJ",
                  "postalCode": "24210-350",
                  "addressCountry": "BR"
                }
              }),
            }}
          />
        {children}
      </body>
    </html>
  );
}
