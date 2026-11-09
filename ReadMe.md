# React Projects Monorepo

A modern, high-performance monorepo hosting a collection of React learning applications built with **React 19**, **TypeScript**, and **Vite**, orchestrated using **pnpm workspaces**.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Tech Stack](#tech-stack)
- [Process to Generate This Monorepo From Scratch](#process-to-generate-this-monorepo-from-scratch)
- [Learning Apps Collection](#learning-apps-collection)
  - [1. Emoji Game (`emoji_game`)](#1-emoji-game-emoji_game)
  - [2. Pets Showcase (`pets`)](#2-pets-showcase-pets)
  - [3. Rock Paper Scissors (`rock_paper_scissors`)](#3-rock-paper-scissors-rock_paper_scissors)
  - [4. Todo QA (`todo_qa`)](#4-todo-qa-todo_qa)
- [Commands Guide](#commands-guide)
  - [Start All Apps Simultaneously](#start-all-apps-simultaneously)
  - [Start an Individual App](#start-an-individual-app)
  - [Building for Production](#building-for-production)
  - [Linting](#linting)
  - [Adding Dependencies](#adding-dependencies)
- [Prerequisites](#prerequisites)

---

## Overview

This repository is designed as a modular playground for learning and mastering modern React fundamentals and design patterns. By housing multiple independent frontend projects within a unified **pnpm workspace**, you can:

- Share package manager caches and optimize disk storage.
- Manage consistent tooling, formatting, and linting standards across projects.
- Run, build, and test applications individually or concurrently in parallel.

---

## Repository Structure

```text
React_Projects/
├── .git/
├── .gitignore
├── package.json               # Root workspace package configuration and scripts
├── pnpm-lock.yaml             # Unified monorepo lockfile
├── pnpm-workspace.yaml        # pnpm workspace definition pointing to apps/*
├── ReadMe.md                  # Monorepo documentation
└── apps/                      # Sub-applications directory
    ├── emoji_game/            # Emoji memory & reflex game
    │   ├── index.html
    │   ├── package.json
    │   ├── src/
    │   ├── tsconfig.json
    │   └── vite.config.ts
    ├── pets/                  # Pet adoption & catalog directory
    │   ├── index.html
    │   ├── package.json
    │   ├── src/
    │   ├── tsconfig.json
    │   └── vite.config.ts
    ├── rock_paper_scissors/   # Classic game with score keeping
    │   ├── index.html
    │   ├── package.json
    │   ├── src/
    │   ├── tsconfig.json
    │   └── vite.config.ts
    └── todo_qa/               # Task management & QA testing workflows
        ├── index.html
        ├── package.json
        ├── src/
        ├── tsconfig.json
        └── vite.config.ts
```

---

## Tech Stack

- **Runtime & Package Manager**: [Node.js](https://nodejs.org/) (>= 20.x) & [pnpm](https://pnpm.io/) (>= 10.x / 12.x) Workspaces
- **Framework & UI Library**: [React 19](https://react.dev/) + React DOM 19
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/) with Fast Refresh (HMR)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Code Quality**: [ESLint 10](https://eslint.org/) (Flat config with `typescript-eslint` and React Hooks rules)

---

## Process to Generate This Monorepo From Scratch

Follow these steps to reconstruct or expand this pnpm workspace setup from scratch:

### 1. Initialize the Root Workspace Directory

Create the root folder and initialize git and the root `package.json`:

```bash
mkdir React_Projects
cd React_Projects
git init
```

Initialize `package.json` with pnpm:

```bash
pnpm init
```

### 2. Configure Monorepo Workspace in `pnpm-workspace.yaml`

Create a `pnpm-workspace.yaml` file in the root directory to define the location of the member applications:

```yaml
packages:
  - "apps/*"
```

### 3. Configure Root `package.json`

Update `package.json` to mark the repository as private, specify the package manager, and establish workspace scripts that recursively delegate to the apps:

```json
{
  "name": "react_projects",
  "version": "1.0.0",
  "private": true,
  "packageManager": "pnpm@12.15.0",
  "scripts": {
    "dev": "pnpm --recursive --parallel --if-present dev",
    "build": "pnpm --recursive --if-present build",
    "lint": "pnpm --recursive --if-present lint"
  }
}
```

- `--recursive` (`-r`): Run commands across all workspace packages.
- `--parallel`: Execute dev servers concurrently.
- `--if-present`: Avoid failing if a workspace package does not define the given script.

### 4. Setup Root `.gitignore`

Create a comprehensive `.gitignore` in the repository root:

```gitignore
node_modules/
dist/
build/
.next/
.turbo/
coverage/

.env
.env.*
!.env.example

.DS_Store
*.log
```

### 5. Scaffold the React Applications with Vite

Create the `apps/` directory and scaffold each React application using Vite with the React + TypeScript template:

```bash
mkdir apps

# 1. Emoji Game
pnpm create vite apps/emoji_game --template react-ts

# 2. Pets
pnpm create vite apps/pets --template react-ts

# 3. Rock Paper Scissors
pnpm create vite apps/rock_paper_scissors --template react-ts

# 4. Todo QA
pnpm create vite apps/todo_qa --template react-ts
```

*(Note: Clean up any generated standalone lockfiles like `package-lock.json` inside the individual app folders so that all packages resolve through the central root `pnpm-lock.yaml`).*

### 6. Install Dependencies

From the repository root, install all dependencies across the entire monorepo:

```bash
pnpm install
```

pnpm will link shared dependencies into the virtual store and connect workspace projects seamlessly.

---

## Learning Apps Collection

Each app in `apps/` targets specific React learning milestones and UI design patterns:

### 1. Emoji Game (`emoji_game`)
- **Location**: [`apps/emoji_game`](apps/emoji_game)
- **Concept & Purpose**: A fast-paced memory and reaction game. Players select emojis without choosing the same emoji twice in a round.
- **Key React Learning Objectives**:
  - Managing dynamic game state (current score, top score, game over / win states).
  - Immutability and array randomization / shuffling algorithms in React state updates.
  - Conditional rendering of screens (Start Screen, Game Board, Result Modal).
  - Micro-animations and CSS state transitions on interaction.

### 2. Pets Showcase (`pets`)
- **Location**: [`apps/pets`](apps/pets)
- **Concept & Purpose**: A pet adoption directory featuring cards, details, and filtering capabilities.
- **Key React Learning Objectives**:
  - Component architecture & reusable component composition (PetCard, FilterBar, DetailModal).
  - Controlled form inputs and multi-criteria search/filtering (species, breed, age, status).
  - Managing mock API / async state (loading indicators, error handling, empty states).
  - Prop drilling vs. React Context for cross-cutting state.

### 3. Rock Paper Scissors (`rock_paper_scissors`)
- **Location**: [`apps/rock_paper_scissors`](apps/rock_paper_scissors)
- **Concept & Purpose**: The classic game played against computer opponent logic with real-time rounds and score tracking.
- **Key React Learning Objectives**:
  - Finite state machine (FSM) patterns for game phases (Choosing, Computing, Result).
  - Randomization logic and determining win/tie/loss outcomes cleanly in utility helpers.
  - Custom React hooks (e.g., `useLocalStorage` for persisting best scores and streak tracking).
  - Accessible keyboard navigation and audio/haptic feedback integration.

### 4. Todo QA (`todo_qa`)
- **Location**: [`apps/todo_qa`](apps/todo_qa)
- **Concept & Purpose**: A robust task management and QA test-case tracking app with filtering and validation workflows.
- **Key React Learning Objectives**:
  - Full CRUD operations (Create, Read, Update, Delete) with immutable state updates.
  - Complex filtering and status tabs (All, Pending, Completed, Blocked).
  - Form validation patterns and user input error handling.
  - Designing code for testability and QA automation (data-testid attributes, predictable states).

---

## Commands Guide

### Start All Apps Simultaneously

To launch development servers for **all 4 apps** concurrently in parallel:

```bash
pnpm dev
```

> **Note on Port Allocation**: Vite automatically detects if a port (such as `5173`) is already in use and assigns the next available port (`5174`, `5175`, `5176`, etc.) for subsequent apps, allowing all applications to run alongside one another without port conflicts.

---

### Start an Individual App

You can start any specific app directly from the repository root using the `--filter` flag, or by changing into the app's directory.

#### Option A: From Repository Root (Recommended)

| Application | Command | Default Port |
| :--- | :--- | :--- |
| **Emoji Game** | `pnpm --filter emoji_game dev` | `http://localhost:5173` |
| **Pets** | `pnpm --filter pets dev` | `http://localhost:5173` |
| **Rock Paper Scissors** | `pnpm --filter rock_paper_scissors dev` | `http://localhost:5173` |
| **Todo QA** | `pnpm --filter todo_qa dev` | `http://localhost:5173` |

#### Option B: From the Application Directory

```bash
# Example for emoji_game:
cd apps/emoji_game
pnpm dev
```

---

### Building for Production

#### Build all applications in the workspace:
```bash
pnpm build
```

#### Build a single application:
```bash
pnpm --filter emoji_game build
pnpm --filter pets build
pnpm --filter rock_paper_scissors build
pnpm --filter todo_qa build
```

Production builds will be output to each app's `dist/` directory.

---

### Linting

#### Lint all applications:
```bash
pnpm lint
```

#### Lint a specific application:
```bash
pnpm --filter emoji_game lint
pnpm --filter pets lint
pnpm --filter rock_paper_scissors lint
pnpm --filter todo_qa lint
```

---

### Adding Dependencies

#### Add a dependency to a specific app:
```bash
# Add a runtime dependency to pets
pnpm --filter pets add lucide-react

# Add a dev dependency to emoji_game
pnpm --filter emoji_game add -D canvas-confetti @types/canvas-confetti
```

#### Add a root-level dev dependency:
```bash
pnpm add -Dw prettier
```

---

## Prerequisites

- **Node.js**: `v20.0.0` or higher (verified on `v24.20.0`)
- **pnpm**: `v9.0.0` or higher (verified on `v12.15.0`)
  - If pnpm is not installed, install it globally via Corepack or npm:
    ```bash
    corepack enable
    corepack prepare pnpm@latest --activate
    # or
    npm install -g pnpm
    ```
