import EnergyManagement from "@/components/EnergyManagement";
import Header from "@/components/Header";
import SolarPanel from "@/components/SolarPanel";
import Solutions from "@/components/Solutions";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-12 bg-background font-sans ">
  <Header />
  <SolarPanel />
  <EnergyManagement/>
  <Solutions/>
  </div>
  );
}