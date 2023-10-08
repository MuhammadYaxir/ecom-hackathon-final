import { addToCart, cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";


export const POST = async (request: NextRequest) => {
//   const { userId } = auth();
  const userId = "12345a4sdf";

  const req: addToCart = await request.json();

  try {
    if (req) {
      const res = await db
        .insert(cartTable)
        .values({
          user_id: userId,
          product_id: req.product_id,
          quantity: req.quantity,
          image: req.image,
          price: req.price,
          product_name: req.product_name,
          subcat: req.subcat,
          total_price: req.price * req.quantity,
        })
        .returning();
      return NextResponse.json({ Message: "Data Added to DB"}, {status: 200});
    } else {
      throw new Error("Failed to insert Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: error
    }, { status: 400 });
  }
};

export const PUT = async (request: NextRequest) => {
//   const { userId } = auth();
const userId = "12345a4sdf"

  const req: addToCart = await request.json();

  try {
    if (req) {
      const res = await db
        .update(cartTable)
        .set({
          quantity: req.quantity,
          total_price: req.price,
        })
        .where(and(eq(cartTable.user_id, userId as string), eq(cartTable.product_id, req.product_id))).returning();
      return NextResponse.json({ res });
    } else {
      throw new Error("Failed to update Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "Something went wrong",
    });
  }
};
