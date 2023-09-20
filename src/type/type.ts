interface DiseaseSolution {
  name: string;
  description: string;
}

interface Disease {
  name: string;
  percentage: number;
  description: string;
  solutions: DiseaseSolution[];
}

interface Symptom {
  name: string;
  code: string;
  dsValue: number;
}

export interface Content {
  id: number;
  invoice: string;
  patientName: string;
  invoiceDate: string;
  dieses: Disease[];
  symtoms: Symptom[];
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface ResponseData<T extends object> {
  content: T[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
