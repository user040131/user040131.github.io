export default function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 py-16 text-gray-900">
      <section className="bg-white rounded-2xl shadow-lg w-[900px] max-w-full px-12 py-10 relative">
        {children}
      </section>
    </main>
  );
}