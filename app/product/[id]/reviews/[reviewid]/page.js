import { notFound } from "next/navigation";

export default function ReviewPage({ params: { id, reviewid } }) {
  if (reviewid > 4) {
    notFound();
  }
  return (
    <div>
      <h1>
        Product id: {id} and Review id:{reviewid}
      </h1>
    </div>
  );
}
