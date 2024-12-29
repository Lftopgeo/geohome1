export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      checklist_items: {
        Row: {
          id: string
          category: string
          title: string
          description: string
          status: string
          observations: string | null
          created_at: string
          updated_at: string
          inspection_id: string
          user_id: string
        }
        Insert: {
          id?: string
          category: string
          title: string
          description: string
          status: string
          observations?: string | null
          created_at?: string
          updated_at?: string
          inspection_id: string
          user_id: string
        }
        Update: {
          id?: string
          category?: string
          title?: string
          description?: string
          status?: string
          observations?: string | null
          created_at?: string
          updated_at?: string
          inspection_id?: string
          user_id?: string
        }
      }
      meter_readings: {
        Row: {
          id: string
          current: number
          previous: number
          date: string
          consumption: number
          created_at: string
          updated_at: string
          inspection_id: string
          user_id: string
        }
        Insert: {
          id?: string
          current: number
          previous: number
          date: string
          consumption: number
          created_at?: string
          updated_at?: string
          inspection_id: string
          user_id: string
        }
        Update: {
          id?: string
          current?: number
          previous?: number
          date?: string
          consumption?: number
          created_at?: string
          updated_at?: string
          inspection_id?: string
          user_id?: string
        }
      }
    }
  }
}