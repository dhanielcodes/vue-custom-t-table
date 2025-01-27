import { reactive } from 'vue'

export const data = reactive([
  {
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
        key: '3',
        name: 'Ed Hellen',
        salary: 17000,
        address: '42 Park Road, London',
        userActivity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        date: new Date(),
        email: 'ed.hellen@example.com',
      },
      {
        key: '4',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com',
        userActivity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        date: new Date(),
      },
    ],
  },
  {
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
        key: '3',
        name: 'Ed Hellen',
        salary: 17000,
        address: '42 Park Road, London',
        email: 'ed.hellen@example.com',
        userActivity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        date: new Date(),
      },
      {
        key: '4',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com',
        userActivity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        date: new Date(),
      },
    ],
  },
])

export const statusStates: Array<string> = ['paid', 'active', 'overdue', 'unpaid', 'inactive']
