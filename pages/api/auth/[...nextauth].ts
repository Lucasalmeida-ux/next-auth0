import NextAuth from "next-auth";
import Auth0Provider, { Auth0Profile } from "next-auth/providers/auth0";
export default NextAuth({
    providers: [
        Auth0Provider<Auth0Profile>({
            clientId: process.env.AUTH0_ID ?? "",
            clientSecret: process.env.AUTH0_SECRET ?? "",
            issuer: process.env.AUTH0_ISSUER
        }),
    ],
});
