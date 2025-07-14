export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-transparent text-black z-50">
      <div className="container flex items-center justify-between py-4">
        <span className="font-semibold">Logo</span>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Inicio</a></li>
          <li><a href="#" className="hover:underline">Servicios</a></li>
          <li><a href="#" className="hover:underline">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
