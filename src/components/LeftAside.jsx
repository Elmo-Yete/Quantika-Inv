export default function LeftAside() {
  return (
    <nav className="bg-slate-400 p-5  h-screen ">
      <div className="font-extrabold text-3xl">
        <img />
        <h2 className="">MENU</h2>
      </div>
      <ul className="my-3">
        <li className="py-3">
          <a>Productos</a>
        </li>
        <li className="py-3">
          <a>Pacientes</a>
        </li>
        <li className="py-3">
          <a>Reportes</a>
        </li>
      </ul>
    </nav>
  );
}
