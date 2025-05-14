import Card from "./components/card/card";

export default function Home() {
  return (
    <>
      
      <div className="relative">
        <img src="./mypic.png" className="w-full h-screen object-cover" />
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Card />
        </div>
      </div>
    </>
  );
}

