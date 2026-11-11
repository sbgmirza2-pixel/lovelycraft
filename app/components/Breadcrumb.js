export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 py-3 text-sm">
      <ol className="flex flex-wrap gap-2 text-[#15251B]/70">
        {items.map((item, i) => (
          <li key={item.url} className="flex gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <a href={item.url} className="hover:underline">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}