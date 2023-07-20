import LeftAside from "../components/LeftAside";
import Daily from "../components/Daily";
export default function Home() {
  return (
    <>
      <main className="flex bg-white">
        <aside className="w-1/4">
          <LeftAside />
        </aside>
        <article className="flex flex-col justify-center w-full bg-orange-800">
          <div className="flex h-fit gap-5 justify-around">
            <p>ID</p>
            <p>PACIENTE</p>
            <p>PAGO</p>
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
        </article>
      </main>
    </>
  );
}
