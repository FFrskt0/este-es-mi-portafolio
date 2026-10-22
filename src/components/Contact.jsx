export default function Contact() {
  return (
    <section className="space-y-4 text-center py-10 border-t border-slate-800">
      <h2 className="text-2xl font-bold">Contacto</h2>
      <p className="text-slate-400">¿Quieres revisar más de mi código o contactarme?</p>
      <a 
        href="https://github.com/FFrskt0" 
        target="_blank" 
        rel="noreferrer" 
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 font-semibold rounded-lg transition"
      >
        Ir a mi perfil de GitHub
      </a>
    </section>
  );
}