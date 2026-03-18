export default function Price() {
  const data = [
    { name: "Lúa", price: "6.000đ/kg" },
    { name: "Xoài", price: "25.000đ/kg" },
    { name: "Cà chua", price: "15.000đ/kg" },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Giá nông sản hôm nay
      </h2>

      <div className="max-w-3xl mx-auto grid gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between p-4 shadow rounded-xl hover:bg-gray-50"
          >
            <span>{item.name}</span>
            <span className="font-bold text-green-600">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}