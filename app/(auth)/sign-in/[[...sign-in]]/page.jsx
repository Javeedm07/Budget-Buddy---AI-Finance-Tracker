import { SignIn } from "@clerk/nextjs";
import { darkTheme } from "../../styles/styles";

export default function Page() {
  return <SignIn appearance={darkTheme} />;
}
