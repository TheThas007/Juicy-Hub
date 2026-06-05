"use client"

import { useState, useEffect } from "react"
import { Product } from "@/lib/db"
import { Pencil, Trash2, Plus, X } from "lucide-react"

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    desc: "",
    price: "",
    image: "",
    category: "",
    isFeatured: false,
    isBestSeller: false
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/products", { cache: "no-store" })
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error("Failed to fetch products:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product)
      setFormData(product)
    } else {
      setEditingProduct(null)
      setFormData({
        name: "",
        desc: "",
        price: "",
        image: "",
        category: "Juices",
        isFeatured: false,
        isBestSeller: false
      })
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingProduct(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingProduct) {
        // Update
        await fetch(`/api/products/${editingProduct.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        })
      } else {
        // Create
        await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        })
      }
      await fetchProducts()
      handleCloseModal()
    } catch (error) {
      console.error("Failed to save product:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return

    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE"
      })
      await fetchProducts()
    } catch (error) {
      console.error("Failed to delete product:", error)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="text-gray-600 mt-2">Manage your menu items</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-black text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus size={20} />
          Add Product
        </button>
      </div>

      {isLoading ? (
        <div className="py-20 text-center text-gray-500">Loading products...</div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-4 font-semibold text-gray-600">Image</th>
                  <th className="p-4 font-semibold text-gray-600">Name</th>
                  <th className="p-4 font-semibold text-gray-600">Category</th>
                  <th className="p-4 font-semibold text-gray-600">Price</th>
                  <th className="p-4 font-semibold text-gray-600">Status</th>
                  <th className="p-4 font-semibold text-gray-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="p-4">
                      <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                    </td>
                    <td className="p-4 font-medium">{product.name}</td>
                    <td className="p-4 text-gray-600">{product.category}</td>
                    <td className="p-4 font-medium">{product.price}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        {product.isFeatured && <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">Featured</span>}
                        {product.isBestSeller && <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Best Seller</span>}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => handleOpenModal(product)}
                        className="text-gray-500 hover:text-black p-2 transition-colors"
                      >
                        <Pencil size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className="text-gray-500 hover:text-red-600 p-2 transition-colors ml-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
                {products.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-500">
                      No products found. Add your first product!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl my-8">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-black">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name || ""} 
                    onChange={handleChange} 
                    required 
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                  />
                </div>
                
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    name="desc" 
                    value={formData.desc || ""} 
                    onChange={handleChange} 
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (e.g. $7.50)</label>
                  <input 
                    type="text" 
                    name="price" 
                    value={formData.price || ""} 
                    onChange={handleChange} 
                    required 
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select 
                    name="category" 
                    value={formData.category || "Juices"} 
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                  >
                    <option value="Juices">Juices</option>
                    <option value="Smoothies">Smoothies</option>
                    <option value="Tea">Tea</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Milkshakes">Milkshakes</option>
                    <option value="Snacks">Snacks</option>
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input 
                    type="text" 
                    name="image" 
                    value={formData.image || ""} 
                    onChange={handleChange} 
                    required 
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                    placeholder="https://example.com/image.jpg or /image.png"
                  />
                  {formData.image && (
                    <div className="mt-4 border rounded-lg p-2 inline-block">
                      <img src={formData.image} alt="Preview" className="h-32 object-cover rounded-md" />
                    </div>
                  )}
                </div>

                <div className="col-span-2 flex gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="isFeatured" 
                      checked={formData.isFeatured || false} 
                      onChange={handleChange} 
                      className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">Featured Product</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="isBestSeller" 
                      checked={formData.isBestSeller || false} 
                      onChange={handleChange} 
                      className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">Best Seller</span>
                  </label>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 rounded-lg font-medium bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
