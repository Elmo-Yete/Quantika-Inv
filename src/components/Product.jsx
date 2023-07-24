export default function Product() {
  return (
    <article>
      <div className="w-64">
        <img src="/Gab-P.webp" />
      </div>
      <div className="text-center">
        <h3>Nombre del prod</h3>
      </div>
      <div className="text-center">
        <p className="font-semibold">{`$${96}`}</p>
      </div>
    </article>
  );
}
