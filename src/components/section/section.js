import React  from "react"
import SectionTitle from "../section-title/section-title"

const Section = ({styling,title,color,children,bodyStyle}) => {

  return (
    <div className={styling + " my-3 py-4"}>
      <div className={"d-flex justify-content-center flex-column align-items-center"}>
        <SectionTitle title={title} color={color}/>
      </div>
      <div className={bodyStyle + " mt-5"}>
        {children}
      </div>
    </div>
  )
}

export default Section