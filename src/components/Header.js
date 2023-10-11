import troll from "../Images/Troll Face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={troll} alt="" className="header--image" />
      <h1 className="header--title">Meme generator</h1>
      <h4 className="header--project">React course - project 3</h4>
    </header>
  );
}
