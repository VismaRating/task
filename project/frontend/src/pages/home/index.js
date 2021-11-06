// tools
import axios from "axios";
import { useEffect, useState } from "react";
// components
import Information from "../../components/informations";
// styles
import { Card, Container, Title, TitleContainer } from "./view";

function Home() {
  // make useState for get and update data fetched
  const [value, setValue] = useState();

  useEffect(() => {
    // fetch data from api
    const fetchData = async () => {
      try {
        const response = await axios
          .get("http://localhost:6400/home")
          .then((v) => v.data);

        return setValue(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // push data to an arry to map on it
  const setArray = [];
  setArray.push(value);

  return (
    <Container>
      <Card>
        <TitleContainer>
          <Title>Company Name:</Title>
          <Title>Postal code and City:</Title>
          <Title>Address:</Title>
          <Title>Status:</Title>
          <Title>Company form:</Title>
        </TitleContainer>
        <Information setArray={setArray} />
      </Card>
    </Container>
  );
}

export default Home;
