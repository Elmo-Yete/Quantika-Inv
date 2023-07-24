import { Link } from "react-router-dom";

export default function LeftAside() {
  return (
    <nav className="bg-stone-800 p-6 text-white h-screen ">
      <div className="font-extrabold text-3xl">
        <img />
        <h2 className="">MENU</h2>
      </div>
      <ul>
        <li className="py-11">
          <Link to="/products">
            <a className="flex items-center">
              <img
                src="/healthcare-hospital-medical-43-svgrepo-com.svg"
                className="w-12"
              />
              <p className="font-semibold text-2xl">Productos</p>
            </a>
          </Link>
        </li>
        <li className="py-11">
          <Link to="/patients">
            <a className="flex items-center">
              <img
                src="/healthcare-hospital-medical-29-svgrepo-com.svg"
                className="w-12"
              />
              <p className="font-semibold text-2xl">Pacientes</p>
            </a>
          </Link>
        </li>
        <li className="py-11">
          <Link to="/reports">
            <a className="flex items-center">
              <img
                src="/healthcare-hospital-medical-12-svgrepo-com.svg"
                className="w-12"
              />
              <p className="font-semibold text-2xl">Reportes</p>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
