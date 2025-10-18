export interface Database {
  public: {
    Tables: {
      milestones: {
        Row: {
          id: string
          year: string
          title: string
          kannada: string
          description: string
          image?: string
          category: 'foundation' | 'infrastructure' | 'recognition' | 'expansion' | 'digital' | 'achievement'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          year: string
          title: string
          kannada: string
          description: string
          image?: string
          category: 'foundation' | 'infrastructure' | 'recognition' | 'expansion' | 'digital' | 'achievement'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          year?: string
          title?: string
          kannada?: string
          description?: string
          image?: string
          category?: 'foundation' | 'infrastructure' | 'recognition' | 'expansion' | 'digital' | 'achievement'
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      milestone_category: 'foundation' | 'infrastructure' | 'recognition' | 'expansion' | 'digital' | 'achievement'
    }
  }
}
