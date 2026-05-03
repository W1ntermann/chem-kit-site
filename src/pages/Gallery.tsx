import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Gallery() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main className="flex-1 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-2xl font-bold sm:text-3xl">Галерея</h1>
          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            Тут буде представлено наші роботи, фото та відео з виробництва, монтажу та сервісу обладнання.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex h-40 items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-200 text-base font-semibold text-gray-500 sm:h-48 sm:text-lg"
              >
                Фото
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
