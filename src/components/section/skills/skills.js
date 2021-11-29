import React from "react"
import Section  from "../section"
import * as Style from "./skills.module.scss"
import { Col, Row, Card} from "react-bootstrap"
import data from "../../../config/skills.config"

const Skills = () => {


  return(
    <Section id={"skills"} color={"#ff0000"} title={"Skills"} styling={Style.skills}>
        <Row noGutters={false} className={'my-4'}>
          {data.map((select) => {
            return(
            <Col lg={4} className={"d-flex justify-content-center my-4 my-lg-0"}>
              <Card className={"shadow-lg"} border={select.type} style={{ width: '20rem', borderRadius: '1rem', backgroundColor: '#e6e6e6'}}>
                <Card.Body>
                  <div className={'d-flex justify-content-center align-items-center'}>
                    <div style={{backgroundImage : `url(${select.icon})`}} className={Style.image + " text-center"}></div>
                  </div>
                  <Card.Title className={"text-center mt-4"}>{select.title}</Card.Title>
                  <Card.Text className={Style.text + " text-center"}>
                    {select.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            )
          })}
        </Row>
    </Section>
  )
}

export default Skills