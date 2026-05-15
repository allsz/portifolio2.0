import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !comment) return;
    
    setCommentsList([...commentsList, { email, comment, id: Date.now() }]);
    setEmail('');
    setComment('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-h)] mb-4 tracking-tight">Contato</h1>
        <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mb-8"></div>
      </div>

      <div className="bg-[var(--bg)] border border-[var(--border)] rounded-4xl p-8 md:p-16 shadow-[var(--shadow)] text-left">
        <h2 className="text-4xl font-bold text-[var(--text-h)] mb-10">Deixe seu contato.</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[var(--text-h)] font-medium">Seu email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border border-[var(--border)] bg-[var(--code-bg)] text-[var(--text-h)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="comment" className="text-[var(--text-h)] font-medium">Comentário</label>
            <textarea 
              id="comment" 
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-4 rounded-xl border border-[var(--border)] bg-[var(--code-bg)] text-[var(--text-h)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-y"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-4 px-6 rounded-xl bg-[var(--text-h)] text-[var(--bg)] font-bold hover:bg-[var(--accent)] hover:text-white transition-colors duration-300 mt-4 shadow-md hover:shadow-lg text-lg"
          >
            Enviar
          </button>
        </form>
        
        <div className="pt-8 border-t border-[var(--border)]">
          {commentsList.length === 0 ? (
            <p className="text-[var(--text)] text-lg italic">"Só sei que tudo sei." - Setarcos</p>
          ) : (
            <div className="flex flex-col gap-6">
              {commentsList.map((c) => (
                <div key={c.id} className="bg-[var(--code-bg)] p-6 rounded-2xl border border-[var(--border)] shadow-sm animate-fade-in">
                  <p className="font-bold text-[var(--text-h)] mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold text-sm">
                      {c.email.charAt(0).toUpperCase()}
                    </span>
                    {c.email}
                  </p>
                  <p className="text-[var(--text)] leading-relaxed ml-10">{c.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
