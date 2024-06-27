export default interface Gift {
  id: number;
  name: string;
  quantity: number;
  given: number;
  win_rate: number;
  type: string;
  order: number;
  created_at: string;
  updated_at: string;
  published_at: string;
  created_by_id: number;
  updated_by_id: number;
}
