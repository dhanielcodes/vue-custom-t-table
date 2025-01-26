export const data = [
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
    children: [
      {
        key: '3',
        name: 'Ed Hellen',
        salary: 17000,
        address: '42 Park Road, London',
        email: 'ed.hellen@example.com',
      },
      {
        key: '4',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com',
      },
    ],
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
    children: [
      {
        key: '3',
        name: 'Ed Hellen',
        salary: 17000,
        address: '42 Park Road, London',
        email: 'ed.hellen@example.com',
      },
      {
        key: '4',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com',
      },
    ],
  },
]

export const statusStates: Array<string> = ['paid', 'active', 'overdue', 'unpaid', 'inactive']
