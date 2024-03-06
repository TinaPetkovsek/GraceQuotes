import { useEffect } from "react";
import { useState } from "react";
import Quote from "./Quote.jsx";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3", "tag4"]);
  const [selected_tag, setSelected_tag] = useState(null);

  async function getQuotes() {
    const request = await fetch("/quotes.json");
    const podatki = await request.json();

    setQuotes(podatki);
  }

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    //ali quotes obstaja in ima elemente
    if (!(quotes && quotes.length > 0)) {
      //ce ne, prenehamo izvajati funkcijo
      return;
    }
    //ce pridemo do sem, vemo da se zgornji if ni izvedel

    let tags = []; //const nam preprečuje, da dodamo novo vrednost, namesto tega pišemo let

    quotes.forEach((e) => {
      //za vsak e -quote v quotes
      //console.log(e["tags"]);
      //tags = tags.concat(e["tags"]); izpiše vse tage - nekateri se ponavljajo, zato:
      const quote_tags = e["tags"];
      quote_tags.forEach((el) => {
        //console.log(el);
        if (tags.includes(el) != true) {
          tags.push(el);
        }
      });

      // 1. for loop za vse tage od tega quota (e["tags"])
      // 2. za vsakega preverimo, ce je v seznamu
      //      tags.include("FamousQuotes")
      // 3. ce tega elementa ni, ga dodamo
      //      tags.push("FamousQuotes")
    });
    setTags(tags);
  }, [quotes]);

  return (
    <div className="p-4">
      <div>
        {tags.map((tag) => (
          <Badge>{tag}</Badge> //dodaj onClick
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {quotes.map((quote) => (
          <Quote quote={quote} key={quote["_id"]}></Quote>
        ))}
      </div>
    </div>
  );
}
