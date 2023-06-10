export function FullScreenCenterLayout({
  children
}: {
  children: React.ReactNode
}) {

  return <div className="flex justify-center align-center min-h-screen">
    {children}
  </div>
}
