npm i typescript ts-node @types/node -D

npx tsc --init

npm i prisma

npx prisma init --datasource-provider sqlite

npx prisma migrate dev --name init

npx ts-node index.ts

npx prisma-studio
