import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className=" bg-slate-500 flex justify-around p-3 sticky top-0">
      <div className="flex">
        <img src="/search-svgrepo-com.svg" className="w-10" />
        <input type="search" placeholder="Search..." className="p-2 w-96" />
      </div>
      <div>
        <Link to="/add-product">
          <button type="button" className=" bg-orange-400 rounded-xl p-2">
            Add Product
          </button>
        </Link>
      </div>
    </nav>
  );
}
