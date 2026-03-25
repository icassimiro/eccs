import "./App.css";

export default function Marque() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <span>#ECCS</span>
        <span>#GDOC</span>
        <span>#GESTÃO</span>
        <span>#DOCUMENTAL</span>

        {/* duplicado pra loop infinito suave */}
        <span>#ECCS</span>
        <span>#GDOC</span>
        <span>#GESTÃO</span>
        <span>#DOCUMENTAL</span>
      </div>
    </div>
  );
}