export default function AddProd() {
  return (
    <article className="bg-slate-400 h-screen">
      <div>
        <image>
          <input type="file" placeholder="Upload image" />
        </image>
        <div>
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Price" />
          <input type="number" placeholder="n°" />
        </div>
      </div>
      <div>
        <textarea placeholder="Description..." />
      </div>
      <div>
        <button type="button" className="bg-red-500 p-3 rounded-lg">
          Delete
        </button>
        <button type="button" className="bg-lime-500 p-3 rounded-lg">
          Add
        </button>
      </div>
    </article>
  );
}
