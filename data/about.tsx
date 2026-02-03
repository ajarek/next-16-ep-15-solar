import { Leaf, ShieldCheck, Users, Award } from "lucide-react"

export const values = [
  {
    icon: <Leaf className='h-8 w-8 text-green-500' />,
    title: "Ekologia",
    description:
      "Naszym priorytetem jest ochrona środowiska. Każda instalacja to krok w stronę czystszej planety i redukcji śladu węglowego.",
  },
  {
    icon: <ShieldCheck className='h-8 w-8 text-blue-500' />,
    title: "Bezpieczeństwo",
    description:
      "Stosujemy tylko certyfikowane komponenty i przestrzegamy najbardziej rygorystycznych norm bezpieczeństwa podczas montażu.",
  },
  {
    icon: <Award className='h-8 w-8 text-yellow-500' />,
    title: "Jakość",
    description:
      "Współpracujemy wyłącznie z renomowanymi producentami, gwarantując wydajność i niezawodność naszych systemów przez lata.",
  },
  {
    icon: <Users className='h-8 w-8 text-purple-500' />,
    title: "Klient",
    description:
      "Indywidualne podejście to nasza domena. Dopasowujemy rozwiązania idealnie do Twoich potrzeb i możliwości budżetowych.",
  },
]

export const stats = [
  { value: "10+", label: "Lat doświadczenia" },
  { value: "5000+", label: "Zrealizowanych instalacji" },
  { value: "15MW", label: "Zainstalowanej mocy" },
  { value: "100%", label: "Zadowolonych klientów" },
]