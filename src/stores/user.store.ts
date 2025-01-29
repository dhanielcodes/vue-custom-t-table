import { data } from '@/libs/data'
import type { TableData } from '@/types/TableTypes'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userList: data as TableData[],
      filteredList: data as TableData[],
      sortBy: 'default' as string | number | boolean | undefined,
      status: 'all' as string | number | boolean | undefined,
      paymentStatus: 'all' as null | string,
    }
  },
  actions: {
    updateFilteredUsers(filteredData: TableData[]) {
      this.filteredList = filteredData
    },
  },
})
