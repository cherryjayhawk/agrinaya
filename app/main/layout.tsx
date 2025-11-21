import BottomNav from "@/components/bottom-nav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-dvh flex flex-col text-sm text-foreground max-w-lg mx-auto border-2 border-black">
      <div className="relative">{children}</div>
      <div className="relative">
        <BottomNav />
      </div>
    </div>
  );
}
