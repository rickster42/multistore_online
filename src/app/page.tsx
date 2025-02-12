import ThemeToggle from "@/components/shared/theme-toggle";


export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className=" text-blue-500">Welcome to the home page</h1>
    </div>
  );
}
