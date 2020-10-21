import React from "react"
import Section  from "../section/section"
import Style from "./skills.module.scss"
import { Col, Container, Row, Card, Button} from "react-bootstrap"
import data from "../../config/skills.config"
import {Link} from "gatsby"

const Skills = () => {
  return(
    <Section color={"#ff0000"} title={"Skills"} styling={Style.skills}>
        <Row noGutters={false} className={'my-4'}>
          {data.map((select) => {
            return(
            <Col lg={4} className={"d-flex justify-content-center my-4 my-lg-0"}>
              <Card className={"shadow-lg"} border={select.type} style={{ width: '20rem', borderRadius: '1rem', backgroundColor: '#e3e3e3'}}>
                <Card.Body>
                  <div className={'d-flex justify-content-center align-items-center'}>
                    <div style={{backgroundImage : `url(${select.icon})`}} className={Style.image + " text-center"}></div>
                  </div>
                  <Card.Title className={"text-center mt-4"}>{select.title}</Card.Title>
                  <Card.Text className={"text-justify " + Style.text}>
                    {select.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            )
          })}
        </Row>
      <div className={'d-flex justify-content-center pt-4 my-4'}>
        <Button variant="outline-primary">
          <Link to={'/portfolio'}>Check out my work -></Link>
        </Button>
      </div>
    </Section>
  )
}

export default Skills