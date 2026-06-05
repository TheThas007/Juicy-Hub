import Link from 'next/link';
import { LogoutButton } from '@/components/ui/LogoutButton';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-black text-white p-6 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Admin Panel</h2>
          <p className="text-sm text-gray-400 mt-1">Juicy Hub</p>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          <Link href="/admin" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Dashboard
          </Link>
          <Link href="/admin/products" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Products
          </Link>
          <Link href="/admin/gallery" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Gallery
          </Link>
          <LogoutButton />
        </nav>
        <div className="mt-auto">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
