import AuthForm from "~/components/auth/AuthForm";
import authStyles from "~/styles/auth.css";
import { login, signup } from "~/data/auth.server";
import { validateCredentials } from "~/data/validation.server";

export default function AuthPage() {
  return <AuthForm />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  // validate user input
  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  if (authMode === "login") {
    return await login(credentials);
  } else {
    return await signup(credentials);
  }
}

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
