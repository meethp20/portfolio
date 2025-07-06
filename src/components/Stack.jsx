export default function Stack({ stack }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((name,id) => {
        return (
          <span 
          key={id}
          className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">
            {name}
          </span>
        );
      })}
    </div>
  );
}
