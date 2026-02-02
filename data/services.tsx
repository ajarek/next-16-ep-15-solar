import {
  Wrench,
  Sun,
  Battery,
  ClipboardList,
  PiggyBank,
  Cpu
} from "lucide-react"

export const services = [
    {
      title: "Montaż Instalacji",
      description:
        "Kompleksowy montaż systemów fotowoltaicznych dostosowanych do Twojego dachu i zapotrzebowania. Używamy tylko certyfikowanych komponentów najwyższej klasy.",
      icon: <Sun className='w-8 h-8 text-yellow-500' />,
      image: "/images/smart-help-2.webp",
      features: ["Panele Tier-1", "Szybki montaż", "Gwarancja 25 lat"],
    },
    {
      title: "Magazyny Energii",
      description:
        "Zwiększ autokonsumpcję i zabezpiecz się przed przerwami w dostawie prądu. Bądź niezależny energetycznie dzięki nowoczesnym bateriom.",
      icon: <Battery className='w-8 h-8 text-green-500' />,
      image: "/images/energy-storage.webp",
      features: [
        "Technologia LiFePO4",
        "Backup zasilania",
        "Integracja z Smart Home",
      ],
    },
    {
      title: "Audyt i Projektowanie",
      description:
        "Szczegółowa analiza i projekt instalacji gwarantujący maksymalną wydajność. Każdy projekt tworzymy indywidualnie pod potrzeby klienta.",
      icon: <ClipboardList className='w-8 h-8 text-blue-500' />,
      image: "/images/smart-help-5.webp",
      features: ["Oględziny dronem", "Symulacja uzysku", "Dokładny kosztorys"],
    },
    {
      title: "Serwis i Konserwacja",
      description:
        "Profesjonalny serwis gwarancyjny i pogwarancyjny oraz mycie paneli. Dbamy o to, by Twoja instalacja pracowała z maksymalną mocą.",
      icon: <Wrench className='w-8 h-8 text-orange-500' />,
      image: "/images/smart-help-4.webp",
      features: ["Monitoring online", "Szybka reakcja", "Czyszczenie paneli"],
    },
    {
      title: "Finansowanie",
      description:
        "Pomoc w uzyskaniu dotacji Mój Prąd, Czyste Powietrze i atrakcyjnych kredytów. Zajmujemy się całą biurokracją za Ciebie.",
      icon: <PiggyBank className='w-8 h-8 text-purple-500' />,
      image: "/images/smart-help-6.webp",
      features: [
        "Mój Prąd 6.0",
        "Ulga termomodernizacyjna",
        "Leasing dla firm",
      ],
    },
    {
      title: "Zarządzanie Energią",
      description:
        "Inteligentne systemy HEMS/EMS do optymalizacji zużycia energii w domu. Steruj zużyciem energii prosto ze swojego smartfona.",
      icon: <Cpu className='w-8 h-8 text-indigo-500' />,
      image: "/images/energy-management.webp",
      features: [
        "Aplikacja mobilna",
        "Integracja z pompą ciepła",
        "Ładowanie aut EV",
      ],
    },
  ]