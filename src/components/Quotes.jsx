import Miadzaki from "../miadzaki.jpg";

function Quotes() {
  return (
    <div className="container-quotes">
      <img src={Miadzaki} alt="Miadzaki" height="500px" width="400px" />
      <p className="par-quotes">
        "Many of my movies have strong female leads- brave, self-sufficient
        girls that don't think twice about fighting for what they believe with
        all their heart. They'll need a friend, or a supporter, but never a
        savior. Any woman is just as capable of being a hero as any man." <br />{" "}
        - Hayao Miyazaki.
      </p>
    </div>
  );
}

export { Quotes };
