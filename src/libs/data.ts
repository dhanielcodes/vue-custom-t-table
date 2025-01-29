import type { TableData } from '@/types/TableTypes'

export const data: TableData[] = [
  {
    id: 1,
    key: '1',
    name: 'Jane Doe',
    firstName: 'Jane',
    lastName: 'Doe',
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
        id: 0,
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
    name: 'Richard Fone',
    firstName: 'Richard',
    lastName: 'Fone',
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
    firstName: 'Alisa',
    lastName: 'Ross',
    amount: 200,
    address: '35 Park Road, London',
    currency: 'USD',
    status: 'inactive',
    paymentStatus: 'unpaid',
    paymentDate: new Date(),
    lastLogin: new Date(),
    email: 'alisa.ross@example.com',
    showNested: false,
    children: [
      {
        id: 0,
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
    id: 3,
    key: '6',
    name: 'Elie Foxx',
    firstName: 'Elie',
    lastName: 'Foxx',
    amount: 200,
    address: '35 Park Road, London',
    currency: 'USD',
    status: 'inactive',
    paymentStatus: 'overdue',
    paymentDate: new Date(),
    lastLogin: new Date(),
    overdueDate: new Date(),
    email: 'alisa.ross@example.com',
    showNested: false,
    children: [
      {
        id: 0,
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
]

export const statusStates: Array<string> = ['paid', 'active', 'overdue', 'unpaid', 'inactive']
