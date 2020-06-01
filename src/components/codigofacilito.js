import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`{
    codigofacilitoJson{
      data{
        courses{
          title
          progress
        }
      }
    }
  }`)
  return(
    <section></section>
  )
}