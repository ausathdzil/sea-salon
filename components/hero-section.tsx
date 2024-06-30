export default function HeroSection() {
  return (
    <section className="bg-hero-image bg-cover bg-center w-full h-96 border-b-2 border-pink-500">
      <div className="backdrop-blur-sm w-full h-full flex flex-col py-36 px-12">
        <h1 className="text-7xl sm:text-8xl font-bold text-center sm:text-right bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          SEA Salon
        </h1>
        <p className="text-xl font-bold text-center sm:text-right">
          Beauty and Elegance Redefined
        </p>
      </div>
    </section>
  );
}
