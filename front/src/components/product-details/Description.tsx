import parse from "html-react-parser";
export default function Description({ description }: { description: string }) {
  const decodedDescription = description.replace(
    /u([0-9A-Fa-f]{4})/g,
    (_, hexCode) => String.fromCharCode(parseInt(hexCode, 16))
  );

  return (
    <div className="mt-10 mb-5 pb-5 max-h-44 overflow-y-auto">
      {parse(decodedDescription)}
    </div>
  );
}
