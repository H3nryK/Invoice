import { Formik, Form, Field, FieldArray } from 'formik';

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

interface InvoiceFormValues {
  clientName: string;
  invoiceNumber: string;
  date: string;
  items: InvoiceItem[];
}

interface InvoiceFormProps {
  onSubmit: (values: InvoiceFormValues) => void;
}

export default function InvoiceForm({ onSubmit }: InvoiceFormProps) {
  const initialValues: InvoiceFormValues = {
    clientName: '',
    invoiceNumber: '',
    date: '',
    items: [{ description: '', quantity: 1, price: 0 }],
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values }) => (
        <Form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Client Name</label>
              <Field 
                name="clientName" 
                className="mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Client Name" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Invoice Number</label>
              <Field 
                name="invoiceNumber" 
                className="mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Invoice Number" 
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Date</label>
            <Field 
              name="date" 
              type="date" 
              className="mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          <FieldArray name="items">
            {({ push, remove }) => (
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Invoice Items</h3>
                {values.items.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end mb-4">
                    <Field 
                      name={`items[${index}].description`} 
                      className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Description" 
                    />
                    <Field 
                      name={`items[${index}].quantity`} 
                      type="number" 
                      className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Quantity" 
                    />
                    <div className="flex items-center space-x-2">
                      <Field 
                        name={`items[${index}].price`} 
                        type="number" 
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Price" 
                      />
                      <button 
                        type="button" 
                        className="text-red-500 hover:text-red-700" 
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="mt-4 text-blue-500 hover:text-blue-700"
                  onClick={() => push({ description: '', quantity: 1, price: 0 })}
                >
                  Add Item
                </button>
              </div>
            )}
          </FieldArray>

          <button 
            type="submit" 
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
          >
            Generate Invoice
          </button>
        </Form>
      )}
    </Formik>
  );
}
