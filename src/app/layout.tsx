import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Antonio Victoriano - Consultor Empresarial',
  description: 'Especialista en Business Intelligence, Power BI y consultoría empresarial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-primary text-text">
        {children}
      </body>
    </html>
  );
}