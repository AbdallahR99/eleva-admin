export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      addresses: {
        Row: {
          address: string | null;
          created_at: string | null;
          created_by: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          email: string | null;
          full_name: string | null;
          id: number;
          is_default: boolean | null;
          is_deleted: boolean | null;
          label: string | null;
          notes: string | null;
          phone: string | null;
          state_code: string | null;
          updated_at: string | null;
          updated_by: string | null;
          user_id: number | null;
        };
        Insert: {
          address?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          email?: string | null;
          full_name?: string | null;
          id?: number;
          is_default?: boolean | null;
          is_deleted?: boolean | null;
          label?: string | null;
          notes?: string | null;
          phone?: string | null;
          state_code?: string | null;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id?: number | null;
        };
        Update: {
          address?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          email?: string | null;
          full_name?: string | null;
          id?: number;
          is_default?: boolean | null;
          is_deleted?: boolean | null;
          label?: string | null;
          notes?: string | null;
          phone?: string | null;
          state_code?: string | null;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "address_state_code_fkey";
            columns: ["state_code"];
            isOneToOne: false;
            referencedRelation: "states";
            referencedColumns: ["code"];
          },
          {
            foreignKeyName: "addresses_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      cart_items: {
        Row: {
          created_at: string | null;
          created_by: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          id: number;
          is_deleted: boolean | null;
          product_id: number | null;
          quantity: number | null;
          updated_at: string | null;
          updated_by: string | null;
          user_id: number | null;
        };
        Insert: {
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          is_deleted?: boolean | null;
          product_id?: number | null;
          quantity?: number | null;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id?: number | null;
        };
        Update: {
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          is_deleted?: boolean | null;
          product_id?: number | null;
          quantity?: number | null;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "cart_items_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "cart_items_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      categories: {
        Row: {
          created_at: string | null;
          created_by: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          id: number;
          image: string | null;
          is_deleted: boolean | null;
          meta_description_ar: string | null;
          meta_description_en: string | null;
          meta_title_ar: string | null;
          meta_title_en: string | null;
          name_ar: string | null;
          name_en: string | null;
          slug: string;
          slug_ar: string;
          updated_at: string | null;
          updated_by: string | null;
        };
        Insert: {
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          image?: string | null;
          is_deleted?: boolean | null;
          meta_description_ar?: string | null;
          meta_description_en?: string | null;
          meta_title_ar?: string | null;
          meta_title_en?: string | null;
          name_ar?: string | null;
          name_en?: string | null;
          slug: string;
          slug_ar: string;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Update: {
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          image?: string | null;
          is_deleted?: boolean | null;
          meta_description_ar?: string | null;
          meta_description_en?: string | null;
          meta_title_ar?: string | null;
          meta_title_en?: string | null;
          name_ar?: string | null;
          name_en?: string | null;
          slug?: string;
          slug_ar?: string;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Relationships: [];
      };
      countries: {
        Row: {
          code: string;
          created_at: string | null;
          created_by: string | null;
          currency_code: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          id: number;
          name_ar: string | null;
          name_en: string;
          updated_at: string | null;
          updated_by: string | null;
        };
        Insert: {
          code: string;
          created_at?: string | null;
          created_by?: string | null;
          currency_code?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          name_ar?: string | null;
          name_en: string;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Update: {
          code?: string;
          created_at?: string | null;
          created_by?: string | null;
          currency_code?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          name_ar?: string | null;
          name_en?: string;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "country_currency_code_fkey";
            columns: ["currency_code"];
            isOneToOne: false;
            referencedRelation: "currencies";
            referencedColumns: ["code"];
          }
        ];
      };
      currencies: {
        Row: {
          code: string;
          created_at: string | null;
          created_by: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          id: number;
          name_ar: string | null;
          name_en: string;
          symbol_ar: string | null;
          symbol_en: string | null;
          updated_at: string | null;
          updated_by: string | null;
        };
        Insert: {
          code: string;
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          name_ar?: string | null;
          name_en: string;
          symbol_ar?: string | null;
          symbol_en?: string | null;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Update: {
          code?: string;
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          name_ar?: string | null;
          name_en?: string;
          symbol_ar?: string | null;
          symbol_en?: string | null;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Relationships: [];
      };
      favorites: {
        Row: {
          created_at: string | null;
          created_by: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          id: number;
          is_deleted: boolean | null;
          product_id: number;
          updated_at: string | null;
          updated_by: string | null;
          user_id: number;
        };
        Insert: {
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          is_deleted?: boolean | null;
          product_id: number;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id: number;
        };
        Update: {
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          is_deleted?: boolean | null;
          product_id?: number;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "favorites_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "favorites_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      invoices: {
        Row: {
          code: string;
          created_at: string | null;
          created_by: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          delivery_fees: number | null;
          discount: number | null;
          id: number;
          is_deleted: boolean | null;
          notes: string | null;
          order_code: string | null;
          products: Json[] | null;
          rate: number | null;
          subtotal: number | null;
          total_price: number;
          updated_at: string | null;
          updated_by: string | null;
          user_address: string | null;
          user_email: string | null;
          user_name: string | null;
          user_notes: string | null;
          user_phone: string | null;
        };
        Insert: {
          code: string;
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          delivery_fees?: number | null;
          discount?: number | null;
          id?: number;
          is_deleted?: boolean | null;
          notes?: string | null;
          order_code?: string | null;
          products?: Json[] | null;
          rate?: number | null;
          subtotal?: number | null;
          total_price: number;
          updated_at?: string | null;
          updated_by?: string | null;
          user_address?: string | null;
          user_email?: string | null;
          user_name?: string | null;
          user_notes?: string | null;
          user_phone?: string | null;
        };
        Update: {
          code?: string;
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          delivery_fees?: number | null;
          discount?: number | null;
          id?: number;
          is_deleted?: boolean | null;
          notes?: string | null;
          order_code?: string | null;
          products?: Json[] | null;
          rate?: number | null;
          subtotal?: number | null;
          total_price?: number;
          updated_at?: string | null;
          updated_by?: string | null;
          user_address?: string | null;
          user_email?: string | null;
          user_name?: string | null;
          user_notes?: string | null;
          user_phone?: string | null;
        };
        Relationships: [];
      };
      order_history: {
        Row: {
          address_id: string | null;
          changed_at: string;
          changed_by: string | null;
          created_at: string;
          id: number;
          note: string | null;
          order_id: number;
          status: Database["public"]["Enums"]["order_status"];
          user_id: string | null;
        };
        Insert: {
          address_id?: string | null;
          changed_at?: string;
          changed_by?: string | null;
          created_at?: string;
          id?: number;
          note?: string | null;
          order_id: number;
          status: Database["public"]["Enums"]["order_status"];
          user_id?: string | null;
        };
        Update: {
          address_id?: string | null;
          changed_at?: string;
          changed_by?: string | null;
          created_at?: string;
          id?: number;
          note?: string | null;
          order_id?: number;
          status?: Database["public"]["Enums"]["order_status"];
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "order_status_history_order_id_fkey";
            columns: ["order_id"];
            isOneToOne: false;
            referencedRelation: "orders";
            referencedColumns: ["id"];
          }
        ];
      };
      order_items: {
        Row: {
          created_at: string | null;
          created_by: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          id: number;
          is_deleted: boolean | null;
          order_id: number | null;
          price: number | null;
          product_id: number | null;
          quantity: number | null;
          updated_at: string | null;
          updated_by: string | null;
        };
        Insert: {
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          is_deleted?: boolean | null;
          order_id?: number | null;
          price?: number | null;
          product_id?: number | null;
          quantity?: number | null;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Update: {
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          is_deleted?: boolean | null;
          order_id?: number | null;
          price?: number | null;
          product_id?: number | null;
          quantity?: number | null;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey";
            columns: ["order_id"];
            isOneToOne: false;
            referencedRelation: "orders";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "order_items_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          }
        ];
      };
      orders: {
        Row: {
          address_id: number | null;
          admin_note: string | null;
          code: string | null;
          created_at: string | null;
          created_by: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          id: number;
          is_deleted: boolean | null;
          payment_method: Database["public"]["Enums"]["payment_method"] | null;
          status: Database["public"]["Enums"]["order_status"] | null;
          total_price: number | null;
          updated_at: string | null;
          updated_by: string | null;
          user_id: number | null;
          user_note: string | null;
        };
        Insert: {
          address_id?: number | null;
          admin_note?: string | null;
          code?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          is_deleted?: boolean | null;
          payment_method?: Database["public"]["Enums"]["payment_method"] | null;
          status?: Database["public"]["Enums"]["order_status"] | null;
          total_price?: number | null;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id?: number | null;
          user_note?: string | null;
        };
        Update: {
          address_id?: number | null;
          admin_note?: string | null;
          code?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          is_deleted?: boolean | null;
          payment_method?: Database["public"]["Enums"]["payment_method"] | null;
          status?: Database["public"]["Enums"]["order_status"] | null;
          total_price?: number | null;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id?: number | null;
          user_note?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "orders_address_id_fkey";
            columns: ["address_id"];
            isOneToOne: false;
            referencedRelation: "addresses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "orders_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      products: {
        Row: {
          admin_note: string | null;
          attributes: Json | null;
          attributes_ar?: Json | null;

          category_id: number | null;
          country_code: string | null;
          created_at: string | null;
          created_by: string | null;
          currency_code: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          description_ar: string | null;
          description_en: string | null;
          id: number;
          images: string[] | null;
          is_deleted: boolean | null;
          keywords: string | null;
          meta_description_ar: string | null;
          meta_description_en: string | null;
          meta_thumbnail: string | null;
          meta_title_ar: string | null;
          meta_title_en: string | null;
          name_ar: string | null;
          name_en: string | null;
          old_price: number | null;
          price: number | null;
          primary_image: string | null;
          quantity: number | null;
          rates_count: number | null;
          sku: string | null;
          slug: string | null;
          slug_ar: string | null;
          total_rates: number | null;
          updated_at: string | null;
          updated_by: string | null;
          variant_group: string | null;
        };
        Insert: {
          admin_note?: string | null;
          attributes?: Json | null;
          attributes_ar?: Json | null;
          category_id?: number | null;
          country_code?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          currency_code?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          description_ar?: string | null;
          description_en?: string | null;
          id?: number;
          images?: string[] | null;
          is_deleted?: boolean | null;
          keywords?: string | null;
          meta_description_ar?: string | null;
          meta_description_en?: string | null;
          meta_thumbnail?: string | null;
          meta_title_ar?: string | null;
          meta_title_en?: string | null;
          name_ar?: string | null;
          name_en?: string | null;
          old_price?: number | null;
          price?: number | null;
          primary_image?: string | null;
          quantity?: number | null;
          rates_count?: number | null;
          sku?: string | null;
          slug?: string | null;
          slug_ar?: string | null;
          total_rates?: number | null;
          updated_at?: string | null;
          updated_by?: string | null;
          variant_group?: string | null;
        };
        Update: {
          admin_note?: string | null;
          attributes?: Json | null;
          attributes_ar?: Json | null;

          category_id?: number | null;
          country_code?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          currency_code?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          description_ar?: string | null;
          description_en?: string | null;
          id?: number;
          images?: string[] | null;
          is_deleted?: boolean | null;
          keywords?: string | null;
          meta_description_ar?: string | null;
          meta_description_en?: string | null;
          meta_thumbnail?: string | null;
          meta_title_ar?: string | null;
          meta_title_en?: string | null;
          name_ar?: string | null;
          name_en?: string | null;
          old_price?: number | null;
          price?: number | null;
          primary_image?: string | null;
          quantity?: number | null;
          rates_count?: number | null;
          sku?: string | null;
          slug?: string | null;
          slug_ar?: string | null;
          total_rates?: number | null;
          updated_at?: string | null;
          updated_by?: string | null;
          variant_group?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_country_code_fkey";
            columns: ["country_code"];
            isOneToOne: false;
            referencedRelation: "countries";
            referencedColumns: ["code"];
          },
          {
            foreignKeyName: "products_currency_code_fkey";
            columns: ["currency_code"];
            isOneToOne: false;
            referencedRelation: "currencies";
            referencedColumns: ["code"];
          }
        ];
      };
      reviews: {
        Row: {
          avatar: string | null;
          comment: string | null;
          created_at: string | null;
          created_by: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          id: number;
          images: string[] | null;
          is_approved: boolean | null;
          is_deleted: boolean | null;
          name: string | null;
          product_id: number | null;
          rating: number | null;
          updated_at: string | null;
          updated_by: string | null;
          user_id: number | null;
        };
        Insert: {
          avatar?: string | null;
          comment?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          images?: string[] | null;
          is_approved?: boolean | null;
          is_deleted?: boolean | null;
          name?: string | null;
          product_id?: number | null;
          rating?: number | null;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id?: number | null;
        };
        Update: {
          avatar?: string | null;
          comment?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          id?: number;
          images?: string[] | null;
          is_approved?: boolean | null;
          is_deleted?: boolean | null;
          name?: string | null;
          product_id?: number | null;
          rating?: number | null;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "reviews_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "reviews_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      states: {
        Row: {
          code: string;
          country_code: string;
          created_at: string | null;
          created_by: string | null;
          delivery_fee: number;
          id: number;
          name_ar: string;
          name_en: string | null;
          updated_at: string | null;
          updated_by: string | null;
        };
        Insert: {
          code: string;
          country_code: string;
          created_at?: string | null;
          created_by?: string | null;
          delivery_fee: number;
          id?: number;
          name_ar: string;
          name_en?: string | null;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Update: {
          code?: string;
          country_code?: string;
          created_at?: string | null;
          created_by?: string | null;
          delivery_fee?: number;
          id?: number;
          name_ar?: string;
          name_en?: string | null;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "states_country_code_fkey";
            columns: ["country_code"];
            isOneToOne: false;
            referencedRelation: "countries";
            referencedColumns: ["code"];
          }
        ];
      };
      users: {
        Row: {
          avatar: string | null;
          created_at: string;
          created_by: string | null;
          deleted_at: string | null;
          deleted_by: string | null;
          email: string;
          first_name: string | null;
          id: number;
          is_admin: boolean | null;
          is_banned: boolean | null;
          is_deleted: boolean | null;
          last_name: string | null;
          phone: string | null;
          updated_at: string | null;
          updated_by: string | null;
          user_id: string | null;
        };
        Insert: {
          avatar?: string | null;
          created_at?: string;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          email: string;
          first_name?: string | null;
          id?: number;
          is_admin?: boolean | null;
          is_banned?: boolean | null;
          is_deleted?: boolean | null;
          last_name?: string | null;
          phone?: string | null;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id?: string | null;
        };
        Update: {
          avatar?: string | null;
          created_at?: string;
          created_by?: string | null;
          deleted_at?: string | null;
          deleted_by?: string | null;
          email?: string;
          first_name?: string | null;
          id?: number;
          is_admin?: boolean | null;
          is_banned?: boolean | null;
          is_deleted?: boolean | null;
          last_name?: string | null;
          phone?: string | null;
          updated_at?: string | null;
          updated_by?: string | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      delete_user_record: {
        Args: { p_user_id: string };
        Returns: undefined;
      };
      soft_delete_user_record: {
        Args: { p_user_id: string; p_deleted_by: string };
        Returns: undefined;
      };
      upsert_user_record: {
        Args: {
          p_user_id: string;
          p_email: string;
          p_first_name: string;
          p_last_name: string;
          p_avatar: string;
          p_phone: string;
          p_created_at: string;
        };
        Returns: undefined;
      };
    };
    Enums: {
      order_status:
        | "draft"
        | "pending"
        | "confirmed"
        | "processing"
        | "shipped"
        | "delivered"
        | "cancelled"
        | "failed"
        | "refunded"
        | "returned";
      payment_method: "cash" | "card";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
      DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
      DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  public: {
    Enums: {
      order_status: [
        "draft",
        "pending",
        "confirmed",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
        "failed",
        "refunded",
        "returned",
      ],
      payment_method: ["cash", "card"],
    },
  },
} as const;

// Extended types for joined data
export type ProductWithCurrency =
  Database["public"]["Tables"]["products"]["Row"] & {
    currency?: Database["public"]["Tables"]["currencies"]["Row"];
  };

// Extended types for joined data with user-specific information
export type ProductWithUserData = ProductWithCurrency & {
  in_cart?: boolean;
  cart_quantity?: number | null;
  is_favorite?: boolean;
};

export type ReviewWithUser = Database["public"]["Tables"]["reviews"]["Row"] & {
  user?: Database["public"]["Tables"]["users"]["Row"];
};

export type OrderItemWithProduct =
  Database["public"]["Tables"]["order_items"]["Row"] & {
    product?: Database["public"]["Tables"]["products"]["Row"] | null;
  };

export type OrderWithItems = Database["public"]["Tables"]["orders"]["Row"] & {
  order_items?: OrderItemWithProduct[];
  user?: Database["public"]["Tables"]["users"]["Row"];
  address?: Database["public"]["Tables"]["addresses"]["Row"];
  order_history?: Database["public"]["Tables"]["order_history"]["Row"][];
  invoice?: Database["public"]["Tables"]["invoices"]["Row"];
  user_address?: Database["public"]["Tables"]["addresses"]["Row"];
};

// Product variant types
export type ProductVariant = Database["public"]["Tables"]["products"]["Row"] & {
  variants?: Database["public"]["Tables"]["products"]["Row"][];
  variant_count?: number;
};

export type Product = Database["public"]["Tables"]["products"]["Row"] & {
  currency?: { symbol_en: string | null };
  category?: { name_en: string | null };
};

// Product attribute types
export type ProductColor = {
  hex: string;
  name: string;
};

export type ProductAttributes = {
  color?: ProductColor;
  size?: string;
  volume?: string;
  concentration?: string;
  brand?: string;
  gender?: string;
  notes?: string[];
  [key: string]: any; // Allow dynamic attributes
};
