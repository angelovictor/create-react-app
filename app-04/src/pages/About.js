import { useParams } from "react-router-dom";

export function About() {
  let params = useParams();
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
        {!!params.aboutID && <p>Params example: {params.aboutID}</p>}
      </main>
    </>
  );
}
