import LeftAside from "../components/LeftAside";
import Daily from "../components/Daily";
export default function Home() {
  return (
    <>
      <main className="flex bg-white">
        <aside className="w-1/4">
          <LeftAside />
        </aside>
        <article className="flex flex-col justify-center w-full  h-screen">
          <div className="flex h-fit gap-5 justify-around w-full">
            <div className="border-solid border-2 border-black w-full">
              <p className="font-bold text-lg text-center">ID</p>
            </div>
            <div className="border-solid border-2 border-black  w-full">
              <p className="font-bold text-lg text-center">PACIENTE</p>
            </div>
            <div className="border-solid border-2 border-black  w-full">
              <p className="font-bold text-lg text-center">PAGO</p>
            </div>
          </div>
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
          <Daily />
        </article>
      </main>
    </>
  );
}
