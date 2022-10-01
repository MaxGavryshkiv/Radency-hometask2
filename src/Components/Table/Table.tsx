import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { ITableProps } from "../../interfaces/Table.interface";

const Table = ({
  arrOfHeaderName,
  arrOfObj,
  isIncludeSvg,
  openEditForm,
}: ITableProps) => {
  return (
    <div className="mt-12 max-h-500 overflow-auto flex justify-center mb-3">
      <table className="rounded-xl w-1200 max-h-600 table-fixed border-separate border-spacing-y-4">
        <TableHeader arrOfHeaderName={arrOfHeaderName} />
        <TableBody
          isIncludeSvg={isIncludeSvg}
          arrOfObj={arrOfObj}
          openEditForm={openEditForm}
        />
      </table>
    </div>
  );
};

export default Table;
