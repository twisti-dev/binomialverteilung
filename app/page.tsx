import { Card, Columns } from '@/components/Card'

export default function Home() {
  return (
    <div>
      <h1>Introduction</h1>
      <p>Welcome to the new home for your documentation</p>

      <h2>Setting up</h2>
      <p>Get your documentation site up and running in minutes.</p>

      <Card title="Start here" icon="rocket" href="/quickstart" horizontal>
        Follow our three step quickstart guide.
      </Card>

      <h2>Make it yours</h2>
      <p>Design a docs site that looks great and empowers your users.</p>

      <Columns cols={2}>
        <Card title="Edit locally" icon="pen-to-square" href="/development">
          Edit your docs locally and preview them in real time.
        </Card>
        <Card title="Customize your site" icon="palette" href="/essentials/settings">
          Customize the design and colors of your site to match your brand.
        </Card>
        <Card title="Set up navigation" icon="map" href="/essentials/navigation">
          Organize your docs to help users find what they need and succeed with your product.
        </Card>
        <Card title="API documentation" icon="terminal" href="/api-reference/introduction">
          Auto-generate API documentation from OpenAPI specifications.
        </Card>
      </Columns>

      <h2>Create beautiful pages</h2>
      <p>Everything you need to create world-class documentation.</p>

      <Columns cols={2}>
        <Card title="Write with MDX" icon="pen-fancy" href="/essentials/markdown">
          Use MDX to style your docs pages.
        </Card>
        <Card title="Code samples" icon="code" href="/essentials/code">
          Add sample code to demonstrate how to use your product.
        </Card>
        <Card title="Images" icon="image" href="/essentials/images">
          Display images and other media.
        </Card>
        <Card title="Reusable snippets" icon="recycle" href="/essentials/reusable-snippets">
          Write once and reuse across your docs.
        </Card>
      </Columns>

      <h2>Need inspiration?</h2>

      <Card title="See complete examples" icon="stars" href="https://mintlify.com/customers">
        Browse our showcase of exceptional documentation sites.
      </Card>
    </div>
  )
}
