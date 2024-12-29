export interface ChecklistItemType {
  id: string;
  label: string;
  isChecked: boolean;
  observations: string;
}

export interface ChecklistData {
  keys: ChecklistItemType[];
  meters: ChecklistItemType[];
}