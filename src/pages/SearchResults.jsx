import { useState } from "react";
import Card from "../components/Card";
import Information from "../data/information.json";

export default function SearchResults({ match }) {
  const [sortKey, setSortKey] = useState("title");
  const query = match.params.query.toUpperCase();
  const filteredResults = Information.filter((item) =>
    item.title.toUpperCase().match(query)
  );
  const sortedResults = filteredResults.sort((a, b) =>
    a[sortKey] > b[sortKey] ? 1 : -1
  );

  const CardsArray = sortedResults.map((item) => (
    <Card key={item.id} information={item} />
  ));

  return (
    <div id="results" className="container">
      <section>
        Filter results by:
        <button onClick={() => setSortKey("title")}>Name</button>
        <button onClick={() => setSortKey("channelName")}>Channel</button>
        <button onClick={() => setSortKey("category")}>Category</button>
        <button onClick={() => setSortKey("uploadDate")}>Upload Date</button>
      </section>

      <hr />
      <section className="grid">{CardsArray}</section>
    </div>
  );
}
