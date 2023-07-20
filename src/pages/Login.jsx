import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center ">
        <section className=" p-12 rounded-md bg-white w-1/4">
          <img />
          <div>
            <h1 className="text-3xl font-extrabold mb-3 text-center">Login</h1>
          </div>
          <form>
            <span className="text-black text-center">Email</span>
            <div className="email text-black py-2">
              <input
                type="email"
                className="py-3 border-2 border-slate-400/50 rounded-lg w-full max-h-10 ps-3"
              />
            </div>
            <span className="text-black">Password</span>
            <div className="password text-black py-2">
              <input
                type="password"
                className="py-3 border-2 border-slate-400/50 rounded-lg w-full max-h-10 ps-3"
              />
            </div>
            <div className="py-3">
              <input type="checkbox" />
              <label className="text-black font-light ps-1">Remember me</label>
            </div>
            <div className="continue">
              <Link to="/home">
                <button
                  type="submit"
                  className="bg-slate-950 text-slate-200 rounded-md p-1 w-full">
                  Continue
                </button>
              </Link>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
