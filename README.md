# Table Component

## Overview

This project is a Vue 3 application featuring an interactive, filterable, and sortable table component. The table allows admins to manage user payments, view detailed user information, and update payment statuses efficiently.

## Features

- Display total payable amount for unpaid and overdue users.
- Tabs for filtering users by payment status (All, Paid, Unpaid, Overdue).
- Client-side search functionality.
- Expandable user rows to view additional details.
- Sortable columns by first name, last name, and email.
- Ability to mark unpaid users as paid using checkboxes and a "Pay Dues" button.

## Technologies Used

- Vue 3
- Pinia (State Management)
- TypeScript
- Vite

## Installation

```sh
# Clone the repository
git clone https://github.com/dhanielcodes/scelloo.git
cd dhanielcodes-scelloo

# Install dependencies
npm install

# Run the development server
npm run dev
```

## Directory Structure

```
└── dhanielcodes-scelloo/
    ├── README.md
    ├── env.d.ts
    ├── eslint.config.ts
    ├── index.html
    ├── package.json
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── .editorconfig
    ├── .prettierrc.json
    ├── public/
    └── src/
        ├── App.vue
        ├── main.ts
        ├── shims-vue.d.ts
        ├── assets/
        │   ├── base.css
        │   ├── main.css
        │   └── icons/
        │       ├── ellipses-icon.vue
        │       ├── nest-icon.vue
        │       └── nest-reverse-icon.vue
        ├── components/
        │   ├── AppButton.vue
        │   ├── AppButtonText.vue
        │   ├── BadgeStatus.vue
        │   ├── MenuItem.vue
        │   ├── PopOver.vue
        │   ├── SearchInput.vue
        │   └── TabBar.vue
        ├── libs/
        │   ├── data.ts
        │   └── utils.ts
        ├── router/
        │   └── index.ts
        ├── stores/
        │   └── user.store.ts
        ├── tables/
        │   └── UserTable/
        │       ├── UserTable.vue
        │       └── slots/
        │           ├── amount-slot.vue
        │           ├── name-slot.vue
        │           ├── payment-status-slot.vue
        │           └── status-slot.vue
        ├── types/
        │   └── TableTypes.ts
        └── views/
            └── HomeView.vue
```

## Usage

1. Navigate to the app.
2. Use the tabs to filter users by payment status.
3. Search for users by name using the search input.
4. Click on a row to expand and view user details.
5. Click column headers to sort by first name, last name, or email.
6. Select unpaid users using checkboxes and click "Pay Dues" to update their payment status.

## Live Url

```sh
https://custom-t-table.vercel.app/
```
