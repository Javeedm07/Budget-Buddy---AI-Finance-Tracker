import { SignUp } from "@clerk/nextjs";
import { darkTheme } from "../../styles/styles";

export default function Page() {
  return <SignUp appearance={darkTheme} />;
}
