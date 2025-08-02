---
title: "Formicarium"
description: "A real-time simulation of an ant colony, built to visualise the emergent behavior of ants (for fun)."
publishDate: "2025-08-02"
heroImage: "./hero.png"
liveUrl: "https://formicarium.connorflowers.dev"
repoUrl: "https://github.com/c-florist/formicarium"
technologies: ["Rust", "WebAssembly", "SvelteKit"]
---

# Overview

> noun: formicarium
>
> An ant's nest, especially one in an artificial container for purposes of study.

Formicarium is a real-time ant colony simulation that runs directly in your browser. The core simulation logic, which governs ant behavior, pheromone-based pathfinding, and environmental interactions, is built in Rust and compiled to WebAssembly (WASM). The visualization layer sits on top of this core logic, rendered using PixiJS with some cute sprites I found.

I had the idea for this after absentmindedly watching a column of ants doggedly trudge from a pile of crumbs I dropped to, presumably, their nest. I got curious about how one might model the behaviour of both ants and the environment they inhabit and interact with.

You can provide some starting parameters to see how the simulation behaves, give it a go below.
