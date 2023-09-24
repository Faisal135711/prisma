import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // create user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "John Doe",
  //     email: "john@email.com",
  //   },
  // });
  // console.log(user);

  // get all users
  // const users = await prisma.user.findMany();
  // console.log(users);

  // create article
  // const article = await prisma.article.create({
  //   data: {
  //     title: "First article",
  //     body: "This is Johns first article",
  //     author: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });

  // console.log(article);

  // get all articles
  // const articles = await prisma.article.findMany();
  // console.log(articles);

  //  create user and article and associate them
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Faisal",
  //     email: "faisal@email.com",
  //     articles: {
  //       create: {
  //         title: "my first article",
  //         body: "first article body",
  //       },
  //     },
  //   },
  // });
  // console.log(user);

  // const users = await prisma.user.findMany({
  //   include: {
  //     articles: true,
  //   },
  // });
  // console.log(users);
  // users.forEach((user) => {
  //   console.log(`User: ${user.name}, Email: ${user.email}`);
  //   console.log("Articles: ");
  //   user.articles.forEach((article) => {
  //     console.log(`- Title: ${article.title}, Body: ${article.body}`);
  //   });
  //   console.log("`n");
  // });

  // update data
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "John Jr.",
  //   },
  // });
  // console.log(user);

  // delete data
  const article = await prisma.article.delete({
    where: {
      id: 1,
    },
  });

  console.log(article);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
