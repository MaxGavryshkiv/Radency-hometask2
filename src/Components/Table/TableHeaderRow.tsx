import styles from "./HeaderRow.module.css";
import { IHeadProps } from "../../interfaces/Table.interface";

const TableHeaderRow = ({ arrOfHeaderName }: IHeadProps) => {
  return (
    <tr>
      {arrOfHeaderName.map((el, index) =>
        el === "svg" ? (
          <th key={index}>
            <span className={styles.archive}></span>
            <span className={styles.trash}></span>
          </th>
        ) : (
          <th key={index}>{el}</th>
        )
      )}
    </tr>
  );
};

export default TableHeaderRow;
