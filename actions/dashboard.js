"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


export async function createAccount(data) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        // Get request data for ArcJet

        // Check rate limit
        const user = await db.user.findUnique({
            where: { clerkUserId: userId },

        });
        if (!user) {
            throw new Error("User not found");
        }

        // Convert balance to float before saving
        const balanceFloat = parseFloat(data.balance);
        if (isNaN(balanceFloat)) {
            throw new Error("Invalid balance amount");
        }

        // Check if this is the user's first account
        const existingAccounts = await db.account.findMany({
            where: { userId: user.id },
        });

        // If it's the first account, make it default regardless of user input
        // If not, use the user's preference

        const shouldBeDefault =
            existingAccounts.length === 0 ? true : data.isDefault;

    }


    catch (error) { }
}