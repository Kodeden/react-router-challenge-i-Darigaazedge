import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import ContactList from "../components/contacts/contact-list";
import Error from "../components/error";
import Loading from "../components/loading";

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
