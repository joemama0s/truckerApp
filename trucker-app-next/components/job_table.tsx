export default function Job_Table({
  theadData,
  tbodyData,
}: {
  theadData: string[];
  tbodyData: Object[];
}) {
  return (
    // TODO FIX I BROKE LOL
    <h1> ***table will go here. I broke it lol*** </h1>
    // <table className="border-separate border-spacing-2 border border-slate-400">
    //   <thead>
    //     <tr>
    //       {theadData.map((heading: string) => {
    //         return <th key={heading}>{heading}</th>;
    //       })}
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {tbodyData.map((row, index) => {
    //       return (
    //         <tr key={index}>
    //           {theadData.map((key: string) => {
    //             return <td key={row[key]}>{row[Number(key)]}</td>;
    //           })}
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </table>
  );
}
