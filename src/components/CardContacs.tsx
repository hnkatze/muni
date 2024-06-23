import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Divider,
  CardFooter,
  Button,
} from "@nextui-org/react";

export default function CardContacs({
  data,
  handlerDelete,
}: {
  readonly data: ContactDataWithId;
  readonly handlerDelete: (id: string) => void;
}) {
  const { id, name, email, message, subject } = data;

  return (
    <Card className='max-w-[340px] max-h-[340px]'>
      <CardHeader className='justify-between'>
        <div className='flex gap-5'>
          <Avatar showFallback src='https://images.unsplash.com/broken' />
          <div className='flex flex-col gap-1 items-start justify-center'>
            <h4 className='text-small font-semibold leading-none text-default-600'>
              {name}
            </h4>
            <h5 className='text-small tracking-tight text-default-400'>
              {email}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className='px-3 py-0 text-small text-default-400 gap-2'>
        <Divider className='my-2' />
        <h4 className='text-small font-semibold leading-none text-default-600'>
          Asunto: {subject}
        </h4>
        <p>{message}</p>
      </CardBody>
      <CardFooter className='flex justify-end'>
        <Button color='danger' onClick={() => handlerDelete(id)}>
          Borrar
        </Button>
      </CardFooter>
    </Card>
  );
}
