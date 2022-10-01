import { IHeadProps } from "../../interfaces/Table.interface";

const TableHeaderRow = ({ arrOfHeaderName }: IHeadProps) => {
  return (
    <tr>
      {arrOfHeaderName.map((el, index) =>
        el === "svg" ? (
          <th
            className="bg-white sticky top-0 z-10 border-solid border-t border-b border-black text-left p-1 h-20 last:border-r last:rounded-r-3xl"
            key={index}
          >
            <span className="inline-block w-5 h-5 bg-white bg-no-repeat mr-1 bg-bttn-archive"></span>
            <span className="inline-block w-5 h-5 bg-white bg-no-repeat bg-bttn-delete"></span>
          </th>
        ) : (
          <th
            className="bg-white sticky top-0 z-10 border-solid border-t border-b border-black text-left p-1 h-20 first:border-l first:rounded-l-3xl last:border-r last:rounded-r-3xl"
            key={index}
          >
            {el}
          </th>
        )
      )}
    </tr>
  );
};

export default TableHeaderRow;
