import TableHeaderRow from "./TableHeaderRow";
import { IHeadProps } from "../../interfaces/Table.interface";

const TableHeader = ({ arrOfHeaderName }: IHeadProps) => {
  return (
    <thead>
      <TableHeaderRow arrOfHeaderName={arrOfHeaderName} />
    </thead>
  );
};

export default TableHeader;
