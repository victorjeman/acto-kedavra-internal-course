import cx from "classnames";

import gridStyles from "./grid.module.scss";
import columnStyles from "./column.module.scss";

interface GridProps {
  children: React.ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return <div className={gridStyles["grid"]}>{children}</div>;
};

interface ColumnProps {
  children: React.ReactNode;
  span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const Column = ({ children, span }: ColumnProps) => {
  return (
    <div
      className={cx(
        columnStyles[`column-span-${span}`],
        columnStyles["column"]
      )}
    >
      {children}
    </div>
  );
};
