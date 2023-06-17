import { useEffect, useState } from "react";
import { mockApi } from "../mockApi";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

const CardListing = ({ type }) => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchCardData = () => {
      if (type === "your") {
        let yourData = mockApi.data.filter((item) => item.owner_id === 2);
        setCardList(yourData);
      } else {
        setCardList(mockApi.data);
      }
    };

    fetchCardData();
  }, []);

  return (
    <>
      {cardList.map((card) => {
        return (
          <>
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>{card.name}</CardTitle>
                  <i className="bi bi-search"></i>
                  <i className="icon bi-envelope"></i>
                  {card.card_type === "burner" ? (
                    <CardText>Expiry {card.expiry}</CardText>
                  ) : (
                    <CardText>Limit {card.limit}</CardText>
                  )}
                </Card>
              </Col>
            </Row>
          </>
        );
      })}
    </>
  );
};

export default CardListing;
