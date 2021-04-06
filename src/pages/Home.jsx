import Card from "../components/Card";
import Information from "../data/information.json";

export default function Home() {
  const CardsArray = Information.map((item) => (
    <Card key={item.id} information={item} />
  ));

  return (
    <div id="home" className="container">
      <h1>New Collections</h1>

      <div className="grid">{CardsArray}</div>
    </div>
  );
}
