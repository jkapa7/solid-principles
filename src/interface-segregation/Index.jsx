import { PropTypes } from "prop-types";

//(ISP)
//INTERFACE SEGREGATION PRINCIPLE

//LOS CLIENTES NO DEBEN DEPENDER DE INTERFACES QUE ELLOS NO USAN

//LOS COMPONENTES NO DEBEN DEPENDER DE PROPS QUE NO USE

//EN ESTE CASOM EL COMPONENTE RECIBE UN ITEM, QUE ES UN VIDEO
//Y AL COMPONENTE THUMBNAIL LE PASO TODO EL OBJETO
export const VideoList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Thumbnail key={item.title} coverUrl={item.coverUrl} />
      ))}
    </ul>
  );
};

//PERO ACA EN EL COMPONENTE THUMBNAIL, AL RECIBIR ESE OBJETO
//SOLO UTILIZO COVERURL

//ESTE PRONCIPIO NOS DICE QUE NO SERIA NECESEARIO QUE PASE TODO EL OBJETO, DEBERIA PASAR SOLO LO QUE SE NECESITA

//LO CORRECTO ES ENVIAR SOLO LAS PROPS QUE NECESITA
const Thumbnail = ({ coverUrl }) => {
  return <img src={coverUrl} />;
};

VideoList.propTypes = {
  items: PropTypes.object,
};

Thumbnail.propTypes = {
  coverUrl: PropTypes.object,
};

//INTERFACE-SEGREGATION
//ENVIAR POR PROPS EXCLUSIVAMENTE LO QUE SE USA Y SE NECESITA, NO ENVIAR TODO EL OBJETO
