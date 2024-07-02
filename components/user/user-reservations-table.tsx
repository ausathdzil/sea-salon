import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function ReservationsTable({
  userReservations,
}: {
  userReservations: any;
}) {
  return (
    <Table>
      <TableCaption>
        {userReservations.length > 0 ? '' : 'No reservations yet.'}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Session</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userReservations.map((reservation: any) => (
          <TableRow key={reservation.id}>
            <TableCell>{reservation.service}</TableCell>
            <TableCell>
              {new Date(reservation.date).toISOString().split('T')[0]}
            </TableCell>
            <TableCell>{reservation.session}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
