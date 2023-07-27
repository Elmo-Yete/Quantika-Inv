export default function Nav() {
  return (
    <nav className="flex p-3">
      <div className="flex bg-slate-200 rounded-xl w-96">
        <img src="/search.svg" className="w-8 text-center ps-1" />
        <input
          type="search"
          placeholder="Search..."
          className="p-2 w-full bg-slate-200 rounded-xl outline-none"
        />
      </div>
    </nav>
  );
}
