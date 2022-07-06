import { prism } from "$ts/prism";
import type { RequestHandler } from "@sveltejs/kit";



export const post: RequestHandler = async ({ request }) => {
    const data = await request.json() as { hp: string, pass: string }

    const { hp, pass } = data
    try {
        const body = await prism.user.create({ data: { hp, pass } })
        return {
            body
        }
    } catch (error: any) {
        return { body: error }
    }



}