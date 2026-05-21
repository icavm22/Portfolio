import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Antonio Victoriano - Consultor Empresarial',
  description: 'Portafolio profesional especializado en Business Intelligence y Control de Proyectos de Construcción',
  keywords: 'Business Intelligence, Project Management, Construction, BI, Dashboard, Power BI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
