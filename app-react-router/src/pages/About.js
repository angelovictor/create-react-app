import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { PersonAbout } from "../components/PersonAbout";
import { Link } from "react-router-dom";

export function About() {
  let params = useParams();
  const aboutid = params.aboutID;

  const { isLoading, error, data, isFetching } = useQuery("people", () =>
    axios.get(`https://swapi.dev/api/people`).then((res) => {
      console.log("data", res.data);
      return res.data;
    })
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <main>
        <div>{isFetching ? "Updating..." : ""}</div>
          {data.results.filter(f => f.name === aboutid).map((person_about) => (
        <PersonAbout key={person_about.url} data={person_about} />
        ))}

        <nav>
          <Link to="/">Home</Link>
        </nav>
      </main>
    </>
  );
}
