import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import ContactList from "./contacts/contact-list";
import Error from "./error";
import Loading from "./loading";

export default function Home() {
  const { contacts } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={contacts} errorElement={<Error />}>
        <ContactList />
      </Await>
    </Suspense>
  );
}
