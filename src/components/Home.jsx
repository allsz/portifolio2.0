import Grid from './Grid';
import Footer from './Footer';


const Home = () => {
  return (
    <>
      <div className="w-full animate-fade-in">
        <div className="flex flex-col items-center text-center mb-16 w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-h)] mb-4 tracking-tight">Meu Portfólio</h1>
          <p className="text-[var(--text)] text-lg md:text-xl max-w-4xl mx-auto text-center">
            Esses são alguns dos projetos que desenvolvi no segundo semestre do meu curso de Análise e Desenvolvimento de Sistemas, no Instituto Federal de São Paulo - Campus Bragança Paulista.
          </p>
        </div>
        
        {/* Project Grid */}
        <Grid />
      </div>
      <div className="mt-20 w-full animate-fade-in text-center">
        <Footer />
      </div>
    </>
  );
};

export default Home;
