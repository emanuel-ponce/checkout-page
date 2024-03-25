import 'tailwindcss/tailwind.css';
import { ReactNode } from 'react';
interface CheckoutLayoutProps {
  children: ReactNode[];
}

export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  return (
    <div className="flex flex-wrap w-full h-screen">
      {/* Columna Izquierda */}
      <div className="w-full md:w-1/2">
        {children[0]} {/* Contenido de la columna izquierda */}
      </div>

      {/* Columna Derecha */}
      <div className="w-full md:w-1/2">
        {children[1]} {/* Contenido de la columna derecha */}
      </div>
    </div>
  );
}
