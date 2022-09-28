import shortid from "shortid";
import TableRow from "./TableRow";
import { IBodyProps } from "../../interfaces/Table.interface";

function TableBody({ arrOfObj, isIncludeSvg, openEditForm }: IBodyProps) {
  return (
    <tbody>
      {arrOfObj.map((el) => {
        let key;

        if (el.id !== undefined) {
          key = el.id;
        }
        key = shortid();

        return (
          <TableRow
            key={key}
            rowContent={el}
            isIncludeSvg={isIncludeSvg}
            openEditForm={openEditForm}
          />
        );
      })}
    </tbody>
  );
}

export default TableBody;
