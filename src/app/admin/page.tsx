export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <p className="text-gray-600 mb-8">Welcome to the Juicy Hub Admin Panel. Select an option from the sidebar to manage your content.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-2">Products</h2>
          <p className="text-gray-600 mb-4">Manage your menu items, prices, and images.</p>
          <a href="/admin/products" className="inline-block bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Manage Products
          </a>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-2">Gallery</h2>
          <p className="text-gray-600 mb-4">Update the gallery section images on your homepage.</p>
          <a href="/admin/gallery" className="inline-block bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Manage Gallery
          </a>
        </div>
      </div>
    </div>
  );
}
