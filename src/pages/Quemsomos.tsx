import HeaderSomos from "./../components/quemsomos/headerSomos";
import { Helmet } from 'react-helmet-async';


export function Quemsomos() {
  

  return (
    <div>
      <Helmet>
        <title>Quem somos</title>
      </Helmet>
        <div>
            <HeaderSomos />
        </div>
    </div>
  );
}