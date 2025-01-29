import { data } from '@/libs/data'
import type { TableData } from '@/types/TableTypes'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userList: data as TableData[],
      filteredList: data as TableData[],
      checkedList: [] as TableData[],
    }
  },
  actions: {
    updateFilteredUsers(filteredData: TableData[]) {
      this.filteredList = filteredData
    },
    payDues() {
      const updatedMap = new Map(
        this.checkedList
          .filter((item: TableData) => item.paymentStatus === 'unpaid')
          .map((item: TableData) => [
            item.id,
            {
              ...item,
              paymentStatus: 'paid' as 'active' | 'paid' | 'unpaid' | 'inactive' | 'overdue',
            },
          ]),
      )
      this.filteredList = this.filteredList.map((item) =>
        updatedMap.has(item.id) ? updatedMap.get(item.id)! : item,
      )
      this.checkedList = [] as TableData[]
    },
  },
})
