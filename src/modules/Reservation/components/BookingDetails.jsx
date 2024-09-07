import Separator from "@/components/Separator/Separator";

const BookingDetails = (props) => {

  const { name, address, contact, date } = props

  return (
    <div className="min-w-[30%] border-2 px-2 py-2 rounded-md">
      <p className="text-xl font-semibold mb-2">Booking Details</p>
      <Separator />
      <div className="flex flex-col mt-2">
        <div className="flex gap-2 items-center">
          <p className="text-lg font-medium">Futsal:</p>
          <p>{name}</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-lg font-medium">Address:</p>
          <p>{address.street + ", " + address.district} </p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-lg font-medium">Contact:</p>
          <p>{contact}</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-lg font-medium">Date:</p>
          <p>{date.getMonth() + date.getDate() + ", " + date.getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
