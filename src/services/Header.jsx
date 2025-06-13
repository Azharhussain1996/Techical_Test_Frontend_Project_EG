export default function Header() {
  return { "api-security-key": import.meta.env.VITE_APP_API_KEY };
}