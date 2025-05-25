
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { source } from '../../lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions} sidebar={{enabled:true}}>
      {children}
    </DocsLayout>
  );
}