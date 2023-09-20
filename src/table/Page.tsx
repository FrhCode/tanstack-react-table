import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { faker } from "@faker-js/faker";

function generateRandomId(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
  }

  return randomId;
}

function getData(): Payment[] {
  const status: Array<Payment["status"]> = [
    "failed",
    "pending",
    "processing",
    "success",
  ];
  const payments: Payment[] = [];

  for (let index = 0; index < 200; index++) {
    const randomStatus = status[Math.floor(Math.random() * status.length)];
    const randomAmount = Math.floor(Math.random() * 1000) + 1;
    const randomId = generateRandomId(10);

    const payment = {
      id: randomId,
      amount: randomAmount,
      status: randomStatus,
      email: faker.internet.email(),
    };

    payments.push(payment);
  }

  return payments;
}

export default function DemoPage() {
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
