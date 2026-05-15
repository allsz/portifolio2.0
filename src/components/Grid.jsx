import { sites } from '../assets/sites.js';

const Grid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sites.map((site) => (
        <a
          key={site.id}
          href={site.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col w-full bg-[var(--bg)] rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 shadow-[var(--shadow)] hover:shadow-xl hover:-translate-y-2 cursor-pointer no-underline"
        >
          <div className="w-full aspect-[16/9] overflow-hidden bg-[var(--code-bg)] relative">
            <img
              src={site.image}
              alt={site.titulo}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x400/1f2028/c084fc?text=' + encodeURIComponent(site.titulo);
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
          <div className="p-6 flex items-center justify-between bg-[var(--social-bg)]">
            <h3 className="text-xl font-semibold text-[var(--text-h)] m-0">{site.titulo}</h3>
            <span className="text-[var(--accent)] flex items-center gap-1 opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-medium">
              Visit
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Grid;
