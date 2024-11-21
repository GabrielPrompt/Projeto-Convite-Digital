export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
}

function Pagina(props: PaginaProps) {
  return (
    <div 
      className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png') text-white"
    >
      <main className={props.className}>{props.children}</main>
    
    </div>
  );
}

export default Pagina;
