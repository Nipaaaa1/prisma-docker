import express, { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

import cors from "cors";

const app = express();

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/api/users/", async (req: Request, res: Response) => {
  const getAllUsers = {
    data: await prisma.user.findMany(),
  };

  res.send(getAllUsers);
});

app.get("/api/users/:id", async (req: Request, res: Response) => {
  const getOneUser = {
    data: await prisma.user.findFirst({
      where: {
        id: req.params.id as string,
      },
    }),
  };

  res.send(getOneUser);
});

app.post("/api/users/", async (req: Request, res: Response) => {
  const createUser = {
    data: await prisma.user.create({
      data: req.body,
    }),
  };

  res.send(createUser);
});

app.put("/api/users/:id", async (req: Request, res: Response) => {
  const updateUser = {
    data: await prisma.user.update({
      where: {
        id: req.params.id as string,
      },
      data: req.body,
    }),
  };

  res.send(updateUser);
});

app.delete("/api/users/:id", async (req: Request, res: Response) => {
  const deleteUser = {
    data: await prisma.user.delete({
      where: {
        id: req.params.id as string,
      },
    }),
  };

  res.send(deleteUser);
});

app.get("/*", (req: Request, res: Response) => {
  res.send("Please look at the documentation in Github.");
});

app.listen(3000, () => {
  console.log("server listening at port 3000");
});
