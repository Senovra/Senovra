// app/about/page.tsx
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About",
  description: "Learn more about Senovra and what we build.",
};

export default function Page() {
  return <AboutClient />;
}