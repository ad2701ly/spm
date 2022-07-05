import type { RequestHandler } from "@sveltejs/kit";

export const post: RequestHandler = async ({ request }) => {
    const data = await request.json()
    console.log(data);


    return {
        body: data
    }
}