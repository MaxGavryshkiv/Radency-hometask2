export interface ITableProps {
  arrOfObj: {
    id?: string;
    noteName?: string;
    created?: string;
    category?: string;
    content?: string;
    dates?: string;
    active?: string | number;
    archive?: string | number;
  }[];
  isIncludeSvg: string | undefined;
  arrOfHeaderName: string[];
  openEditForm?: (id: string) => void;
}

export interface IBodyProps {
  arrOfObj: {
    id?: string;
    noteName?: string;
    created?: string;
    category?: string;
    content?: string;
    dates?: string;
    active?: string | number;
    archive?: string | number;
  }[];
  isIncludeSvg: string | undefined;
  openEditForm?: (id: string) => void;
}
export interface IRowProps {
  rowContent: {
    id?: string;
    noteName?: string;
    created?: string;
    category?: string;
    content?: string;
    dates?: string;
    active?: string | number;
    archive?: string | number;
    isIncludeSvg?: string | undefined;
  };
  isIncludeSvg: string | undefined;
  openEditForm?: (id: string) => void;
}

export interface IHeadProps {
  arrOfHeaderName: string[];
}
