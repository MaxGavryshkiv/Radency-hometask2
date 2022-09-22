import shortid from "shortid";
import TableRow from "./TableRow";
import { IBodyProps } from "../../interfaces/Table.interface";

function TableBody({ arrOfObj, isIncludeSvg, openEditForm }: IBodyProps) {
  return (
    <tbody>
      {arrOfObj.map((el) => {
        if (el.id === undefined) {
          el.id = shortid.generate();
        }

        return (
          <TableRow
            key={el.id}
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
