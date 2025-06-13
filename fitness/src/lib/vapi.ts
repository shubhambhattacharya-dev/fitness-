import Vap from "@vapi-ai/web";

export const vapi = new Vap(process.env.NEXT_PUBLIC_CLERK_VAPI_KEY as string);