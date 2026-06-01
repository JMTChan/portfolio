'use client';

import { ArrowUpRight, ImageOff, FlaskConical } from 'lucide-react';
import { BASE_PATH, type Project } from '@/lib/portfolio-data';

type Kind = 'work' | 'hobby';

/**
 * Decide a balanced layout from the item count.
 * - Clean divisible counts use a plain responsive grid.
 * - "Awkward" odd counts (5, 7, 11…) pull the first item out as a large
 *   feature so the remainder divides evenly — no orphaned last row.
 * Everything collapses to one column on mobile (grid-cols-1 base).
 */
function layoutFor(n: number): { lead: boolean; grid: string } {
  if (n <= 1) return { lead: true, grid: '' };
  if (n % 3 === 0) return { lead: false, grid: 'md:grid-cols-2 lg:grid-cols-3' };
  if (n % 2 === 0) return { lead: false, grid: 'sm:grid-cols-2' };
  const rest = n - 1; // odd & not divisible by 3
  return { lead: true, grid: rest % 3 === 0 ? 'md:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2' };
}

function Placeholder({ kind }: { kind: Kind }) {
  const Icon = kind === 'hobby' ? FlaskConical : ImageOff;
  return (
    <div className="flex h-full w-full items-center justify-center bg-surface-2">
      <Icon className="h-12 w-12 text-subtle" strokeWidth={1.5} />
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
      {tags.map((t) => (
        <span key={t} className="font-mono text-[11px] text-subtle">
          {t}
        </span>
      ))}
    </div>
  );
}

function LinkRow({ project, kind }: { project: Project; kind: Kind }) {
  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
      >
        {kind === 'hobby' ? 'View project' : 'Visit site'}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-subtle">
      {kind === 'hobby' ? 'Work in progress' : 'Private repository'}
    </span>
  );
}

/* Large split card used when a section has a single item or a lead feature. */
function FeatureCard({ project, kind }: { project: Project; kind: Kind }) {
  const imgSrc = project.image ? `${BASE_PATH}${project.image}` : null;
  return (
    <article className="group grid overflow-hidden rounded border border-border bg-surface transition-colors duration-300 ease-editorial hover:border-border-strong md:grid-cols-2">
      <div className="relative min-h-[220px] overflow-hidden md:min-h-[360px]">
        <span className="absolute left-4 top-4 z-10 rounded bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-subtle backdrop-blur">
          {project.category}
        </span>
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
          />
        ) : (
          <Placeholder kind={kind} />
        )}
      </div>
      <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">{project.title}</h3>
          <span className="font-mono text-xs text-subtle">{project.year}</span>
        </div>
        <p className="max-w-[55ch] text-base leading-relaxed text-muted">{project.blurb}</p>
        <Tags tags={project.tags} />
        <div className="pt-1">
          <LinkRow project={project} kind={kind} />
        </div>
      </div>
    </article>
  );
}

/* Standard stacked card used inside the responsive grid. */
function GridCard({ project, kind }: { project: Project; kind: Kind }) {
  const imgSrc = project.image ? `${BASE_PATH}${project.image}` : null;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded border border-border bg-surface transition-colors duration-300 ease-editorial hover:border-border-strong">
      <div className="relative aspect-[16/10] overflow-hidden">
        <span className="absolute left-3 top-3 z-10 rounded bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-subtle backdrop-blur">
          {project.category}
        </span>
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
          />
        ) : (
          <Placeholder kind={kind} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-xl font-semibold text-foreground">{project.title}</h3>
          <span className="font-mono text-xs text-subtle">{project.year}</span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>
        <div className="mt-4 border-t border-border pt-4">
          <Tags tags={project.tags} />
        </div>
        <div className="mt-4">
          <LinkRow project={project} kind={kind} />
        </div>
      </div>
    </article>
  );
}

export default function WorkGrid({
  items,
  kind = 'work',
}: {
  items: Project[];
  kind?: Kind;
}) {
  if (items.length === 0) return null;

  const { lead, grid } = layoutFor(items.length);
  const leadItem = lead ? items[0] : null;
  const rest = lead ? items.slice(1) : items;

  return (
    <div className="space-y-6">
      {leadItem && <FeatureCard project={leadItem} kind={kind} />}
      {rest.length > 0 && (
        <div className={`grid auto-rows-fr grid-cols-1 gap-6 ${grid}`}>
          {rest.map((p) => (
            <GridCard key={p.slug} project={p} kind={kind} />
          ))}
        </div>
      )}
    </div>
  );
}
