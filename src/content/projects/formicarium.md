---
title: "Formicarium"
description: "A simulation of an ant colony, built to explore behavioural patterns."
publishDate: "2025-08-02"
heroImage: "./formicarium-hero.png"
liveUrl: "https://formicarium.connorflowers.dev"
repoUrl: "https://github.com/c-florist/formicarium"
technologies: ["Rust", "WebAssembly", "PixiJS"]
---

# Overview

> noun: formicarium
>
> An ant's nest, especially one in an artificial container for purposes of study.

Formicarium is a simplified ant colony simulation. The core simulation logic, which governs ant behavior, pheromone-based pathfinding, and environmental interactions, is built in Rust and compiled to WebAssembly (WASM). The visualisation layer sits on top of this core logic and is rendered using PixiJS. I used the [Tiled](https://www.mapeditor.org/) editor to create the map using tilesets, but had to write my own parser to render it as a tilemap.

I've always been interested in trying to model animal and insect behaviours, and how one might try to replicate these systems with a machine. Ants and the environment they inhabit seemed like a good place to start as there's a few different patterns and "systems" required to make it appear more realistic. Ant colonies can also be anywhere from a few hundred to a few million ants so testing the systems at that scale is a challenge to implement. This simulation can't handle millions of ants unfortunately, but it can certainly handle thousands.

You can provide some starting parameters to see how the simulation behaves, give it a go below.
