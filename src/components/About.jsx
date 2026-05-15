import meDrawing from '../assets/me_drawing.png';
import Footer from './Footer';

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-h)] mb-4 tracking-tight">Sobre mim</h1>
        <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mb-8"></div>
      </div>
      
      <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-8 md:p-12 shadow-[var(--shadow)] text-left flex flex-col md:flex-row gap-10 items-center">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--code-bg)] flex-shrink-0 shadow-lg">
          <img src={meDrawing} alt="Profile" className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[var(--text-h)] mb-4">Oi, meu nome é Mateus e eu sou entusiasta de WebDev</h2>
          <p className="text-[var(--text)] text-lg leading-relaxed mb-6">
            Durante o curso de ADS tive/tenho contato com muitas linguages, dentre elas uma coisa que se destacou bastante foi o desenvolvimento web devido a eu poder ver a "UI" poucos segundos após eu ter feito o código, ver o resultado a medida que estou construindo é o grande diferencial, a visão do horizonte me mantem engajado com que estou produzindo e isso me levou até aqui!
          </p>
          <p className="text-[var(--text)] text-lg leading-relaxed">
            Esses pequenos projetos são apenas o início do que um grande sonho.
          </p>
          {<Footer />}
        </div>
      </div>
    </div>
  );
};

export default About;
