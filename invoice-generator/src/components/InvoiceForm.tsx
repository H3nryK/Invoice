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
        <Form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Client Name</label>
            <Field name="clientName" className="input" placeholder="Client Name" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Invoice Number</label>
            <Field name="invoiceNumber" className="input" placeholder="Invoice Number" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Date</label>
            <Field name="date" type="date" className="input" />
          </div>

          <FieldArray name="items">
            {({ push, remove }) => (
              <div>
                {values.items.map((item, index) => (
                  <div key={index} className="flex space-x-2">
                    <Field name={`items[${index}].description`} className="input" placeholder="Description" />
                    <Field name={`items[${index}].quantity`} type="number" className="input w-20" />
                    <Field name={`items[${index}].price`} type="number" className="input w-20" />
                    <button type="button" className="text-red-500" onClick={() => remove(index)}>Remove</button>
                  </div>
                ))}
                <button
                  type="button"
                  className="mt-2 text-blue-500"
                  onClick={() => push({ description: '', quantity: 1, price: 0 })}
                >
                  Add Item
                </button>
              </div>
            )}
          </FieldArray>

          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Generate Invoice</button>
        </Form>
      )}
    </Formik>
  );
}
