import prisma from "@/lib/prisma"

export async function POST(req: Request) {
  const { name, email } = await req.json()

  const hasSameEmail = await prisma.user.findUnique({
    where: {
      email,
    }
  })

  if (hasSameEmail) {
    return new Response('User already exists.', {
      status: 400
    });
  }

  const createdUser = await prisma.user.create({
    include: {
      posts: true,
    },
    data: {
      name,
      email
    }
  })

  return Response.json(createdUser)
}

export async function GET(req: Request) {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    }
  })

  return Response.json(users)
}