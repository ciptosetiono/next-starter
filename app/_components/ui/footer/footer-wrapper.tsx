
export default function FooterWrapper({children} :{children: React.ReactNode}){

  return (
    <footer className="flex px-6 bg-white rounded-lg shadow items-center justify-between dark:bg-zinc-950">
      {children}
    </footer>
  );
}

