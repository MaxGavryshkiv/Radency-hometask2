import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { ITableProps } from "../../interfaces/Table.interface";
import styles from "./Table.module.css";

const Table = ({
  arrOfHeaderName,
  arrOfObj,
  isIncludeSvg,
  openEditForm,
}: ITableProps) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.noteTable}>
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
