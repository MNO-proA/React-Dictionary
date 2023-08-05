import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "../components/NotFound";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Layout from "../components/Layout";
// import SearchAgain from "../components/SearchAgain";

const Definition = () => {
  const [word, setWord] = useState("");
  const [phonetics, setPhonetics] = useState("");
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  let { search } = useParams();

  useEffect(() => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    // const url = "https://httpstat.us/50";
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          setNotFound(true);
        } else if (response.status === 500) {
          setError(true);
        } else if (!response.ok) {
          setError(true);
          throw new Error("Something went wrong, try again");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data !== undefined) {
          console.log(data);
          setWord(data[0].meanings);
          setPhonetics(data[0].phonetics);
          // setWord((word) => {
          //   return { ...word, value: data[0].meanings };
          // });

          // setPhonetics((phonetics) => {
          //   return { ...phonetics, value: data[0].phonetics };
          // });
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [search]);

  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to={"/"}>Search again</Link>
      </>
    );
  }
  if (error === true) {
    return (
      <>
        <p>Something went wrong. Try again later</p>
        <Link to={"/"}>Search again</Link>
      </>
    );
  }

  return (
    <>
      <Layout>
        <Container>
          <Row style={{ marginTop: "30px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              {word || phonetics ? (
                <>
                  <Card className="animate__animated animate__fadeIn">
                    <Card.Header as="h6">
                      Definition of {search} from dictionaryapi.dev
                    </Card.Header>
                    <Card.Body>
                      <Card.Title style={{ color: "blueviolet" }}>
                        <p style={{ fontSize: "40px" }}>{search}</p>
                        {phonetics.map((phonic) => {
                          return (
                            <div>
                              <p>{phonic.text}</p>
                              <audio src={phonic.audio} controls></audio>
                            </div>
                          );
                        })}
                      </Card.Title>

                      {word.map((meaning, index) => {
                        return (
                          <Card.Text key={index}>
                            <Card body>
                              <span style={{ color: "blueviolet" }}>
                                {`${meaning.partOfSpeech.toUpperCase()}: `}
                              </span>

                              {meaning.definitions[0].definition}
                            </Card>
                          </Card.Text>
                        );
                      })}
                      <Link
                        to={"/"}
                        className="shadow  
                        no-underline hover:underline bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      >
                        Search again
                      </Link>
                      {/* <SearchAgain /> */}
                    </Card.Body>
                  </Card>
                </>
              ) : (
                <div class="d-flex align-items-center justify-content-center h-96 ">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};
export default Definition;
