import { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !comment) return;

        /* fetch email - add later */

        const now = new Date();
        const formattedDate = `Em ${now.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}, ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;

        setCommentsList([{ email, comment, date: formattedDate, id: Date.now() }, ...commentsList]);
        setEmail('');
        setComment('');
    };

    return (
        <div className="w-full max-w-6xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
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
                        <div className="flex flex-col gap-8">
                            {commentsList.map((c) => (
                                <div key={c.id} className="animate-fade-in flex flex-col">
                                    <p className="font-bold text-[var(--text-h)] text-lg mb-1">{c.email}</p>
                                    <p className="text-[var(--text)] mb-4">{c.date}</p>
                                    <p className="text-[var(--text-h)] leading-relaxed whitespace-pre-wrap">{c.comment}</p>
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
