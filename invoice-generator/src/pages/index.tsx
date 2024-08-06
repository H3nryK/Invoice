import { useState } from 'react';
import InvoiceForm from '../components/InvoiceForm';

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

interface InvoiceData {
  clientName: string;
  invoiceNumber: string;
  date: string;
  items: InvoiceItem[];
}

export default function Home() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);

  const handleInvoiceSubmit = (values: InvoiceData) => {
    setInvoiceData(values);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Invoice Generator</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {!invoiceData ? (
          <InvoiceForm onSubmit={handleInvoiceSubmit} />
        ) : (
          <div>
            <h2 className="text-2xl font-bold">Invoice Preview</h2>
            <p>Client Name: {invoiceData.clientName}</p>
            <p>Invoice Number: {invoiceData.invoiceNumber}</p>
            <p>Date: {invoiceData.date}</p>
            <ul>
              {invoiceData.items.map((item, index) => (
                <li key={index}>
                  {item.description} - {item.quantity} x ${item.price}
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => setInvoiceData(null)}>
              Edit Invoice
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
