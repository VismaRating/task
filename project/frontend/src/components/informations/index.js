// style
import { ContainerData, Informations, Item } from "./view";
function Information({ setArray }) {
  return (
    <>
      {setArray.map((value, index) => {
        if (value !== undefined) {
          return (
            <ContainerData key={index}>
              <Item>{value.hits.hits[0]._source.Vrvirksomhed.navne[0].navn}</Item>
              {/* address */}
              <Item>
                <Informations>
                  <section>
                    {
                      value.hits.hits[0]._source.Vrvirksomhed
                        .beliggenhedsadresse[1].postnummer
                    }
                  </section>
                  <section>
                    {
                      value.hits.hits[0]._source.Vrvirksomhed
                        .beliggenhedsadresse[0].postdistrikt
                    }
                  </section>
                </Informations>
              </Item>
              <Item>
                <Informations>
                  <section>
                    {
                      value.hits.hits[0]._source.Vrvirksomhed
                        .beliggenhedsadresse[2].vejnavn
                    }
                  </section>
                  <section>
                    {
                      value.hits.hits[0]._source.Vrvirksomhed
                        .beliggenhedsadresse[2].husnummerFra
                    }
                  </section>
                </Informations>
              </Item>
              <Item>
                {
                  value.hits.hits[0]._source.Vrvirksomhed.virksomhedsstatus[0]
                    .status
                }
              </Item>
              <Item>
                {
                  value.hits.hits[0]._source.Vrvirksomhed.virksomhedsform[0]
                    .langBeskrivelse
                }
              </Item>
            </ContainerData>
          );
        }
      })}
    </>
  );
}

export default Information;
