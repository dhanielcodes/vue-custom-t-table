import type { TableData } from '@/types/TableTypes'
import { reactive } from 'vue'

export const data = reactive<TableData[]>([
  {
    id: 1,
    key: '1',
    name: 'Jane Doe',
    amount: 230,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    currency: 'USD',
    status: 'active',
    paymentStatus: 'paid',
    paymentDate: new Date(),
    lastLogin: new Date(),
    showNested: false,
    children: [
      {
        id:0,
        userActivity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        date: new Date(),
      },
      {
        id: 1,
        userActivity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        date: new Date(),
      },
    ],
  },
  {
    id: 2,
    key: '1',
    name: 'Jane Doe',
    amount: 230,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    currency: 'USD',
    status: 'active',
    paymentStatus: 'paid',
    paymentDate: new Date(),
    lastLogin: new Date(),
    showNested: false,
    children: [],
  },
  {
    id: 3,
    key: '6',
    name: 'Alisa Ross',
    amount: 200,
    address: '35 Park Road, London',
    currency: 'USD',
    status: 'active',
    paymentStatus: 'unpaid',
    paymentDate: new Date(),
    lastLogin: new Date(),
    email: 'alisa.ross@example.com',
    showNested: false,
    children: [
      {
        id:0,
        userActivity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        date: new Date(),
      },
      {
        id: 1,
        userActivity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        date: new Date(),
      },
    ],
  },
])

export const statusStates: Array<string> = ['paid', 'active', 'overdue', 'unpaid', 'inactive']
