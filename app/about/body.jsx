"use client";

export default function Body({ content }) {
  console.log("Data in Body: ", content);
  return (
    <div>
      <h1>About Page Body!</h1>
      <h2>{content.fields.title}</h2>
      <p>{content.fields.body}</p>
    </div>
  );
}
