// @ts-nocheck
// Arquivo em JavaScript, ignorando checagem de tipos do TypeScript.

import Contacto from "../components/contacto/index";
import { Helmet } from 'react-helmet-async';



export default function Contato() {
  

  return (
    <div>
      <Helmet>
        <title>Contacto</title>
      </Helmet>
        <div>
            <Contacto />
        </div>
    </div>
  );
}