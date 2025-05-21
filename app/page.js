import Card from "./components/card/card";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('./mypic.png')" }}
    >
      <Card />
    </div>
  );
}


