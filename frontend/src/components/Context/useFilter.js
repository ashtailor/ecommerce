const { filteredProductList } = useFilter();

return (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {filteredProductList.map(product => (
      <div key={product.id} className="border p-4 rounded shadow hover:shadow-md transition">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">₹{product.price}</p>
        <p className="text-xs text-yellow-500">⭐ {product.rating}</p>
      </div>
    ))}
  </div>
);