


interface HistoriaEvento {
  fecha: string;
  eventos: string;
  alcalde: string;
  vice_alcalde?: string;
  regidores: string[];
  logros?: string;
}

interface MunicipalidadInfoProps {
  historia: HistoriaEvento[];
}

const MunicipalidadInfo: React.FC<MunicipalidadInfoProps> = ({ historia }) => {
  return (
    <div className="w-[35rem] text-justify text-gray-600  font-sans">
      {historia.map((evento, index) => (
        <div key={index} className="mb-2">
          <h2 className="text-2xl font-bold mb-4">{evento.fecha}</h2>
          <p className="mb-2">{evento.eventos}</p>
          <p className="mb-2">Alcalde: {evento.alcalde}</p>
          {evento.vice_alcalde && <p className="mb-2">Vice-Alcalde: {evento.vice_alcalde}</p>}
          <div className="mb-2">
            <p>Regidores:</p>
            <ul className="list-disc pl-8">
              {evento.regidores.map((regidor, i) => (
                <li key={i}>{regidor}</li>
              ))}
            </ul>
          </div>
          {evento.logros && (
            <div className="mb-2">
              <p>Logros:</p>
              <p>{evento.logros}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MunicipalidadInfo;
