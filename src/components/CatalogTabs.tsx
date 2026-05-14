import type { CatalogTab } from '../types/menu';

interface Tab {
  key: CatalogTab;
  label: string;
}

interface CatalogTabsProps {
  tabs: Tab[];
  active: CatalogTab;
  onChange: (key: CatalogTab) => void;
}

export function CatalogTabs({ tabs, active, onChange }: CatalogTabsProps) {
  return (
    <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar border-b border-brown/10">
      <div className="flex space-x-8 pb-4 min-w-max px-2">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={`text-xs md:text-sm font-medium tracking-widest uppercase pb-1 border-b transition-all ${
              active === key
                ? 'text-accent border-accent'
                : 'text-brown-light hover:text-accent border-transparent'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
