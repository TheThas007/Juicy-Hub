"use client"

import { useState, useEffect } from "react"
import { GalleryImage, saveGalleryImage, getGallery } from "@/lib/db"
import { Trash2, Plus, X } from "lucide-react"

export default function AdminGallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    url: "",
    alt: ""
  })

  useEffect(() => {
    fetchGallery()
  }, [])

  const fetchGallery = async () => {
    setIsLoading(true)
    try {
      const data = await getGallery()
      setImages(data)
    } catch (error) {
      console.error("Failed to fetch gallery:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenModal = () => {
    setFormData({ url: "", alt: "" })
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    alert("Please wait, saving image directly to database...");
    try {
      const newImage: GalleryImage = {
        id: Date.now().toString(),
        url: formData.url,
        alt: formData.alt
      }
      await saveGalleryImage(newImage)
      
      await fetchGallery()
      handleCloseModal()
      alert("Image saved successfully!");
    } catch (error: any) {
      console.error("Failed to add image:", error)
      alert("Error adding image: " + error.message)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return

    try {
      await fetch(`/api/gallery/${id}`, {
        method: "DELETE"
      })
      await fetchGallery()
    } catch (error) {
      console.error("Failed to delete image:", error)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="text-gray-600 mt-2">Manage your gallery images</p>
        </div>
        <button 
          onClick={handleOpenModal}
          className="bg-black text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus size={20} />
          Add Image
        </button>
      </div>

      {isLoading ? (
        <div className="py-20 text-center text-gray-500">Loading gallery...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div key={img.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="relative aspect-square">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => handleDelete(img.id)}
                    className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-gray-800 truncate">{img.alt}</p>
              </div>
            </div>
          ))}
          {images.length === 0 && (
            <div className="col-span-full p-8 text-center bg-white rounded-2xl border border-gray-100 text-gray-500">
              No images found. Add your first gallery image!
            </div>
          )}
        </div>
      )}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold">Add Image</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-black">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input 
                    type="text" 
                    name="url" 
                    value={formData.url || ""} 
                    onChange={handleChange} 
                    required 
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                    placeholder="https://example.com/image.jpg or /image.png"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description (Alt text)</label>
                  <input 
                    type="text" 
                    name="alt" 
                    value={formData.alt} 
                    onChange={handleChange} 
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                  />
                </div>

                {formData.url && (
                  <div className="mt-4 border rounded-lg p-2">
                    <img src={formData.url} alt="Preview" className="w-full h-40 object-cover rounded-md" />
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-end gap-3">
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
                  Add Image
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
