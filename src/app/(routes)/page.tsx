import MainContent from "../components/MainContent/MainContent";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main id="mainContent" className="flex justify-center h-[calc(100vh-32px)] overflow-y-scroll">
      <MainContent></MainContent>
    </main>
  )
}
