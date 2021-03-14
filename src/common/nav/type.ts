
export type itemType = {
  text: string;
  link?: string;
  active?: boolean;
  child?: itemType[];
};

export type flatItemType = {
  level?: number;
} & itemType;

export interface NavProps {
  data: itemType[];
}
