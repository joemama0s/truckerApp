// TODO FIX SQUIGLIES
export default function Job_Table({ theadData, tbodyData }) {
  return (
    <table className="border-separate border-spacing-2 border border-slate-400">
      <thead>
        <tr>
          {theadData.map((heading: string) => {
            return <th key={heading}>{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((row, index) => {
          return (
            <tr key={index}>
              {theadData.map((key, index) => {
                return <td key={row[key]}>{row[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
