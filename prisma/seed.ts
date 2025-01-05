import { db } from "@/lib/db";

async function main() {
  await db.project.create({
    data: {
      title: "Pras CLI",
      description: "Pras CLI is a command line interface for Pras.",
      image: "https://pras.me/images/prascli.svg",
      github: "https://github.com/PRASSamin/pras-cli",
      live: "https://cli.pras.me",
      category: "CLI",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
