import React from "react"
import Header from "../components/header"
import Repos from "../components/repos";
import CodigoFacilito from '../components/codigofacilito';

export default function Home() {
  return <div>
    <Header/>
    <Repos/>
    <CodigoFacilito/>
  </div>
}
