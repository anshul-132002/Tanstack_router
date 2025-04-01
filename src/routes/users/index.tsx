import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
export const Route = createFileRoute('/users/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/users/"!</div>
}
