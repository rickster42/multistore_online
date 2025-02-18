import ThemeToggle from "@/components/ui/shared/theme-toggle";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex gap-x-5 justify-end">
        <ThemeToggle />
      </div>
      <h1 className="fon-bold text-blue-500 font-barlow">Welcome to the home page!</h1>
    </div>
  );
}
