'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { deleteService } from '@/lib/actions';

export default function ServicesTable({
  services,
  userId,
}: {
  services: any[];
  userId: string;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service: any) => (
          <TableRow key={service.id}>
            <TableCell>{service.name}</TableCell>
            <TableCell>{service.duration}</TableCell>
            <TableCell>{service.description}</TableCell>
            <TableCell className="flex gap-2">
              <button
                onClick={async () => {
                  await deleteService(service.id, userId);
                }}
                className="text-red-500"
              >
                Delete
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
