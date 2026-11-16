export default function ServiceCard({ service }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{service.body}</p>
    </div>
  );
}