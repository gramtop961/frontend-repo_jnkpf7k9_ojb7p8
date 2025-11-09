export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© " + new Date().getFullYear() + " Fyron. All rights reserved.</p>
        <div className="text-sm text-gray-600">
          Phoenix x Dragon — Strength meets Will.
        </div>
      </div>
    </footer>
  );
}
