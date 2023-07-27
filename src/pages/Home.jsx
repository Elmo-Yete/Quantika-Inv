import LeftAside from "../components/LeftAside";
import Nav from "../components/Nav";
// import Daily from "../components/Daily";
export default function Home() {
  return (
    <>
      <main className="">
        <section className="flex bg-gray-400/30 rounded-xl h-fit">
          <aside className="w-2/12">
            <LeftAside />
          </aside>
          <article className="flex flex-col w-full h-screen ms-3">
            <Nav />
          </article>
        </section>
      </main>
    </>
  );
}
