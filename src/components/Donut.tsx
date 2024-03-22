import { DonutChart, EventProps, Legend } from "@tremor/react";
import React from "react";

interface Datass {
  name: string;
  datos: number;
}

interface DoughnutChartProps {
  datas: Datass[];
  title: string;
}

const Donut: React.FC<DoughnutChartProps> = ({ datas, title }) => {
  const [value, setValue] = React.useState<EventProps>(null);
  const valueFormatter = (number: number) =>
    ` ${Intl.NumberFormat('us').format(number).toString()}%`;

  // Asegúrate de que esta transformación sea necesaria para tu componente DonutChart
  const transformedData = datas.map(item => ({
    ...item,
    sales: item.datos, // Transforma 'datos' a 'sales' si es necesario
  }));

  const legendNames = datas.map(data => data.name);

  return (
    <div className="flex flex-col w-[25vw] h-[60vh] justify-center">
       <div className="h-16 flex justify-center items-center"> {/* Ajusta esta altura según sea necesario */}
        <h2 className='text-gray-700 text-lg uppercase pt-5 text-center'>{title}</h2>
      </div>
      <div className='w-[25vw] flex flex-col items-center  jusify-center h-96'>
        <DonutChart
          data={transformedData} // Asegúrate de pasar los datos transformados si es necesario
          category="sales"
          variant="donut"
          onValueChange={(v) => setValue(v)}
          index="name"
          valueFormatter={valueFormatter}
          colors={['blue', 'fuchsia', 'violet']}
          className="w-40 h-52 text-black"
        />
        <Legend
          categories={legendNames}
          colors={['blue', 'fuchsia', 'violet']}
          className="h-14"
        />
      </div>
    </div>
  );
};

export default Donut;