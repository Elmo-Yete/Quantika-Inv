import { Link } from "react-router-dom";

export default function LeftAside() {
  return (
    <>
      <nav className="bg-white p-6 text-black h-screen rounded-l-lg flex flex-col justify-between">
        <div className="font-extrabold flex gap-5 ">
          <img src="/Logo Q.webp" className="w-10" />
          <h2 className="text-3xl">MENU</h2>
        </div>
        <section className="flex flex-col">
          <lighter>Manage</lighter>
          <ul className="flex flex-col gap-10 mt-5 text-black/50">
            <li className="">
              <a className="flex items-center">
                <img src="/Dashboard.svg" className="w-12" />
                <p className="font-semibold text-2xl">Dashboard</p>
              </a>
            </li>
            <li className="">
              <a className="flex items-center">
                <img src="/Calendario.svg" className="w-12" />
                <p className="font-semibold text-2xl">Citas</p>
              </a>
            </li>
            <li className="">
              <Link to="/patients">
                <a className="flex items-center">
                  <img src="/User.svg" className="w-12" />
                  <p className="font-semibold text-2xl">Pacientes</p>
                </a>
              </Link>
            </li>
            <li className="">
              <a className="flex items-center">
                <img src="/Chat.svg" className="w-12" />
                <p className="font-semibold text-2xl">Chat</p>
              </a>
            </li>
            <li className="">
              <a className="flex items-center">
                <img src="/Grafic.svg" className="w-12" />
                <p className="font-semibold text-2xl">Reportes</p>
              </a>
            </li>
          </ul>
          <div className="mt-5">
            <lighter>Patients</lighter>
          </div>
          <ul className="flex flex-col gap-10 mt-5 text-black/50">
            <li className="">
              <a className="flex items-center">
                <img src="/Folder.svg" className="w-12" />
                <p className="font-semibold text-2xl">Examenes</p>
              </a>
            </li>
            <li className="">
              <Link to="/products">
                <a className="flex items-center">
                  <img src="/Pill.svg" className="w-12" />
                  <p className="font-semibold text-2xl">Products</p>
                </a>
              </Link>
            </li>
          </ul>
        </section>
        <section className="flex flex-col ">
          <ul className="flex flex-col gap-10 mt-5 text-black/50">
            <li className="text-lg">
              <a className="flex items-center">
                <img src="/notification.svg" className="w-7" />
                <p className="font-semibold text-2xl">Notificaciones</p>
              </a>
            </li>
            <li className="">
              <a className="flex items-center">
                <img src="/Info.svg" className="w-7" />
                <p className="font-semibold text-2xl">Help</p>
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
}
