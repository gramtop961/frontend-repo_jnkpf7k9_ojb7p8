import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Fyron
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl">
              We build world-class web and mobile experiences, and craft our own AI products. Fyron blends the strength of the dragon with the relentless will of the phoenix.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 font-medium hover:bg-gray-800 transition">
                Explore services
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-md bg-white/80 backdrop-blur border border-gray-200 text-gray-900 px-5 py-3 font-medium hover:bg-white transition">
                View work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />
    </section>
  );
}
