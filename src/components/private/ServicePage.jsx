import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import Pagination from './Pagination';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 1. Fetch API Data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 24))); // Limiting to 24 items for demo
  }, []);

  // 2. Pagination Math
  const totalPages = Math.ceil(services.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = services.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>

      {/* TOP NAVIGATION */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />

      {/* MAPPED RESULTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentServices.map((item) => (
          <ServiceCard key={item.id} service={item} />
        ))}
      </div>

      {/* BOTTOM NAVIGATION */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}