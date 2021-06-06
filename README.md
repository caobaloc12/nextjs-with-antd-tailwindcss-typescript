# NextJS starter

[![Next JS](https://img.shields.io/badge/nextjs-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)](https://github.com/vercel/next.js)
[![Ant Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)](https://github.com/ant-design/ant-design)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://github.com/tailwindlabs/tailwindcss)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/microsoft/TypeScript)
## Getting Started

```
git clone https://github.com/caobaloc12/nextjs-with-antd-tailwindcss-typescript my-webapp

cd my-webapp
yarn install
yarn dev
```

## Deployment

```
yarn build
yarn start

// or run with docker-compose
docker-compose up --build

// open http://localhost:3000
```

## Structure overview
```
├── components
│   ├── Layout
│   |   ├── index.tsx
│   |   ├── MainMenu.tsx
│   |   └── MobileMenu.tsx
│   └── Todo
|       └── TodoItem.tsx
├── containers
|   ├── TodoDetail.tsx
|   └── TodoList.tsx
├── hooks
├── interfaces
├── pages
│   ├── _app.tsx
│   ├── index.tsx
│   ├── about.tsx
│   └── todo
|       ├── [id].tsx
|       └── index.tsx
├── styles
│   ├── custom-antd.css
│   ├── custom-base.css
│   └── global.css
├── utils
├── Application.Dockerfile
├── docker-compose.yml
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── yarn.lock
```
