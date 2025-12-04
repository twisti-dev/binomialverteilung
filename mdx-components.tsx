import type { MDXComponents } from 'mdx/types'
import { Card, CardGroup, Columns } from '@/components/Card'
import { Tip, Note, Check, Warning } from '@/components/Callouts'
import { Accordion, AccordionGroup } from '@/components/Accordion'
import { Steps, Step } from '@/components/Steps'
import { Tooltip } from '@/components/Tooltip'
import { Mermaid } from '@/components/Mermaid'
import { Expandable } from '@/components/Expandable'
import { Tabs, Tab } from '@/components/Tabs'
import { SigmaGraph } from '@/components/SigmaGraph'
import { NormalDistributionGraph } from '@/components/NormalDistributionGraph'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Card,
    CardGroup,
    Columns,
    Tip,
    Note,
    Check,
    Warning,
    Accordion,
    AccordionGroup,
    Steps,
    Step,
    Tooltip,
    Mermaid,
    Expandable,
    Tabs,
    Tab,
    SigmaGraph,
    NormalDistributionGraph,
    ...components,
  }
}
