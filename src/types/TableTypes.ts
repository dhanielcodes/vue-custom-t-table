/* eslint-disable @typescript-eslint/no-explicit-any */
interface NestedData {
  id: number
  date: Date
  userActivity: string
  detail: string
}
export interface TableData {
  id: number
  key: string
  name: string
  firstName: string
  lastName: string
  address: string
  email: string
  currency: string
  status: 'active' | 'paid' | 'unpaid' | 'inactive' | 'overdue'
  paymentStatus: 'active' | 'paid' | 'unpaid' | 'inactive' | 'overdue'
  paymentDate: any
  lastLogin: any
  overdueDate?: any
  amount: number
  showNested: boolean
  children: NestedData[]
}

export interface ColumnType {
  title: string
  width?: number
  slotName?: string
  icon?: unknown
}
